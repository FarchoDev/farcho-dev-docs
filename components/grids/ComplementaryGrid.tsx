"use client";

import { useMemo } from "react";
import { contentByType } from "@/data/unified-content";
import GridContainer from "./GridContainer";

export function ComplementaryGrid() {
  const memoizedComplementary = useMemo(() => contentByType.complementary, []);
  return <GridContainer items={memoizedComplementary} />;
}

ComplementaryGrid.displayName = 'ComplementaryGrid';