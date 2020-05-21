package dev.ericksuarez.user.facade.service.service;

import dev.ericksuarez.user.facade.service.client.AuthClient;
import dev.ericksuarez.user.facade.service.client.UserClient;
import dev.ericksuarez.user.facade.service.error.UnauthorizedException;
import dev.ericksuarez.user.facade.service.model.Credentials;
import dev.ericksuarez.user.facade.service.model.UserRegister;
import dev.ericksuarez.user.facade.service.model.dto.RegisterUserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Value("${application.authServer.user}")
    private String user;

    @Value("${application.authServer.password}")
    private String password;

    private AuthClient authClient;

    private UserClient userClient;

    @Autowired
    public UserService(AuthClient authClient, UserClient userClient) {
        this.authClient = authClient;
        this.userClient = userClient;
    }

    public ResponseEntity registerUser(String realm, RegisterUserDto registerUserDto) {
        var token = authClient.getToken()
                .orElseGet(() -> authClient.generateToken(user, password));

        boolean first = true;
        final var user  = UserRegister.builder()
                .email(registerUserDto.getEmail())
                .username(registerUserDto.getEmail())
                .enabled(true)
                .build();

        while (true) {
            try {
                userClient.registerUser(realm, token.getAccessToken(), user);
            } catch (UnauthorizedException e) {
                if (first) {
                    first = false;
                } else {
                    log.error("event=authenticationError token={}", token);
                    throw new UnauthorizedException();
                }
                token = authClient.refreshToken();
                log.info("event=tryRefreshToken");
                continue;
            }

            var userUUID = userClient.getUserFromEmail(realm, token.getAccessToken(), user.getEmail())
                    .orElseThrow(()->new RuntimeException("UserNotExist"));
            var credentials = Credentials.builder()
                    .temporary(false)
                    .type("password")
                    .value(registerUserDto.getPassword())
                    .build();
            return userClient.setPassword(realm, token.getAccessToken(), userUUID.getId(), credentials);
        }
    }
}
