"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import { completeContent } from "@/data/unified-content";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Blog01Page = () => {
  const [filter, setFilter] = useState("recommended");
  const [tagFilter, setTagFilter] = useState("all");

  // 1. Extraer todos los tags únicos
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    completeContent.forEach((item) => {
      item.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // 2. Filtrar por tipo (recommended, latest, popular)
  const filteredByType = useMemo(() => {
    if (filter === "latest") {
      return [...completeContent]
        .filter((item) => item.date)
        .sort(
          (a, b) =>
            new Date(b.date!).getTime() - new Date(a.date!).getTime()
        );
    }

    if (filter === "popular") {
      return completeContent.filter((item) => item.trending);
    }

    return completeContent.filter((item) => item.featured);
  }, [filter]);

  // 3. Filtrar por tag (si se eligió alguno)
  const filteredContent = useMemo(() => {
    if (tagFilter === "all") return filteredByType;

    return filteredByType.filter(
      (item) => item.tags?.includes(tagFilter)
    );
  }, [filteredByType, tagFilter]);

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Filtro por tipo */}
          <Select defaultValue="recommended" onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>

          {/* Filtro por tag */}
          <Select defaultValue="all" onValueChange={setTagFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tags</SelectItem>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredContent.length === 0 ? (
          <p className="text-muted-foreground col-span-full">
            No hay contenido disponible para este filtro.
          </p>
        ) : (
          filteredContent.map((item) => (
            <Link
              href={item.link ?? "#"}
              key={item.id}
              className="hover:opacity-90 transition"
            >
              <Card className="shadow-none h-full flex flex-col justify-between">
                <CardHeader className="p-2">
                  {item.images ? (
                    <img
                      src={
                        typeof item.images === "string"
                          ? item.images
                          : item.images.light
                      }
                      alt={item.title}
                      className="aspect-video object-cover rounded-lg w-full"
                    />
                  ) : (
                    <div className="aspect-video bg-muted rounded-lg w-full" />
                  )}
                </CardHeader>
                <CardContent className="pt-4 pb-5">
                  {item.category && <Badge>{item.category}</Badge>}

                  <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <span className="text-muted-foreground font-semibold">
                        {item.author ?? "Autor desconocido"}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {item.date
                        ? new Date(item.date).toLocaleDateString()
                        : "Sin fecha"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog01Page;
