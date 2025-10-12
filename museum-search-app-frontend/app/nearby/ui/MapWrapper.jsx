'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { LoadScript } from "@react-google-maps/api";

const MapView = dynamic(() => import('@/app/nearby/ui/MapView'), { ssr:false });

export default function MapWrapper({ latitude, longitude, name }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="mt-4 w-full h-[300px]">
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            onLoad={() => setIsLoaded(true)}
            loadingElement={
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                マップをローディング中...
            </div>
            }
        >
            {isLoaded && <MapView latitude={latitude} longitude={longitude} name={name} />}
        </LoadScript>
        </div>
    );
}