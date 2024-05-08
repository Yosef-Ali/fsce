'use client';

import Sidebar from "@/components/Sidebar";
//import FeaturedSection from "./FeaturedSection";
import CarouselSection from "@/components/carousel";



export default function ProgramsPage() {
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
                <h2 className="text-3xl font-bold mb-4">3.1 Child Protection</h2>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">3.1.1 Overview</h3>
                  <p>
                    {`
                    FSCE's Child Protection program aims to protect children from all forms of abuse, neglect and exploitation through a comprehensive, rights-based approach. The program focuses on prevention, rehabilitation and reintegration of vulnerable children including those on the move, without parental care, in conflict with law, street children, sexually abused/exploited, and in child labor.
                  `}
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">3.1.2 Approach</h3>
                  <p>
                    FSCE follows the principles of family-based care, child participation, community engagement and an integrated systemic approach to address child protection issues. Key strategies include awareness raising, provision of services, stakeholder capacity building, policy advocacy and strengthening child protection systems.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">3.1.3 Activities</h3>
                  <ul className="list-disc list-inside">
                    <li>Economic empowerment and access to education for vulnerable families</li>
                    <li>Community awareness on child rights and protection</li>
                    <li>Rehabilitation and reintegration services for victims of abuse/exploitation</li>
                    <li>Supporting community-based child friendly correction centers</li>
                    <li>Temporary shelters and family reunification for trafficked children</li>
                    <li>Child protection in emergencies</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">3.1.4 Impact</h3>
                  <p>
                    Highlight key statistics on number of children supported, rehabilitated, reintegrated through the various child protection interventions and positive changes achieved over the years.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">3.2 Youth Empowerment</h2>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">3.2.1 Overview</h3>
                    <p>
                      Focused on realizing the potential of youth and protecting them from economic, social and psychological vulnerabilities through targeted interventions.
                    </p>
                  </div>
                  {/* Add other subsections 3.2.2 to 3.2.4 for Approach, Activities, and Impact */}
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">3.3 Advocacy</h2>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">3.3.1 Overview</h3>
                    <p>
                      {`
                      FSCE's Advocacy program aims to create an enabling environment for upholding child rights and empowering youth through policy reform, stakeholder sensitization and promoting volunteerism.
                    `}
                    </p>
                  </div>
                  {/* Add other subsections 3.3.2 to 3.3.4 for Approach, Activities, and Impact */}
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">3.4 Humanitarian Response</h2>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">3.4.1 Overview</h3>
                    <p>
                      This program focuses on providing timely humanitarian assistance and early recovery support to drought and conflict-affected vulnerable communities, with special attention to children, youth and women.
                    </p>
                  </div>
                  {/* Add other subsections 3.4.2 to 3.4.4 for Approach, Activities, and Impact */}
                </div>
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