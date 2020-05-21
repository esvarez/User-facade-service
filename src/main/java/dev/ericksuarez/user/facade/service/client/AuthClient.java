package dev.ericksuarez.user.facade.service.client;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.ericksuarez.user.facade.service.model.Token;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Component
public class AuthClient extends HttpClientBase {

    @Value("${application.authServer.path}")
    private String path;

    @Value("${application.authServer.authEndPoint}")
    private String endpointAuth;

    @Value("${application.authServer.clientId}")
    private String clientId;

    private Token token;

    @Autowired
    public AuthClient(HttpClient httpClient, ObjectMapper objectMapper) {
        super(httpClient, objectMapper);
    }

    public Optional<Token> getToken() {
        if (token == null) {
            log.warn("event=tokenNotExist token={}", token);
            return Optional.empty();
        }
        log.info("event=returnTokenExist token={}", token);
        return Optional.of(token);
    }

    public Token generateToken(String user, String password){
        log.info("event=generateTokenInvoked");
        var data = new HashMap<Object, Object>();

        data.put("username", user);
        data.put("password", password);
        data.put("grant_type", "password");
        data.put("client_id", clientId);

        var request = buildAuthRequest(data);

        token = makeRequest(request, Token.class);
        log.info("event=tokenGenerate token={}", token);
        return token;
    }

    public Token refreshToken(){
        log.info("event=refreshTokenInvoked token={}", token);
        Map<Object, Object> data = new HashMap<>();

        data.put("grant_type", "refresh_token");
        data.put("client_id", clientId);
        data.put("refresh_token", token.getRefreshToken());

        HttpRequest request = buildAuthRequest(data);

        token = makeRequest(request, Token.class);
        log.info("event=tokenRefreshed token={}", token);
        return token;
    }

    private HttpRequest buildAuthRequest(Map<Object, Object> data){
        return HttpRequest.newBuilder()
                .uri(URI.create(path + endpointAuth))
                .POST(formUrlEncodedData(data))
                .header("Content-Type", "application/x-www-form-urlencoded")
                .build();
    }
}
