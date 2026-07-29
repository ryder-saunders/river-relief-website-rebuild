import { siteConfig } from "@/lib/site-config";

export function MissionSection() {
  const { mission } = siteConfig;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-brand-blue mb-4 text-sm font-semibold uppercase">
            {mission.eyebrow}
          </p>
          <h2 className="text-brand-grey-dark max-w-xl text-4xl leading-tight font-semibold text-balance">
            {mission.heading}
          </h2>
        </div>
        <div>
          <p className="text-brand-grey-mid text-lg leading-8">
            {mission.body}
          </p>
          <ul className="mt-8 grid gap-4">
            {mission.points.map((point) => (
              <li
                key={point}
                className="border-brand-grey-light/30 border-l-brand-blue rounded-lg border border-l-4 bg-white px-5 py-4"
              >
                <p className="text-brand-grey-dark font-medium">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
