"use client";

import { features } from "@/data/features";
import FeatureCard from "@/components/feature-card/FeatureCard";

const Features02Page = () => {
  return (
    <div className="flex items-center justify-center relative z-10">
      <div className="max-w-screen-lg w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Contenido Organizado por Categorías
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
