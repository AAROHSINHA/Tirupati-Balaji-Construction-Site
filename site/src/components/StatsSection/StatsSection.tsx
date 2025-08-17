import { stats } from "./stats.ts";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <section className="bg-yellow-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-slate-700/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 text-center py-8 md:py-0 px-8">
              <div
                className="text-5xl md:text-6xl font-bold text-gray-700 tracking-[3px] mb-2"
                ref={ref}
              >
                {stat.plus && inView && (
                  <CountUp start={0} end={stat.number} duration={2} />
                )}
                {stat.plus ? "+" : stat.number}
              </div>
              <div className="text-gray-700  font-medium whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
