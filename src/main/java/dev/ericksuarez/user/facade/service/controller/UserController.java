package dev.ericksuarez.user.facade.service.controller;

import dev.ericksuarez.user.facade.service.model.dto.RegisterUserDto;
import dev.ericksuarez.user.facade.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/registerUser/{realm}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createUser(@PathVariable String realm, @RequestBody RegisterUserDto user){
        return userService.registerUser(realm, user);
    }
}
