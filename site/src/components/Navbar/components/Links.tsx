interface LinksInterface {
  title: string;
}
export const Links = ({ title }: LinksInterface) => {
  return (
    <li>
      <a
        href="#services"
        className="block px-6 py-4 lg:px-6 lg:py-6 text-white hover:text-yellow-400 transition-colors font-medium text-sm lg:text-[12px] tracking-[1.2px]"
      >
        {title}
      </a>
    </li>
  );
};
