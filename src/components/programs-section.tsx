import { siteConfig } from "@/lib/site-config";

export function ProgramsSection() {
  const { programs } = siteConfig;

  return (
    <section id="how-it-works" className="bg-brand-grey-dark py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-brand-tan mb-4 text-sm font-semibold uppercase">
            {programs.eyebrow}
          </p>
          <h2 className="text-4xl leading-tight font-semibold text-balance">
            {programs.heading}
          </h2>
          <p className="text-brand-grey-light mt-5 text-lg leading-8">
            {programs.body}
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {programs.items.map((program, index) => (
            <div
              key={program.title}
              className="border-brand-grey-light/20 rounded-lg border bg-white/5 p-6"
            >
              <div className="text-brand-tan mb-10 text-sm font-semibold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{program.title}</h3>
              <p className="text-brand-grey-light mt-3 leading-7">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
