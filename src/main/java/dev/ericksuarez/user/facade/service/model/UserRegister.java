package dev.ericksuarez.user.facade.service.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class UserRegister {
    private String email;

    private boolean enabled;

    private String username;
}
