"use client";

import { useMemo } from "react";
import { contentByType } from "@/data/unified-content";
import GridContainer from "./GridContainer";

export function DocumentGrid() {
  const memoizedDocuments = useMemo(() => contentByType.documentation, []);
  return <GridContainer items={memoizedDocuments} />;
}

DocumentGrid.displayName = 'DocumentGrid';