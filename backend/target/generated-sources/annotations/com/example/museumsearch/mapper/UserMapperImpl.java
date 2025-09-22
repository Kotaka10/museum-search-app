package com.example.museumsearch.mapper;

import com.example.museumsearch.dto.UserDTO;
import com.example.museumsearch.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-09-21T14:34:44+0900",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.43.0.v20250819-1513, environment: Java 21.0.8 (Eclipse Adoptium)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDTO toDTO(User user) {
        if ( user == null ) {
            return null;
        }

        Long id = null;
        String userName = null;

        id = user.getId();
        userName = user.getUserName();

        UserDTO userDTO = new UserDTO( id, userName );

        return userDTO;
    }

    @Override
    public User toEnitity(UserDTO userDTO) {
        if ( userDTO == null ) {
            return null;
        }

        User user = new User();

        return user;
    }
}
