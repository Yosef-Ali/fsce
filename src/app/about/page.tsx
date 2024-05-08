'use client';

import Sidebar from "@/components/Sidebar";
//import FeaturedSection from "./FeaturedSection";
import CarouselSection from "@/components/carousel";
import styles from './about.module.css';


export default function AboutPage() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto pt-8 pb-8">
          <div className="flex flex-wrap -mx-2">
            {/* Add your specific content or components for the About page here */}
            <CarouselSection />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pb-10 pt-10">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            <div className="container mx-auto px-4 py-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2.1 Overview</h2>
                <p>
                  Forum on Sustainable Child Empowerment (FSCE) is a pioneering local non-governmental, non-profit organization dedicated to promoting and protecting the rights of children and youth in Ethiopia. Established in 1989, FSCE has over 34 years of experience working towards creating an empowered and resilient future for disadvantaged children and youth through comprehensive interventions in child protection, youth empowerment, advocacy and humanitarian response.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2.2 Vision, Mission & Values</h2>
                <h3 className="text-2xl font-bold mb-2">Vision:</h3>
                <p>To see empowered and resilient children and youth with bright future.</p>
                <h3 className="text-2xl font-bold mb-2">Mission:</h3>
                <p>FSCE strives to protect and empower children and youth through a rights-based and comprehensive system approach in collaboration with relevant stakeholders.</p>
                <h3 className="text-2xl font-bold mb-2">Core Values:</h3>
                <p>Participation, Transparency, Accountability, Teamwork, Integrity, Ethical Professionalism, Humanity, Neutrality, Do No Harm, Impartiality, Partnership, Commitment to Gender Equality and Justice, Providing Transformational Quality Service, Sustainability.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2.3 Governance</h2>
                <p>FSCE has a robust governance structure with a General Assembly as the supreme organ, an Executive Board providing strategic oversight, and a Secretariat led by the Executive Director managing day-to-day operations.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2.4 Strategic Plan 2021-2025</h2>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">2.4.1 Introduction</h3>
                  <p>Provide a brief overview of why a new 5-year strategic plan was developed, the process followed including situation analysis, stakeholder consultations etc.</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">2.4.2 Strategic Focus Areas</h3>
                  <p>Highlight the four core program areas:</p>
                  <ul className="list-disc list-inside">
                    <li>Child Protection</li>
                    <li>Youth Empowerment</li>
                    <li>Advocacy</li>
                    <li>Humanitarian Response</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">2.4.3 Strategies & Approaches</h3>
                  <p>FSCE follows key strategies like family-based care, participation, community engagement, comprehensive integrated systemic approach, advocacy etc.</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">2.4.4 Implementation Plan</h3>
                  <p>Summary of the implementation process, workplanning, monitoring & evaluation mechanisms.</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">2.4.5 Performance Tracking</h3>
                  <p>List the key performance indicators that will be used to track progress.</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2.5 Achievements</h2>
                <p>

                  FSCE has over 34 years promoting child rights, protection, research and resources to help vulnerable children and families. It adapts strategies to social/political dynamics. Major achievements include establishing Child Protection Units in police, Child Courts, and Community Child Protection Centers. In 2007, it drafted its own Child Protection Policy. It shifted from projects to comprehensive programs engaging community stakeholders.

                  FSCE improved program management through participatory, results-based planning. Though research output decreased after restrictive 2009 legislation, its reputation grew serving disadvantaged urban children. Recent strategic plans aligned vision/mission with SDGs and national plans, added youth empowerment/advocacy, expanded operations from 6 to 8 areas, and revised policies/procedures. Board engagement increased overseeing finances, strategy and resources.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2.6 Financial Information</h2>
                <p>Provide high-level financial information - annual budgets, financial trends, top donors etc. Could have a link to download annual reports.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2.7 Policies</h2>
                <p>List out the key policies like Child Protection Policy, Gender Policy, Anti-Corruption Policy etc. with downloadable files.</p>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}