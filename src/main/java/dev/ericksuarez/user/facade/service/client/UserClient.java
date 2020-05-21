package dev.ericksuarez.user.facade.service.client;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.ericksuarez.user.facade.service.model.AuthUserResponse;
import dev.ericksuarez.user.facade.service.model.Credentials;
import dev.ericksuarez.user.facade.service.model.UserRegister;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Component
public class UserClient extends HttpClientBase {

    @Value("${application.authServer.path}")
    private String path;

    @Value("${application.authServer.registerUser}")
    private String endpointUser;

    @Autowired
    public UserClient(HttpClient httpClient, ObjectMapper objectMapper) {
        super(httpClient, objectMapper);
    }

    public HttpResponse<String> registerUser(String realm, String accessToken, UserRegister user) {
        log.info("event=registerUserInvoked user={} accessToken={}", user, accessToken);
        String json = formJsonData(user);

        var request =  HttpRequest.newBuilder()
                .uri(URI.create(buildEndpoint(realm)))
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .header("Content-Type", "application/json")
                .header("Authorization", String.format("bearer %s", accessToken))
                .build();

        return makeRequest(request);
    }

    public Optional<AuthUserResponse> getUserFromEmail(String realm, String accessToken, String email) {
        log.info("event=getUserFromEmailInvoked accessToken={}, email={}", accessToken, email);
        var request = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create(String.format("%s?email=%s", buildEndpoint(realm), email)))
                .setHeader("Authorization", String.format("bearer %s", accessToken))
                .build();
        log.info("event=requestAuthUserBuilt request={}", request);
        var authUser = makeRequestAsList(request, AuthUserResponse.class);
        log.info("event=userFound authUser={}", authUser);
        return authUser.stream().findAny();
    }

    public ResponseEntity<?> setPassword(String realm, String accessToken, UUID userId, Credentials credentials) {
        String json = formJsonData(credentials);
        log.info("event=setPasswordInvoked userId={} credentials={}", userId, credentials);

        var request = HttpRequest.newBuilder()
                .PUT(HttpRequest.BodyPublishers.ofString(json))
                .uri(URI.create(String.format("%s/%s/reset-password", buildEndpoint(realm), userId.toString())))
                .header("Content-Type", "application/json")
                .header("Authorization", String.format("bearer %s", accessToken))
                .build();

        var response = makeRequest(request);
        if (response.statusCode() >= 200 && response.statusCode() < 300){
            return ResponseEntity.ok().build();
        } else {
            throw new RuntimeException("Error");
        }
    }

    private String buildEndpoint(String realm) {
        return new StringBuffer()
                .append(path)
                .append(String.format(endpointUser, realm))
                .toString();
    }
}
