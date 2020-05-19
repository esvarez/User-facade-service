package dev.ericksuarez.user.facade.service.model;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class Token implements Cloneable {
    private String accessToken;

    private int expiresIn;

    private int refreshExpiresIn;

    private String refreshToken;

    private String tokenType;

    private int notBeforePolicy;

    private String sessionState;

    private String scope;

    public Object clone() throws CloneNotSupportedException{
        return super.clone();
    }
}
