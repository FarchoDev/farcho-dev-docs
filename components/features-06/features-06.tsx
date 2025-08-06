import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { contentByType } from "@/data/unified-content";
import Image from "next/image";
import { APP_CONFIG } from "@/lib/config";

const Features06Page = () => {
  // Usar contenido complementario para esta sección
  const complementaryContent = contentByType.complementary.slice(0, 3);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Formación extendida
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {complementaryContent.map((feature, index) => (
            <div
              key={feature.id}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 overflow-hidden">
                <Image
                  src={feature.images?.light ?? APP_CONFIG.images.fallback}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  sizes={APP_CONFIG.images.defaultSizes}
                  quality={APP_CONFIG.images.quality}
                  width={600}
                  height={400}
                />
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link href={feature.link}>
                    Ver más <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features06Page;