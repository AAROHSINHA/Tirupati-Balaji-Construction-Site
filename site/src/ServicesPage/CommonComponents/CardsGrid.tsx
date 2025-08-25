import Card from "./Card";

interface CardData {
  number: number;
  title: string;
  description: string;
}

interface CardsGridProps {
  cards: CardData[];
}

export default function CardsGrid({ cards }: CardsGridProps) {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.number}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
