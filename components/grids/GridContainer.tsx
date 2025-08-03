"use client";

import { motion } from "framer-motion";
import GridItem from "../items/GridItem";
import { APP_CONFIG } from "@/lib/config";
import { BaseContent } from "@/lib/content-types";

/**
 * Props for the GridContainer component
 */
interface GridContainerProps {
  /** Array of content items to display in the grid */
  items: BaseContent[];
}

/**
 * GridContainer Component
 * 
 * A responsive grid container that displays content items using the GridItem component.
 * Provides consistent layout and animations across different content types (courses, docs, etc.).
 * Automatically handles responsive breakpoints and staggered animations.
 * 
 * @component
 * @example
 * ```tsx
 * <GridContainer items={courseItems} />
 * ```
 * 
 * Key Features:
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
 * - Consistent spacing and animations using centralized configuration
 * - Automatic key generation using item IDs
 * - Accessibility support with proper ARIA roles
 * 
 * @param props - The component props
 * @returns A responsive grid container with animated items
 */
function GridContainer({ items }: GridContainerProps) {
  const animationConfig = APP_CONFIG.animation;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1, 
          transition: { 
            duration: animationConfig.transitions.normal.duration,
            ease: animationConfig.ease
          } 
        },
      }}
      role="grid"
      aria-label="Contenido organizado en grid"
    >
      {items.map((item, index) => (
        <GridItem 
          key={item.id || index} 
          title={item.title}
          link={item.link}
          images={item.images}
        />
      ))}
    </motion.div>
  );
}

GridContainer.displayName = 'GridContainer';

export default GridContainer;
export type { GridContainerProps };