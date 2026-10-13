
import Header from "./Header";

const mentorshipAreas = [
  {
    number: "01",
    icon: "🔎",
    title: "Product Research",
    description:
      "Learn how to compare product opportunities, investigate competing listings and assess whether a product deserves further research.",
  },
  {
    number: "02",
    icon: "🧮",
    title: "Profitability Planning",
    description:
      "Understand supplier costs, marketplace fees, advertising expenses and the difference between a price spread and actual profit.",
  },
  {
    number: "03",
    icon: "🛡️",
    title: "Listing Safety",
    description:
      "Learn why brand permissions, intellectual property concerns and marketplace listing policies matter before publishing.",
  },
  {
    number: "04",
    icon: "📦",
    title: "Supplier & Store Operations",
    description:
      "Explore supplier checks, stock monitoring, order handling and practical processes for managing day-to-day selling activities.",
  },
];

const mentorshipSteps = [
  {
    number: "1",
    title: "Define your goals",
    description:
      "Identify your current experience, the challenges you face and the areas you want to improve.",
  },
  {
    number: "2",
    title: "Identify learning priorities",
    description:
      "Focus on relevant topics rather than trying to learn everything at once.",
  },
  {
    number: "3",
    title: "Build a practical action plan",
    description:
      "Turn learning into clear tasks you can review and work through systematically.",
  },
];

const faqs = [
  {
    question: "Is mentorship enrollment open?",
    answer:
      "Enrollment is not available through this page yet. Program availability and enrollment details will be announced when the process is ready.",
  },
  {
    question: "Do I need prior eBay experience?",
    answer:
      "The planned mentorship content is intended to accommodate different learning needs. Entry requirements and available program levels have not yet been finalized.",
  },
  {
    question: "Are earnings or business results guaranteed?",
    answer:
      "No earnings or business results are guaranteed. Outcomes depend on individual circumstances, decisions, market conditions and other factors.",
  },
];

export default function Mentorship() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header pageTitle="Mentorship" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-orange-50 via-white to-purple-50">
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-amber-800">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Mentorship Preview
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Learn with direction.
                <span className="mt-2 block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Build skills with purpose.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore the planned UltraDS mentorship experience for
                eBay sellers. The focus is on practical learning,
                better-informed decisions and building repeatable
                business processes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#mentorship-areas"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Explore Mentorship Areas
                  <span aria-hidden="true">↓</span>
                </a>

                <a
                  href="/resources-guides"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-white"
                >
                  Browse Free Guides
                </a>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Enrollment is not open yet. Program details will be
                published when they are finalized.
              </p>
            </div>
          </div>
        </section>

        {/* Mentorship areas */}
        <section
          id="mentorship-areas"
          className="scroll-mt-28 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                What you can learn
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Practical topics for eBay sellers
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                These are the proposed areas of focus for the
                mentorship program. The final curriculum may vary.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {mentorshipAreas.map((area) => (
                <article
                  key={area.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                      {area.icon}
                    </div>

                    <span className="text-xs font-bold tracking-wider text-slate-300">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proposed process */}
        <section className="border-y border-slate-100 bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                A structured approach
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From questions to a clearer plan
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                The proposed approach emphasizes identifying priorities,
                learning relevant skills and turning them into practical
                next steps.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {mentorshipSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-lg font-extrabold text-white">
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment notice */}
        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
            <div className="grid md:grid-cols-[1fr_auto]">
              <div className="p-6 sm:p-9 lg:p-10">
                <span className="inline-flex rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
                  Enrollment not open
                </span>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  Mentorship details are being prepared.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Program format, availability, fees and enrollment
                  requirements have not yet been published. In the
                  meantime, explore the free learning resources and
                  Profit Calculator available on UltraDS.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/resources-guides"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Explore Resources
                  </a>

                  <a
                    href="/profit-calculator"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Open Free Calculator
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-orange-100 bg-orange-50/70 p-8 md:border-l md:border-t-0">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-5xl shadow-sm">
                  🎓
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-100 bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Common questions
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                Mentorship FAQ
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-orange-200 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-800">
                    {faq.question}

                    <span className="text-xl text-orange-500 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a href="/" className="font-extrabold text-slate-900">
            Ultra<span className="text-orange-500">DS</span>
          </a>

          <p>Mentorship · UltraDS</p>
        </div>
      </footer>
    </div>
  );
}
