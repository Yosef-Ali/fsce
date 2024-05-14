import { Region } from "./regions";

interface CaptionsProps {
  data: { id: string; title: string; apo: string }[];
  region: Region | null;
}

const Captions: React.FC<CaptionsProps> = ({ data, region }) => {

  // When region is null, show the message to hover over a region
  if (!region) {
    return <p className="flex">Hover over a region to see the corresponding information</p>;
  }

  const hoveredRegionData = data.find((item) => item.id === region.id);

  // When there's no data for the hovered region, show 'No information available'
  if (!hoveredRegionData || hoveredRegionData.apo.trim() === "") {
    return <p className="flex">No information available</p>;
  }

  // When there's data and apo is not empty, show the title and apo
  return (
    <div className="flex">
      <h3 className="font-bold mr-2">{hoveredRegionData.title}</h3>
      <span>{hoveredRegionData.apo}</span>
    </div>
  );
};

export default Captions;
