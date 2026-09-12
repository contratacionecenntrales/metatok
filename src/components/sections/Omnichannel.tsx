import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Omnichannel({ dict }: { dict: Dictionary }) {
  const o = dict.omnichannel;
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={o.eyebrow} title={o.title} subtitle={o.subtitle} />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {o.channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="bento-card glass h-full rounded-2xl p-6 text-center">
                <h3 className="font-display text-base font-semibold text-white">{c.name}</h3>
                <p className="mt-1 text-sm text-white/55">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-neon">{o.otherChannel}</p>
      </div>
    </section>
  );
}
