"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { APP_CONFIG } from "@/lib/config";

interface FeatureCardProps {
  title: string;
  description: string;
  images: {
    light: string;
    dark: string;
  };
  index: number;
  link: string;
}

const FeatureCard = memo<FeatureCardProps>(({ 
  title, 
  description, 
  images, 
  index, 
  link 
}) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme || 'light';

  // Obtener imagen de acuerdo al tema
  const selectedImage = images?.[currentTheme === "dark" ? "dark" : "light"];

  // Validar y aplicar fallback robusto usando configuración
  const imageSrc = selectedImage && selectedImage.trim() !== ""
    ? selectedImage
    : APP_CONFIG.images.fallback;

  // Usar configuración para animaciones
  const animationConfig = APP_CONFIG.animation;
  const componentConfig = APP_CONFIG.components.featureCard;

  return (
    <motion.article
      className={`flex flex-col items-center text-center bg-white dark:bg-gray-900 p-4 ${componentConfig.borderRadius} shadow-md h-full border border-gray-200 dark:border-gray-700 group`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * animationConfig.staggerDelay, 
        duration: animationConfig.duration,
        ease: animationConfig.ease
      }}
      whileHover={{ scale: componentConfig.hoverScale }}
      whileTap={{ scale: componentConfig.tapScale }}
    >
      <div className={`mb-5 sm:mb-6 w-full aspect-[${componentConfig.aspectRatio}] relative ${componentConfig.borderRadius} overflow-hidden`}>
        {imageSrc && (
          <Link href={link} className="block h-full">
             <Image
               src={imageSrc}
               alt={title}
               fill
               className={`object-cover ${componentConfig.borderRadius} cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:brightness-90`}
               sizes={APP_CONFIG.images.defaultSizes}
               quality={APP_CONFIG.images.quality}
               priority={index < 3}
             />
           </Link>
        )}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px] text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
export type { FeatureCardProps };