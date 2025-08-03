"use client";

import { motion } from "framer-motion";
import GridItem from "../items/GridItem";
import { APP_CONFIG } from "@/lib/config";
import { BaseContent } from "@/lib/content-types";

interface GridContainerProps {
  items: BaseContent[];
}

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