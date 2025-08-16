import { Links } from "./Links.tsx";

interface NavLinksInterface {
  isMenuOpen: boolean;
}

export const Navlinks = ({ isMenuOpen }: NavLinksInterface) => {
  return (
    <div
      className={`bg-gray-700 flex-1 ${
        isMenuOpen ? "block" : "hidden"
      } lg:block`}
    >
      <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-end lg:h-full lg:px-8">
        <Links title="HOME" />
        <Links title="SERVICES" />
        <Links title="ABOUT" />
        <Links title="PROJECTS" />
        <Links title="CONTACT" />
      </ul>
    </div>
  );
};
