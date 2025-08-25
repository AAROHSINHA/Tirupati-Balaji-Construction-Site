import { Link } from "react-router-dom";
interface NavbarButtonProps {
  title: string;
  onClick?: () => void;
}

export default function NavbarButton({
  title = "",
  onClick,
}: NavbarButtonProps) {
  const route = title == "HOME" ? "/" : "/#contact";
  return (
    <div className="flex items-center justify-center bg-background px-[1em]">
      <button
        onClick={onClick}
        className="bg-yellow-400 px-12 h-10 rounded-full text-sm text-black-500 hover:bg-yellow-500 hover:cursor-pointer transition-colors w-48"
      >
        <Link to={route}>{title}</Link>
      </button>
    </div>
  );
}
