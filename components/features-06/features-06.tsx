import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { features06 } from "@/data/features06";
import Image from "next/image";

const Features06Page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Formación extendida
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features06.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 overflow-hidden">
                <Image
                  src={feature.images?.light ?? "/placeholder.png"}
                  alt={feature.title}
                  className="w-full h-full object-cover"
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
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowRight />
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
