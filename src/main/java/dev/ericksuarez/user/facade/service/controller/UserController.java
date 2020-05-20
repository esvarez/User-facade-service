package dev.ericksuarez.user.facade.service.controller;

import dev.ericksuarez.user.facade.service.client.AuthClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private AuthClient authClient;

    @Autowired
    public UserController(AuthClient authClient) {
        this.authClient = authClient;
    }

    @GetMapping("/")
    public void foo() throws CloneNotSupportedException {
        authClient.getToken();
    }
}
