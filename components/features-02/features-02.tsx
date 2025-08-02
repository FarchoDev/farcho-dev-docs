import { BackgroundPattern } from "../../components/hero-06/background-pattern";

const features = [
  {
    title: "Formación complementaria",
    description: "Accede a guías detalladas y materiales de formación organizados por competencias.",
    image: "/images/preview.jpg",
  },
  {
    title: "Cursos especializados",
    description: "Aprende Git, GitHub, testing y otras tecnologías con cursos prácticos.",
    image: "/images/preview.jpg",
  },
  {
    title: "Formación SENA",
    description: "Contenido alineado con los programas de Análisis y Desarrollo de Software.",
    image: "/images/preview.jpg",
  },
];

const Features02Page = () => {
  return (
    <div className="flex items-center justify-center">
      <BackgroundPattern />
      <div className="max-w-screen-lg w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Contenido Organizado por Categorías
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
