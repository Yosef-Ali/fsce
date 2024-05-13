// import React from 'react';
// import { Region } from './regions';
// import './RegionPath.css';

// interface RegionPathProps {
//   region: Region;
//   setHoveredRegion: (region: Region | null) => void;
//   hoveredRegion: Region | null;
// }

// const RegionPath: React.FC<RegionPathProps> = ({
//   region,
//   setHoveredRegion,
//   hoveredRegion,
// }) => {
//   return (
//     <svg role="img">
//       <path
//         {...region}
//         fill={hoveredRegion === region ? region.hoverFillColor : region.fillColor}
//         stroke={region.strokeColor}
//         strokeWidth={region.strokeWidth}
//         onMouseEnter={() => setHoveredRegion(region)}
//         onMouseLeave={() => setHoveredRegion(null)}
//         // Add a class for styling hover state
//         className="region-path"
//       >
//         <title >{region.tooltiptext}</title>
//       </path>
//     </svg>
//   );
// };

// export default RegionPath;

import React from 'react';
import { Region } from './regions';
import './RegionPath.css';

interface RegionPathProps {
  region: Region;
  setHoveredRegion: (region: Region | null) => void;
  hoveredRegion: Region | null;
}



const RegionPath: React.FC<RegionPathProps> = ({
  region,
  setHoveredRegion,
  hoveredRegion,
}) => {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  return (
    <svg role="img">
      <path
        {...region}
        fill={hoveredRegion === region ? region.hoverFillColor : region.fillColor}
        stroke={region.strokeColor}
        strokeWidth={region.strokeWidth}
        onMouseEnter={() => {
          setHoveredRegion(region);
          setTooltipVisible(true);
        }}
        onMouseLeave={() => {
          setHoveredRegion(null);
          setTooltipVisible(false);
        }}
        className="region-path"
      >
        <title data-tooltip >{region.tooltiptext}</title>
      </path>

    </svg>
  );
};

export default RegionPath;