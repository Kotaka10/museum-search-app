package com.example.museumsearch.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "museums")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Museum {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String address;

    private String prefecture;

    private String exhibition;

    @Column(name = "image_provider")
    private String imageProvider;

    @Column(name = "exhibition_image")
    private String exhibitionImage;

    @Column(name = "museum_url")
    private String museumUrl;

    @Column(name ="exhibition_url")
    private String exhibitionUrl;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    private String description;

    @Column(name ="phone_number")
    private String phoneNumber;

    @Column(name ="opening_hours")
    private String openingHours;

    @Column(name ="closing_days")
    private String closingDays;

    @Column(name ="adminssion_fee")
    private String admissionFee;

    private String access;

    private Double latitude;
    private Double longitude;

    private String category;

    private Double distance;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private MuseumStatus status = MuseumStatus.APPROVED;

    @ManyToOne
    @JoinColumn(name = "created_by_id")
    private User createdBy;

    public void updateName(String name) {
        this.name = name;
    }

    public void updateAddress(String address) {
        this.address = address;
    }

    public void updatePrefecture(String prefecture) {
        this.prefecture = prefecture;
    }
    
    public void updateExhibition(String exhibition) {
        this.exhibition = exhibition;
    }

    public void updateImageProvider(String imageProvider) {
        this.imageProvider = imageProvider;
    }

    public void updateExhibitionImage(String exhibitionImage) {
        this.exhibitionImage = exhibitionImage;
    }

    public void updateMuseumUrl(String museumUrl) {
        this.museumUrl = museumUrl;
    }

    public void updateExhibitionUrl(String exhibitionUrl) {
        this.exhibitionUrl = exhibitionUrl;
    }

    public void updateStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public void updateEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public void updateDescription(String description) {
        this.description = description;
    }

    public void updatePhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void updateOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public void updateClosingDays(String closingDays) {
        this.closingDays = closingDays;
    }

    public void updateAdmissionFee(String admissionFee) {
        this.admissionFee = admissionFee;
    }

    public void updateAccess(String access) {
        this.access = access;
    }

    public void updateLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public void updateLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public void updateCategory(String category) {
        this.category = category;
    }

    public void updateStatus(MuseumStatus status) {
        this.status = status;
    }

    public void updateCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }
}
