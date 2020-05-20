package dev.ericksuarez.user.facade.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.ericksuarez.user.facade.service.client.AuthClient;
import dev.ericksuarez.user.facade.service.model.Token;
import lombok.val;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.util.ReflectionTestUtils;

import javax.net.ssl.SSLSession;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class AuthClientTest {

    @Mock
    private HttpClient httpClient;

    @Mock
    private ObjectMapper objectMapper;

    private AuthClient authClient;

    @Before
    public void setUp() throws IOException, InterruptedException {
        val response = buildResponse();
        this.authClient = new AuthClient(httpClient, objectMapper);
        when(httpClient.send(any(HttpRequest.class), any()))
                .thenReturn(response);
        when(objectMapper.readValue(any(byte[].class), any(Class.class)))
                .thenReturn(Token.builder()
                        .accessToken("randomString")
                        .refreshToken("refreshTest")
                        .build());
        ReflectionTestUtils.setField(authClient, "path", "http://testpath");
        ReflectionTestUtils.setField(authClient, "clientId", "clientIdTest");
        ReflectionTestUtils.setField(authClient, "endpointAuth", "auth/endPoint");
    }

    @Test
    public void getToken_tokenNotGenerated_returnOptionalEmpty() throws CloneNotSupportedException {
        val token = authClient.getToken();

        assertFalse(token.isPresent());
    }

    @Test
    public void getToken_tokenGenerated_returnOptionalToken() throws CloneNotSupportedException {
        authClient.generateToken("user", "password");
        val token = authClient.getToken();

        assertTrue(token.isPresent());
    }

    @Test
    public void generateToken_accessRight_returnToken() {
        val token = authClient.generateToken("user", "password");

        assertNotNull(token.getAccessToken());
    }

    @Test
    public void refreshToken_accessRight_returnToken() {
        authClient.generateToken("user", "password");
        val token = authClient.refreshToken();

        assertNotNull(token.getAccessToken());
    }

    private HttpResponse buildResponse() {
        return new HttpResponse() {
            @Override
            public int statusCode() {
                return 200;
            }

            @Override
            public HttpRequest request() {
                return null;
            }

            @Override
            public Optional<HttpResponse> previousResponse() {
                return Optional.empty();
            }

            @Override
            public HttpHeaders headers() {
                return null;
            }

            @Override
            public Object body() {
                return "bodyTest";
            }

            @Override
            public Optional<SSLSession> sslSession() {
                return Optional.empty();
            }

            @Override
            public URI uri() {
                return null;
            }

            @Override
            public HttpClient.Version version() {
                return null;
            }
        };
    }
}
