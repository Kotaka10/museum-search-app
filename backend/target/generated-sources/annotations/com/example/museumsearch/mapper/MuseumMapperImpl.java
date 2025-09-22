package com.example.museumsearch.mapper;

import com.example.museumsearch.dto.MuseumDTO;
import com.example.museumsearch.model.Museum;
import com.example.museumsearch.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-09-21T14:28:30+0900",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.43.0.v20250819-1513, environment: Java 21.0.8 (Eclipse Adoptium)"
)
@Component
public class MuseumMapperImpl implements MuseumMapper {

    @Override
    public MuseumDTO toDTO(Museum museum) {
        if ( museum == null ) {
            return null;
        }

        MuseumDTO.MuseumDTOBuilder museumDTO = MuseumDTO.builder();

        museumDTO.createdByUsername( museumCreatedByEmail( museum ) );
        museumDTO.access( museum.getAccess() );
        museumDTO.address( museum.getAddress() );
        museumDTO.admissionFee( museum.getAdmissionFee() );
        museumDTO.category( museum.getCategory() );
        museumDTO.closingDays( museum.getClosingDays() );
        museumDTO.description( museum.getDescription() );
        museumDTO.distance( museum.getDistance() );
        museumDTO.endDate( museum.getEndDate() );
        museumDTO.exhibition( museum.getExhibition() );
        museumDTO.exhibitionImage( museum.getExhibitionImage() );
        museumDTO.exhibitionUrl( museum.getExhibitionUrl() );
        museumDTO.id( museum.getId() );
        museumDTO.imageProvider( museum.getImageProvider() );
        museumDTO.latitude( museum.getLatitude() );
        museumDTO.longitude( museum.getLongitude() );
        museumDTO.museumUrl( museum.getMuseumUrl() );
        museumDTO.name( museum.getName() );
        museumDTO.openingHours( museum.getOpeningHours() );
        museumDTO.phoneNumber( museum.getPhoneNumber() );
        museumDTO.prefecture( museum.getPrefecture() );
        museumDTO.startDate( museum.getStartDate() );
        museumDTO.status( museum.getStatus() );

        return museumDTO.build();
    }

    @Override
    public Museum toEntity(MuseumDTO museumDTO) {
        if ( museumDTO == null ) {
            return null;
        }

        Museum.MuseumBuilder museum = Museum.builder();

        museum.access( museumDTO.getAccess() );
        museum.address( museumDTO.getAddress() );
        museum.admissionFee( museumDTO.getAdmissionFee() );
        museum.category( museumDTO.getCategory() );
        museum.closingDays( museumDTO.getClosingDays() );
        museum.description( museumDTO.getDescription() );
        museum.distance( museumDTO.getDistance() );
        museum.endDate( museumDTO.getEndDate() );
        museum.exhibition( museumDTO.getExhibition() );
        museum.exhibitionImage( museumDTO.getExhibitionImage() );
        museum.exhibitionUrl( museumDTO.getExhibitionUrl() );
        museum.id( museumDTO.getId() );
        museum.imageProvider( museumDTO.getImageProvider() );
        museum.latitude( museumDTO.getLatitude() );
        museum.longitude( museumDTO.getLongitude() );
        museum.museumUrl( museumDTO.getMuseumUrl() );
        museum.name( museumDTO.getName() );
        museum.openingHours( museumDTO.getOpeningHours() );
        museum.phoneNumber( museumDTO.getPhoneNumber() );
        museum.prefecture( museumDTO.getPrefecture() );
        museum.startDate( museumDTO.getStartDate() );
        museum.status( museumDTO.getStatus() );

        return museum.build();
    }

    private String museumCreatedByEmail(Museum museum) {
        if ( museum == null ) {
            return null;
        }
        User createdBy = museum.getCreatedBy();
        if ( createdBy == null ) {
            return null;
        }
        String email = createdBy.getEmail();
        if ( email == null ) {
            return null;
        }
        return email;
    }
}
