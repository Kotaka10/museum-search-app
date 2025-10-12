import AreaSearch from '@/app/components/explore/AreaSearch';
import ImageCarousel from '@/app/components/explore/MuseumImageCarousel';
import SwipeOrExtendMuseumImage from '@/app/components/explore/SwipeOrExtendMuseumImage';
import GardenAndPhotoImageLayout from '@/app/components/explore/GardenAndPhotoImageLayout';
import ArtImageSwiper from '@/app/components/explore/ArtImageSwiper';

export default async function MuseumHomePage() {
  return (
    <main>
      <ArtImageSwiper />
      <AreaSearch />
      <ImageCarousel />
      <SwipeOrExtendMuseumImage />
      <GardenAndPhotoImageLayout />
    </main>
  );
}