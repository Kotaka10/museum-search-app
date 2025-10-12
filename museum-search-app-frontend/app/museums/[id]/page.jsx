import FetchMuseumsById from "@/app/museums/[id]/ui/FetchMuseumsById";
import { getMuseumById } from "@/lib/api";

export default async function DetailMuseumPage({ params }) {
    const { id } = await params;
    const fetchedData = await getMuseumById(id);

    return <FetchMuseumsById fetchedData={fetchedData} />
}