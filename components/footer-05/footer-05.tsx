import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";


const footerLinks = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Acerca de",
    href: "/about",
  },
  {
    title: "Contacto",
    href: "/contact",
  },
  {
    title: "Aviso Legal",
    href: "/LegalPage",
  },
  {
    title: "Faq",
    href: "/faqs",
  },
];

const Footer05Page = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground text-center sm:text-left max-w-sm">
              &copy; {new Date().getFullYear()} Farcho Dev Docs. Proyecto independiente sin fines comerciales, creado por y para aprendices del SENA.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
