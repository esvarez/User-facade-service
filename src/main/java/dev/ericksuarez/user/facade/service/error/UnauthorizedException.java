package dev.ericksuarez.user.facade.service.error;

public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException() {
        super("Unauthorized Exception");
    }
}
