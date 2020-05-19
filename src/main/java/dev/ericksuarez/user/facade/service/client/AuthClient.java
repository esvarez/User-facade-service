package dev.ericksuarez.user.facade.service.client;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.ericksuarez.user.facade.service.model.Token;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.internal.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Component
public class AuthClient extends HttpClientBase {

    //@Value("${application.authServer.path}")
    private String path = "http://localhost:8083";

    //@Value("${app.auth-server.endpoint.auth}")
    private String endpointAuth = "/auth/realms/master/protocol/openid-connect/token";

    //@Value("${app.auth-server.user}")
    private String user = "admin";

    //@Value("${app.auth-server.password}")
    private String password = "pass";

    private Token token;

    @Autowired
    public AuthClient(HttpClient httpClient, ObjectMapper objectMapper) {
        super(httpClient, objectMapper);
    }

    public Optional<Token> getToken() throws CloneNotSupportedException {
        return  Optional.of((Token) token.clone());
    }

    public void generateToken(){
        log.info("event=generateTokenInvoked");
        var data = new HashMap<Object, Object>();

        data.put("username", user);
        data.put("password", password);
        data.put("grant_type", "password");
        data.put("client_id", "admin-cli");

        var request = buildAuthRequest(data);

        token = makeRequest(request, Token.class);
        log.info("event=tokenGenerate token={}", token);
    }

    protected HttpResponse<String> makeSafeTokenRequest(HttpRequest request) {
        log.info("event=makeSafeTokenRequestInvoked request={} token={}", request, token);
        if (token.getAccessToken() == null) generateToken();
        HttpResponse<String> response = makeRequest(request);
        log.info("event=safeResponse response={}", response);
        if (response.statusCode() == 401){
            // refreshToken();
        } else {
            return response;
        }
        return makeRequest(request);
    }

    protected <T> T makeSafeTokenRequest(HttpRequest request, Class<T> tClass) {
        //HttpResponse<String> response = makeSafeTokenRequest(request);
        //return mapping(response, tClass);
        return null;
    }

    protected void refreshToken(){
        log.info("event=refreshTokenInvoked");
        Map<Object, Object> data = new HashMap<>();

        data.put("grant_type", "refresh_token");
        data.put("client_id", "admin-cli");
        data.put("refresh_token", token.getRefreshToken());

        HttpRequest request = buildAuthRequest(data);

        token = makeRequest(request, Token.class);
        log.info("event=tokenRefreshed token={}", token);
    }

    private HttpRequest buildAuthRequest(Map<Object, Object> data){
        return HttpRequest.newBuilder()
                .uri(URI.create(path + endpointAuth))
                .POST(formUrlEncodedData(data))
                .header("Content-Type", "application/x-www-form-urlencoded")
                .build();
    }
}
