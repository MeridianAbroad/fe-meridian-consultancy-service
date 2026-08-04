export function LogoMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max items-center gap-14 animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 whitespace-nowrap font-heading text-lg font-semibold tracking-tight text-ink-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
