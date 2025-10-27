package com.example.museumsearch.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class UserRequest {
    private Long id;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 6)
    private String password;

    @Size(max = 50)
    private String userName;

    public UserRequest() {}

    public UserRequest(Long id, String userName) {
        this.id = id;
        this.userName = userName;
    }

    public UserRequest(Long id, String email, String password, String userName) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userName = userName;
    }
}
