package dev.ericksuarez.user.facade.service.controller;

import dev.ericksuarez.user.facade.service.client.AuthClient;
import dev.ericksuarez.user.facade.service.client.UserClient;
import dev.ericksuarez.user.facade.service.model.Credentials;
import dev.ericksuarez.user.facade.service.model.UserRegister;
import dev.ericksuarez.user.facade.service.model.dto.RegisterUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class UserController {

    private AuthClient authClient;

    private UserClient userClient;

    @Autowired
    public UserController(AuthClient authClient, UserClient userClient) {
        this.authClient = authClient;
        this.userClient = userClient;
    }

    @GetMapping("/")
    public void foo() throws CloneNotSupportedException {
        //authClient.getToken();
        authClient.generateToken("admin", "pass");
    }

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody RegisterUserDto user){
        var token = authClient.generateToken("admin", "pass");

        var responseRegister = userClient.registerUser("esuarez", token.getAccessToken(), user.getUserRegister());
        System.out.println(responseRegister);
        var responseEmail = userClient.getUserFromEmail("esuarez", token.getAccessToken(), "emailx");
        System.out.println(responseEmail);
        var credentials = Credentials.builder().temporary(false).value("pass").build();
        userClient.setPassword("esuarez", token.getAccessToken(), UUID.randomUUID(), credentials);
        System.out.println("end");
    }
}
