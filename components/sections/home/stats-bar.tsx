import { STATS } from "@/lib/constants";
import { StatCounter } from "@/components/shared/stat-counter";
import { Container } from "@/components/shared/container";

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-12 pb-4 sm:-mt-16">
      <Container>
        <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-16 gap-y-8 rounded-3xl bg-navy-950 px-10 py-10 shadow-lift sm:gap-x-24 sm:px-16">
          {STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              tone="light"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
