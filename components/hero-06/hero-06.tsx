import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { BackgroundPattern } from "../../components/hero-06/background-pattern";
import {
  GithubIcon,
} from "lucide-react";
import Link from "next/link";

const Hero06 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />
      <div className="absolute inset-0 -z-10">
      </div>
        <div className="relative z-10 text-center max-w-2xl">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            Recién lanzado v1.0.0
          </Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Farcho Dev Docs
          </h1>
          <p className="mt-6 text-[17px] md:text-lg">
            Un espacio creado de manera independiente por aprendices, que organiza y preserva materiales de formación vistos en la Tecnología en Análisis y Desarrollo de Software del SENA. Aquí encontrarás cursos complementarios y recursos clave para fortalecer tu aprendizaje en desarrollo de software.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Link href="https://github.com/FarchoDev" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="rounded-full text-base flex items-center gap-2"
              >
                GitHub
                <GithubIcon className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/adso" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none"
              >
                <CirclePlay className="h-5 w-5" /> Empecemos
              </Button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Hero06;
