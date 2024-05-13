import { Region } from "./regions";

interface CaptionsProps {
  data: { id: string; title: string; apo: string; }[];
  region: Region | null;
}

const Captions: React.FC<CaptionsProps> = ({ data, region }) => {
  if (!region) return null;

  const hoveredRegionData = data.find((item) => item.id === region.id);
  if (!hoveredRegionData) return null;

  return (
    hoveredRegionData.apo ? (
      <div className="flex">
        <h3 className="font-bold mr-2">{hoveredRegionData.title}</h3>
        <span>{hoveredRegionData.apo}</span>
      </div>
    ) : null
  );
};

export default Captions;
