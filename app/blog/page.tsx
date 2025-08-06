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

  const filteredContent = useMemo(() => {
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

    // recommended o default: featured
    return completeContent.filter((item) => item.featured);
  }, [filter]);

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
        <Select defaultValue="recommended" onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Recommended" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
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
                      src={typeof item.images === "string" ? item.images : item.images.light}
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
