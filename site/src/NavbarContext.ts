import { createContext } from "react";

interface NavbarRefs {
  homeRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  galleryRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const NavbarContext = createContext<NavbarRefs | null>(null);
export default NavbarContext;
