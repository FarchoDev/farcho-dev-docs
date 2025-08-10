"use client";

import { memo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { APP_CONFIG } from "@/lib/config";

/**
 * Props for the GridItem component.
 */
export interface GridItemProps {
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
 * A responsive and theme-aware grid item used in grid layouts for
 * courses, documentation, and complementary content.
 *
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
 */
const GridItem = memo(function GridItem({ title, link, images }: GridItemProps) {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme || "light";

  // Select image based on current theme, with fallback
  const imageSrc =
    images?.[currentTheme === "dark" ? "dark" : "light"]?.trim() || APP_CONFIG.images.fallback;

  // Centralized animation configuration
  const { transitions, ease } = APP_CONFIG.animation;

  const titleId = `grid-item-title-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <motion.div
      className="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 text-center shadow-md dark:border-gray-700 dark:bg-gray-800 group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: transitions.fast.duration, ease }}
      role="article"
      aria-labelledby={titleId}
    >
      <div className="mx-auto flex h-40 w-40 items-center justify-center">
        <Image
          src={imageSrc}
          alt={`Imagen representativa de ${title}`}
          width={160}
          height={160}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          sizes={APP_CONFIG.images.defaultSizes}
          quality={APP_CONFIG.images.quality}
        />
      </div>

      <p
        id={titleId}
        className="mt-2 line-clamp-2 overflow-hidden text-lg font-semibold text-gray-800 transition-colors dark:text-gray-200 group-hover:text-primary"
        title={title}
      >
        {title}
      </p>

      <Link href={link} className="mt-auto" aria-label={`Ver más sobre ${title}`}>
        <motion.span
          className="mt-2 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: transitions.fast.duration }}
        >
          Ver más
        </motion.span>
      </Link>
    </motion.div>
  );
});

GridItem.displayName = "GridItem";

export default GridItem;
