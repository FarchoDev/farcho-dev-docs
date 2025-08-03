"use client";

import { memo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { APP_CONFIG } from "@/lib/config";

/**
 * Props for the GridItem component
 */
interface GridItemProps {
  /** The title to display on the grid item */
  title: string;
  /** The destination URL when the item is clicked */
  link: string;
  /** Object containing light and dark theme image URLs */
  images: {
    /** Image URL for light theme */
    light: string;
    /** Image URL for dark theme */
    dark: string;
  };
}

/**
 * GridItem Component
 * 
 * A responsive grid item component that displays content with theme-aware images.
 * Used primarily in grid layouts for courses, documentation, and complementary content.
 * Features consistent hover animations and accessibility support.
 * 
 * @component
 * @example
 * ```tsx
 * <GridItem
 *   title="Sistemas Operativos de Red"
 *   link="/docs/sena/ads_docs/sistemas-operativos-de-red"
 *   images={{
 *     light: "/images/sistemas-light.svg",
 *     dark: "/images/sistemas-dark.svg"
 *   }}
 * />
 * ```
 * 
 * @param props - The component props
 * @returns A memoized grid item component
 */
const GridItem = memo<GridItemProps>(({ title, link, images }) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme || 'light';
  
  // Obtener imagen según el tema con fallback robusto
  const selectedImage = images?.[currentTheme === "dark" ? "dark" : "light"];
  const imageSrc = selectedImage && selectedImage.trim() !== ""
    ? selectedImage
    : APP_CONFIG.images.fallback;

  // Usar configuración centralizada para animaciones
  const animationConfig = APP_CONFIG.animation;

  return (
    <motion.div
      className="text-center p-4 border rounded-xl shadow-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 flex flex-col justify-between h-full group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: animationConfig.transitions.fast.duration,
        ease: animationConfig.ease
      }}
      role="article"
      aria-labelledby={`grid-item-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="w-40 h-40 mx-auto flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={`Imagen representativa de ${title}`}
          width={160}
          height={160}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          sizes={APP_CONFIG.images.defaultSizes}
          quality={APP_CONFIG.images.quality}
          priority={false}
        />
      </div>

      <p
        id={`grid-item-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-lg font-semibold mt-2 text-gray-800 dark:text-gray-200 line-clamp-2 overflow-hidden cursor-default group-hover:text-primary transition-colors"
        title={title}
      >
        {title}
      </p>

      <Link href={link} className="mt-auto" aria-label={`Ver más sobre ${title}`}>
        <motion.span
          className="inline-block px-4 py-2 mt-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: animationConfig.transitions.fast.duration }}
        >
          Ver más
        </motion.span>
      </Link>
    </motion.div>
  );
});

GridItem.displayName = 'GridItem';

export default GridItem;
export type { GridItemProps };