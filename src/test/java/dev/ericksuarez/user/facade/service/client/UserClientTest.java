package dev.ericksuarez.user.facade.service.client;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.ericksuarez.user.facade.service.model.AuthUserResponse;
import dev.ericksuarez.user.facade.service.model.Credentials;
import lombok.val;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;

import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.util.Arrays;
import java.util.UUID;

import static dev.ericksuarez.user.facade.service.util.UtilTest.buildResponse;
import static dev.ericksuarez.user.facade.service.util.UtilTest.buildUser;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class UserClientTest {

    @Mock
    private HttpClient httpClient;

    @Mock
    private ObjectMapper objectMapper;

    private UserClient userClient;

    @Before
    public void setUp() throws IOException, InterruptedException {
        this.userClient = new UserClient(httpClient, objectMapper);
        val responseBuild = buildResponse();
        when(httpClient.send(any(HttpRequest.class), any()))
                .thenReturn(responseBuild);
        ReflectionTestUtils.setField(userClient, "path", "http://testpath");
        ReflectionTestUtils.setField(userClient, "endpointUser", "/auth/%s/user");
    }

    @Test
    public void registerUser_userOk_returnStatusOk() throws IOException {
        when(objectMapper.writeValueAsString(any(Object.class)))
                .thenReturn("{\"email\": \"email3\",\"enabled\": true,\"username\": \"username3\"}");

        val response = userClient.registerUser("realm", "accessToken", buildUser());

        assertEquals(200, response.statusCode());
    }

    @Test
    public void getUserFromEmail_emailExist_returnUser() throws IOException {
        when(objectMapper.readValue(any(byte[].class), any(Class.class)))
                .thenReturn(Arrays.asList(AuthUserResponse.builder().id(UUID.randomUUID()).build()));
        when(objectMapper.convertValue(any(AuthUserResponse.class), any(Class.class)))
                .thenReturn(AuthUserResponse.builder().id(UUID.randomUUID()).build());

        val user = userClient.getUserFromEmail("realm", "accessToken", "email");

        assertTrue(user.isPresent());
    }

    @Test
    public void setPassword_uuidExist_changeSuccessful() throws JsonProcessingException {
        val credentials = Credentials.builder().temporary(false).value("pass").build();
        when(objectMapper.writeValueAsString(any(Object.class)))
                .thenReturn("{\"email\": \"email3\",\"enabled\": true,\"username\": \"username3\"}");
        val status = userClient.setPassword("realm", "accessToken", UUID.randomUUID(), credentials);

        assertEquals(ResponseEntity.ok().build(), status);
    }
}
