
import Header from "./Header";

const courseTracks = [
  {
    number: "01",
    icon: "🚀",
    title: "eBay Dropshipping Foundations",
    level: "Beginner",
    description:
      "Learn the fundamentals of the eBay selling model, seller responsibilities, supplier selection and order fulfilment.",
    topics: [
      "Understanding the dropshipping model",
      "Seller responsibilities and marketplace policies",
      "Supplier selection and fulfilment basics",
    ],
  },
  {
    number: "02",
    icon: "🔎",
    title: "Product Research & Analysis",
    level: "Product Research",
    description:
      "Develop a structured approach to researching products and comparing opportunities before investing your time.",
    topics: [
      "Researching product opportunities",
      "Evaluating competitors and comparable listings",
      "Assessing costs and potential profitability",
    ],
  },
  {
    number: "03",
    icon: "🛡️",
    title: "Listing & Policy Awareness",
    level: "Listing Skills",
    description:
      "Understand the importance of accurate listings, intellectual property awareness and marketplace requirements.",
    topics: [
      "Listing quality and product descriptions",
      "Brand, trademark and copyright considerations",
      "Restricted products and marketplace policies",
    ],
  },
  {
    number: "04",
    icon: "📊",
    title: "Profitability & Store Operations",
    level: "Business Operations",
    description:
      "Explore methods for estimating profitability, managing supplier changes and organising daily store operations.",
    topics: [
      "Calculating product costs and potential profit",
      "Monitoring supplier prices and stock",
      "Order handling and customer communication",
    ],
  },
];

const faqs = [
  {
    question: "Can I enroll in a class right now?",
    answer:
      "Enrollment is not available yet. Course availability, fees, schedules and enrollment requirements will be published when they are finalized.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "The proposed learning tracks include beginner-oriented topics. The final course structure and any prerequisites will be confirmed before enrollment opens.",
  },
  {
    question: "Will classes be live or recorded?",
    answer:
      "The delivery format has not been finalized. Live sessions, recorded lessons and other learning formats will be specified in the course details when they are available.",
  },
  {
    question: "Do the courses guarantee earnings?",
    answer:
      "No earnings or business outcomes are guaranteed. Results depend on individual decisions, experience, marketplace conditions and other factors.",
  },
];

export default function OnlineClasses() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header pageTitle="Online Classes" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-orange-50 via-white to-purple-50">
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-amber-800">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Course Catalogue Preview
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build your eBay skills.
                <span className="mt-2 block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Learn one step at a time.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore the planned UltraDS online learning tracks for
                product research, listing awareness, profitability and
                store operations. Detailed course information will be
                published as each class becomes available.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#course-tracks"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Explore Course Tracks
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
                Enrollment is not open yet. Course fees and schedules
                have not been announced.
              </p>
            </div>
          </div>
        </section>

        {/* Course tracks */}
        <section
          id="course-tracks"
          className="scroll-mt-28 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Planned learning tracks
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Explore the proposed curriculum
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                These are proposed course areas, not currently open
                classes. The final curriculum may change.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {courseTracks.map((course) => (
                <article
                  key={course.number}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/40 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                      {course.icon}
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                      {course.level}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-bold tracking-wider text-orange-600">
                    TRACK {course.number}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {course.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <h4 className="text-sm font-bold text-slate-800">
                      Proposed topics
                    </h4>

                    <ul className="mt-3 space-y-2.5">
                      {course.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
                      Planned · Enrollment not open
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Learning before enrollment */}
        <section className="border-y border-slate-100 bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Keep learning
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Start with the resources available today.
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                While the online classes are being prepared, you can
                explore the UltraDS learning library and use the free
                Profit Calculator to practise evaluating product costs.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/resources-guides"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explore Resources & Guides
                </a>

                <a
                  href="/profit-calculator"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Open Free Calculator
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold text-slate-900">
                What course details will be announced?
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "Course syllabus and learning objectives",
                  "Class format and schedule",
                  "Fees and enrollment requirements",
                  "Access instructions and learning materials",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-400">
                These details will be added when they have been finalized.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Common questions
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                Online Classes FAQ
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

          <p>Online Classes · UltraDS</p>
        </div>
      </footer>
    </div>
  );
}

