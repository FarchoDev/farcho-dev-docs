"use client";

import { features } from "@/data/features";
import FeatureCard from "@/components/feature-card/FeatureCard";
import { APP_CONFIG } from "@/lib/config";

const Features02Page = () => {
  return (
    <div className="flex items-center justify-center relative z-10">
      <div className={`max-w-${APP_CONFIG.layout.maxWidth} w-full ${APP_CONFIG.layout.spacing.section} ${APP_CONFIG.layout.padding.lg}`}>
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Contenido Organizado por Categorías
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              {...feature} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
