interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="text-center mb-12 mt-[9em]">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-wider mb-6 mt-6">
        {title}
      </h2>
      <div className="w-42 h-3 bg-yellow-500 mx-auto"></div>
    </div>
  );
}
