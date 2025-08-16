import { Menu, X } from "lucide-react";
interface toggleMenuInterface {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MobileMenuButton = ({
  isMenuOpen,
  setIsMenuOpen,
}: toggleMenuInterface) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden text-gray-800 hover:text-gray-600 transition-colors hover:cursor-pointer"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};
