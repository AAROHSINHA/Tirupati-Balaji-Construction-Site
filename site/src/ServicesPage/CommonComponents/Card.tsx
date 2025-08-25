interface CardProps {
  number: number;
  title: string;
  description: string;
}

export default function Card({ number, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col items-start gap-2">
        <div className="w-12 h-12 text-yellow-400">
          <span className="text-[2em] font-semibold text-yellow-400">
            0{number}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
