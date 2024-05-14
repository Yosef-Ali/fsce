"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { regions, Region } from "./regions";
import RegionPath from "./region-path";
import "./RegionPath.css";
import Captions from "./caption";

interface TooltipProps {
  data: { id: string; title: string; apo: string; } | null;
}
const data = [
  {
    id: "ET-HA",
    title: "Harari People",
    apo: "Harari Site"
  },
  {
    id: "ET-DD",
    title: "Dire Dawa",
    apo: "Dire Dawa, APO "
  },
  {
    id: "ET-SO",
    title: "Somali",
    apo: "Jijiga, Site Office"
  },
  {
    id: "ET-AA",
    title: "Addis Ababa",
    apo: "Addis Ababa, APO"
  },
  {
    id: "ET-BE",
    title: "Benshangul-Gumaz",
    apo: " "
  },
  {
    id: "ET-OR",
    title: "Oromiya",
    apo: "Adama, APO"
  },
  {
    id: "ET-GA",
    title: "Gambela Peoples",
    apo: " "
  },
  {
    id: "ET-SN",
    title: "Southern Nations, Nationalities and Peoples",
    apo: "Wolita Sodo, APO"
  },
  {
    id: "ET-AF",
    title: "Afar",
    apo: " "
  },
  {
    id: "ET-TI",
    title: "Tigray",
    apo: " "
  },
  {
    id: "ET-AM",
    title: "Amhara",
    apo: "Bahir Dar APO and Dessie APO"
  }
]

const MapComponent: React.FC = () => {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
  const memoizedRegions = useMemo(() => regions, []);
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto grid  gap-4 px-4 py-8 text-center md:px-6 lg:gap-10 ">
          <div className="space-y-3 ">
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-5xl ">Graphic Intervention Arias</h2>
            <h4 className="text-xl font-bold tracking-tighter sm:text-1xl md:text-2xl">2023</h4>
            <div className="flex flex-col item-center justify-center">
              <svg className="default-svg w-full h-full py-4 z-0" preserveAspectRatio="xMidYMid meet" viewBox="0 0 800 600">
                {memoizedRegions.map((region) => (
                  <RegionPath
                    key={region.id}
                    region={region}
                    hoveredRegion={hoveredRegion}
                    setHoveredRegion={setHoveredRegion}
                  />
                ))}
              </svg>
              <div className="w-full">
                <motion.div>
                  {/* Always render Captions, regardless of hoveredRegion state */}
                  <Captions data={data} region={hoveredRegion} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default MapComponent;

