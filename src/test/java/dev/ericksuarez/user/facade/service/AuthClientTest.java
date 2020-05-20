package dev.ericksuarez.user.facade.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.ericksuarez.user.facade.service.client.AuthClient;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;

import java.net.http.HttpClient;

public class AuthClientTest {

    @Mock
    private HttpClient httpClient;

    @Mock
    private ObjectMapper objectMapper;

    private AuthClient authClient;

    @Before
    public void setUp() {
        this.authClient = new AuthClient(httpClient, objectMapper);
    }

    @Test
    public void foo() throws CloneNotSupportedException {
        this.authClient.getToken();
    }
}
