package com.example.museumsearch.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class UserDTO {
    private Long id;

    @Email(message = "有効なメールアドレスを入力してください")
    @NotBlank(message = "メールアドレスは必須です")
    private String email;
    
    @NotBlank(message = "パスワードは必須です")
    @Size(min = 6, message = "パスワードは6文字以上で入力してください")
    private String password;
    
    @Size(max = 50, message = "ユーザー名は50文字以内で入力してください")
    private String userName;

    public UserDTO() {}

    public UserDTO(Long id, String userName) {
        this.id = id;
        this.userName = userName;
    }

    public UserDTO(Long id, String email, String password, String userName) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userName = userName;
    }
}
