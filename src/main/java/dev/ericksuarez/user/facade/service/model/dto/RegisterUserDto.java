package dev.ericksuarez.user.facade.service.model.dto;

import dev.ericksuarez.user.facade.service.model.Credentials;
import dev.ericksuarez.user.facade.service.model.UserRegister;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class RegisterUserDto {
    private UserRegister userRegister;

    private Credentials credentials;
}
