import NavbarButton from "./NavbarButton";
// import { useNavigate } from "react-router-dom";

interface NavLinksInterface {
  isMenuOpen: boolean;
}

export const Navlinks = ({ isMenuOpen }: NavLinksInterface) => {
  // const navigate = useNavigate();
  return (
    <div
      className={`bg-gray-700 flex-1 ${
        isMenuOpen ? "block" : "hidden"
      } lg:block`}
    >
      <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-end lg:h-full lg:px-8">
        <NavbarButton title="CONTACT US" />
        <NavbarButton title="HOME" />
      </ul>
    </div>
  );
};
