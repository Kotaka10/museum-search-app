import dynamic from "next/dynamic";

const NearbyMuseums = dynamic(() => import('@/app/nearby/ui/NearbyMuseums'), { ssr: false });

export default function NearbyMuseumsWrapper({ museums }) {
  return <NearbyMuseums museums={museums} />;
}