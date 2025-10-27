package com.example.museumsearch.mapper;

import org.springframework.stereotype.Component;
import org.springframework.beans.BeanUtils;

import com.example.museumsearch.dto.UserRequest;
import com.example.museumsearch.dto.UserResponse;
import com.example.museumsearch.model.User;

@Component
public class UserMapper {
    public UserResponse toResponse(User user) {
        if (user == null) return null;
        UserResponse response = new UserResponse();
        BeanUtils.copyProperties(user, response);
        return response;
    }

    public User toEntity(UserRequest request) {
        if (request == null) return null;
        User user = new User();
        BeanUtils.copyProperties(request, user);
        return user;
    }
}
