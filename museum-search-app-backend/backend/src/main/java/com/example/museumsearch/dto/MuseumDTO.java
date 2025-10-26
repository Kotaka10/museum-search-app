package com.example.museumsearch.dto;

import java.time.LocalDate;

import com.example.museumsearch.model.MuseumStatus;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class MuseumDTO {

    private Long id;
    
    @NotBlank(message = "名称は必須です")
    @Size(max = 100)
    private String name;

    @NotBlank(message = "住所は必須です")
    @Size(max = 200)
    private String address;
    
    @Size(max = 10)
    private String prefecture;
    
    @Size(max = 100)
    private String exhibition;
    
    @Size(max = 100)
    private String imageProvider;
    
    @Size(max = 100)
    private String exhibitionImage;
    
    @Size(max = 100)
    private String museumUrl;
    
    @Size(max = 230)
    private String exhibitionUrl;
    private LocalDate startDate;
    private LocalDate endDate;
    
    @Size(max = 1500)
    private String description;
    
    @Size(max = 15)
    private String phoneNumber;
    
    @Size(max = 500)
    private String openingHours;
    
    @Size(max = 500)
    private String closingDays;
    
    @Size(max = 1000)
    private String admissionFee;
    
    @Size(max = 500)
    private String access;
    private Double latitude;
    private Double longitude;
    
    @Size(max = 100)
    private String category;
    private Double distance;
    private MuseumStatus status;
    private String createdByUsername;
}
