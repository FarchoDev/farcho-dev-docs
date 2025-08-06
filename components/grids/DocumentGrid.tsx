"use client";

import { useMemo } from "react";
import { contentByType, getContent } from "@/data/unified-content";
import GridContainer from "./GridContainer";
import { BaseContent } from "@/lib/content-types";

interface DocumentGridProps {
  filter?: {
    tags?: string[];
    [key: string]: any;
  };
}

export function DocumentGrid({ filter }: DocumentGridProps) {
  const filteredDocuments: BaseContent[] = useMemo(() => {
    if (filter) {
      return getContent.byType("documentation").filter((item) => {
        // Filtro por tags si se proporciona
        if (filter.tags) {
          return item.tags?.some((tag) => filter.tags?.includes(tag));
        }
        return true;
      });
    }

    return contentByType.documentation;
  }, [filter]);

  return <GridContainer items={filteredDocuments} />;
}

DocumentGrid.displayName = "DocumentGrid";
