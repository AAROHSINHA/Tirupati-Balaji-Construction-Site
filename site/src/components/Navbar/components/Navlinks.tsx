import { Links } from "./Links.tsx";
import { useContext } from "react";
import NavbarContext from "../../../NavbarContext.ts";

interface NavLinksInterface {
  isMenuOpen: boolean;
}

export const Navlinks = ({ isMenuOpen }: NavLinksInterface) => {
  const navbarContext = useContext(NavbarContext);
  return (
    <div
      className={`bg-gray-700 flex-1 ${
        isMenuOpen ? "block" : "hidden"
      } lg:block`}
    >
      <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-end lg:h-full lg:px-8">
        <div
          onClick={() =>
            navbarContext?.homeRef?.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <Links title="HOME" />
        </div>
        <div
          onClick={() =>
            navbarContext?.servicesRef?.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <Links title="SERVICES" />
        </div>
        <div
          onClick={() =>
            navbarContext?.aboutRef?.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <Links title="ABOUT" />
        </div>
        <div
          onClick={() =>
            navbarContext?.galleryRef?.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <Links title="GALLERY" />
        </div>
        <div
          onClick={() =>
            navbarContext?.contactRef?.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <Links title="CONTACT" />
        </div>
      </ul>
    </div>
  );
};
