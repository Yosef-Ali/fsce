"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { regions, Region } from "./Map/regions";
import RegionPath from "./Map/region-path";
import Captions from "./caption";

interface TooltipProps {
  data: { id: string; title: string; apo: string; dis: string; } | null;
}

const data = [
  {
    id: "ET-HA",
    title: "Harari People",
    apo: "Harari Site",
    dis: "Engaged over 4,700 volunteer groups to address community problems related to children and youth."
  },
  {
    id: "ET-DD",
    title: "Dire Dawa",
    apo: "Dire Dawa, APO",
    dis: "Rescued trafficked children, rehabilitated sexually exploited children, supported children in conflict with law through child-friendly centers, worked to reduce female genital mutilation."
  },
  {
    id: "ET-SO",
    title: "Somali",
    apo: "Jijiga, Site Office",
    dis: "Engaged over 4,700 volunteer groups to address community problems related to children and youth."
  },
  {
    id: "ET-AA",
    title: "Addis Ababa",
    apo: "Addis Ababa, APO",
    dis: "Rehabilitated and reintegrated sexually abused children, street children, and children in labor."
  },
  {
    id: "ET-BE",
    title: "Benshangul-Gumaz",
    apo: "",
    dis: ""
  },
  {
    id: "ET-OR",
    title: "Oromiya",
    apo: "Adama, APO",
    dis: ""
  },
  {
    id: "ET-GA",
    title: "Gambela Peoples",
    apo: "",
    dis: ""
  },
  {
    id: "ET-SN",
    title: "Southern Nations, Nationalities and Peoples",
    apo: "Wolita Sodo, APO",
    dis: "Supported around 1,136 street children in Sodo town through rehabilitation and reintegration as of 2014."
  },
  {
    id: "ET-AF",
    title: "Afar",
    apo: "",
    dis: ""
  },
  {
    id: "ET-TI",
    title: "Tigray",
    apo: "",
    dis: ""
  },
  {
    id: "ET-AM",
    title: "Amhara",
    apo: "Bahir Dar APO and Dessie APO",
    dis: ""
  }
];

const MapComponent: React.FC = () => {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
  const memoizedRegions = useMemo(() => regions, []);
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto grid gap-4 px-4 py-8 md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-5xl">Graphic Intervention Areas</h2>
            <p>Protecting children&apos;s rights, rehabilitating vulnerable children, combating harmful practices, and empowering youth through community engagement across Ethiopia.</p>
            <h4 className="text-xl font-bold tracking-tighter sm:text-1xl md:text-2xl text-gray-500">2023</h4>
            <div className="flex flex-col items-center justify-center gap-4">
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
                <Captions data={data} region={hoveredRegion} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapComponent;