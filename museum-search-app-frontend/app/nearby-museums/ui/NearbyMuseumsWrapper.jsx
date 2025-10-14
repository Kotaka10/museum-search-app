import dynamic from "next/dynamic";

const NearbyMuseums = dynamic(() => import('@/app/nearby-museums/ui/NearbyMuseums'), { ssr: false });

export default function NearbyMuseumsWrapper({ museums }) {
  return <NearbyMuseums museums={museums} />;
}