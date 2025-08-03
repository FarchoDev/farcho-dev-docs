"use client";

import { useMemo } from "react";
import { contentByType } from "@/data/unified-content";
import GridContainer from "./GridContainer";

export function CourseGrid() {
  const memoizedCourses = useMemo(() => contentByType.courses, []);
  return <GridContainer items={memoizedCourses} />;
}

CourseGrid.displayName = 'CourseGrid';