"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { APP_CONFIG } from "@/lib/config";

/**
 * Props for the FeatureCard component
 */
interface FeatureCardProps {
  /** The title to display on the card */
  title: string;
  /** The description text to display below the title */
  description: string;
  /** Object containing light and dark theme image URLs */
  images: {
    /** Image URL for light theme */
    light: string;
    /** Image URL for dark theme */
    dark: string;
  };
  /** Index used for staggered animations (starts from 0) */
  index: number;
  /** The destination URL when the card is clicked */
  link: string;
}

/**
 * FeatureCard Component
 * 
 * A responsive, animated card component that displays featured content with theme-aware images.
 * Includes hover effects, proper accessibility features, and consistent styling across the application.
 * 
 * @component
 * @example
 * ```tsx
 * <FeatureCard
 *   title="Curso Git"
 *   description="Aprende Git desde cero con ejemplos prácticos"
 *   images={{
 *     light: "/images/git-light.svg",
 *     dark: "/images/git-dark.svg"
 *   }}
 *   index={0}
 *   link="/docs/cursos/git_curso"
 * />
 * ```
 * 
 * @param props - The component props
 * @returns A memoized feature card component
 */
const FeatureCard = memo<FeatureCardProps>(({ 
  title, 
  description, 
  images, 
  index, 
  link 
}) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme || 'light';

  // Obtener imagen de acuerdo al tema con fallback robusto
  const selectedImage = images?.[currentTheme === "dark" ? "dark" : "light"];
  const imageSrc = selectedImage && selectedImage.trim() !== ""
    ? selectedImage
    : APP_CONFIG.images.fallback;

  // Usar configuración centralizada para animaciones y componentes
  const animationConfig = APP_CONFIG.animation;
  const componentConfig = APP_CONFIG.components.featureCard;

  return (
    <motion.article
      className={`flex flex-col items-center text-center bg-white dark:bg-gray-900 p-6 ${componentConfig.borderRadius} shadow-md h-full border border-gray-200 dark:border-gray-700 group`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * animationConfig.staggerDelay, 
        duration: animationConfig.duration,
        ease: animationConfig.ease
      }}
      whileHover={{ scale: componentConfig.hoverScale }}
      whileTap={{ scale: componentConfig.tapScale }}
      role="article"
      aria-labelledby={`feature-title-${index}`}
    >
      <div className={`mb-5 sm:mb-6 w-full aspect-[1/1] relative ${componentConfig.borderRadius} overflow-hidden`}>
        {imageSrc && (
          <Link href={link} className="block h-full" aria-label={`Ver más sobre ${title}`}>
             <Image
               src={imageSrc}
               alt={`Imagen representativa de ${title}`}
               fill
               className={`object-cover ${componentConfig.borderRadius} cursor-pointer transition-transform duration-300 group-hover:scale-105 hover:brightness-90`}
               sizes={APP_CONFIG.images.defaultSizes}
               quality={APP_CONFIG.images.quality}
               priority={index < 3}
             />
           </Link>
        )}
      </div>
      <h3 
        id={`feature-title-${index}`}
        className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors"
      >
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