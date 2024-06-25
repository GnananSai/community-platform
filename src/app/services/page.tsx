"use client";

import ServicesCreate from "@/components/Services/ServicesCreate";
import ServicesFeed from "@/components/Services/ServicesFeed";
import ServicesHero from "@/components/Services/ServicesHero";
import ServicesSearch from "@/components/Services/ServicesSearch";
import React, { useRef } from "react";
import { withAuth } from "@/utils/withAuth";

const page: React.FC = () => {
  const servicesAvailRef = useRef<HTMLDivElement | null>(null);

  const scrollToServicesAvail = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (servicesAvailRef.current) {
      servicesAvailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [services, setServices] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/service")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.services);
        }
      });
  });

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <ServicesHero scrollToServicesAvail={scrollToServicesAvail} />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ServicesFeed services={services} />
        </div>
        <div className="space-y-4">
          <div ref={servicesAvailRef}>
            <ServicesSearch />
            <ServicesCreate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(page);
