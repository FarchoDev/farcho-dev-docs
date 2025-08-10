"use client";

import { motion } from "framer-motion";
import GridItem from "../items/GridItem";
import { APP_CONFIG } from "@/lib/config";
import { BaseContent } from "@/lib/content-types";

/**
 * Props for the GridContainer component.
 */
export interface GridContainerProps {
  /** Array of content items to display in the grid */
  items: BaseContent[];
}

/**
 * GridContainer Component
 *
 * A responsive grid container that displays a list of content items using the GridItem component.
 * Designed for consistent layout, animation, and accessibility across different content types.
 *
 * @example
 * ```tsx
 * <GridContainer items={courseItems} />
 * ```
 */
export default function GridContainer({ items }: GridContainerProps) {
  const { transitions, ease } = APP_CONFIG.animation;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: transitions.normal.duration,
        ease,
        staggerChildren: 0.1, // Adds small delay between items
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      role="grid"
      aria-label="Lista de elementos organizados en cuadrícula"
    >
      {items.map(({ id, title, link, images }, index) => (
        <GridItem
          key={id ?? index}
          title={title}
          link={link}
          images={images}
        />
      ))}
    </motion.div>
  );
}
