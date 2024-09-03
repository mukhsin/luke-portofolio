"use client";

import CountUp from "react-countup";

type Stat = {
  count: number;
  text: string;
};
const stats: Stat[] = [
  {
    count: 12,
    text: "Years of experience",
  },
  {
    count: 26,
    text: "Projects completed",
  },
  {
    count: 81,
    text: "Technologies mastered",
  },
  {
    count: 99,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-start"
            >
              <CountUp
                end={item.count}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className="max-w-[150px] leading-snug text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
