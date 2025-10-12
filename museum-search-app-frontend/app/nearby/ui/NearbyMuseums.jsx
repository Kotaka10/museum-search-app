'use client';

import { GoogleMap, Marker, InfoWindow, Circle, useJsApiLoader } from "@react-google-maps/api";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const LIBRARIES = ["geometry"];

export default function NearbyMuseums({ museums }) {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedMuseum, setSelectedMuseum] = useState(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: LIBRARIES,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("位置情報が取得できません ");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                setUserLocation({
                    lat: latitude,
                    lng: longitude,
                });
                (error) => {
                    console.error("位置情報取得失敗" + error);
                }
            }    
        );
    }, []);

    const mapContainerStyle = {
        width: '100%',
        height: '75vh',
    };

    if (!isLoaded) {
        return null;
    }

    if (!userLocation) {
        return <div className="relative w-full h-full">
                    <Image  
                        src="/images/placeholderImage/abstract-surface-textures-white-concrete-stone-wall.jpg"
                        alt="placeholderWhiteImage"
                        fill
                        className="object-cover"
                    />
                </div>
        ;
    }

    const markersToRender = museums
        .map((museum) => {
            if (!window.google?.maps?.geometry) return null;

            const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
                new window.google.maps.LatLng(userLocation.lat, userLocation.lng),
                new window.google.maps.LatLng(museum.latitude, museum.longitude)
            );

            if (distance <= 50000) {
                return { ...museum, distance: distance / 1000 };
            }
            return null;
        })
        .filter(Boolean);

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation}
            zoom={12}
        >
            <Marker position={userLocation} label="現在地" />

            <Circle
                center={userLocation}
                radius={50000}
                options={{
                strokeOpacity: 0.5,
                fillOpacity: 0.1,
                }}
            />

            {markersToRender.map((museum) => (
                <Marker
                    key={museum.id}
                    position={{ lat: museum.latitude, lng: museum.longitude }}
                    onClick={() => setSelectedMuseum(museum)}
                />
            ))}

            {selectedMuseum && (
                <InfoWindow
                    position={{ lat: selectedMuseum.latitude, lng: selectedMuseum.longitude }}
                    onCloseClick={() => setSelectedMuseum(null)}
                >
                    <Link
                        key={selectedMuseum.id}
                        href={`/museums/${selectedMuseum.id}`}
                        className="
                            block border p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-200
                            bg-gradient-to-br from-lime-50 to-green-50 cursor-pointer
                        "
                    >
                        <div className="text-sm">
                            <h2 className="font-semibold">{selectedMuseum.name}</h2>
                            <p>{selectedMuseum.exhibition}</p>
                            <p className="text-sm">{selectedMuseum.distance.toFixed(2)} km</p>
                        </div>
                    </Link>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}