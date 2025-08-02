import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";

const Hero06 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 -z-10">
      </div>
        <div className="relative z-10 text-center max-w-2xl">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            Just released v1.0.0
          </Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Farcho Dev Docs
          </h1>
          <p className="mt-6 text-[17px] md:text-lg">
            Un espacio creado para aprendices del SENA que organiza y preserva materiales de formación, cursos especializados y recursos clave para fortalecer tu aprendizaje en desarrollo de software.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
    </div>
  );
};

export default Hero06;
