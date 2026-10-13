
import Header from "./Header";

const features = [
 

{
  title: "Winning Products",
  description:
    "Explore product opportunities and compare example supplier costs with target selling prices.",
  icon: "🔥",
  status: "Preview",
  href: "/winning-products",
},


  {
    title: "Profit Calculator",
    description:
      "Estimate your potential profit, selling costs, profit margin and return on investment.",
    icon: "🧮",
    status: "Free feature",
    href: "/profit-calculator",
    free: true,
  },

{
  title: "VERO & Copyright Checker",
  description:
    "Prepare product information for a future review of potential brand, trademark, copyright and listing-policy concerns.",
  icon: "🛡️",
  status: "Preview",
  href: "/vero-checker",
},

  {
    title: "Product Analyzer",
    description:
      "Evaluate product opportunities before deciding what deserves your attention.",
    icon: "🔎",
    status: "Coming soon",
  },
];

const learningResources = [
  {
    title: "Resources & Guides",
    description:
      "Practical guides and learning material for your eBay selling journey.",
    icon: "📚",
  },
  {
    title: "Mentorship",
    description:
      "Explore mentorship options and get information about guided learning.",
    icon: "🎓",
  },
  {
    title: "Online Classes",
    description:
      "Discover course details, class information and enrollment opportunities.",
    icon: "🖥️",
  },
];

function FeatureCard({ feature }) {
  const cardContent = (
    <div
      className={`flex h-full flex-col rounded-2xl border p-6 transition ${
        feature.href
          ? "border-orange-200 bg-white shadow-sm hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/70"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
          {feature.icon}
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
            feature.free
              ? "bg-green-50 text-green-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {feature.status}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {feature.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {feature.description}
      </p>

      <div
        className={`mt-5 flex items-center gap-2 text-sm font-semibold ${
          feature.href ? "text-orange-600" : "text-slate-400"
        }`}
      >
        {feature.href ? "Open feature" : "Planned feature"}
        {feature.href && <span aria-hidden="true">→</span>}
      </div>
    </div>
  );

  if (feature.href) {
    return (
      <a href={feature.href} className="block h-full">
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header isHome />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-purple-50">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3.5 py-2 text-xs font-bold text-orange-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Your eBay selling workspace
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build a smarter
                <span className="block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  eBay business.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                UltraDS brings eBay selling features and learning resources
                together in one place. Start by calculating your potential
                profit, then explore more features as they become available.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/profit-calculator"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Try the Free Profit Calculator
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="#features"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-white"
                >
                  Explore Features
                </a>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Start with the free calculator. Other features will be
                introduced as they are developed.
              </p>
            </div>

            {/* Workspace preview */}
            <div className="mx-auto w-full max-w-lg">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40 sm:p-7">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Your workspace
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-slate-900">
                      Sell with a plan
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-pink-500 text-lg font-extrabold text-white">
                    U
                  </div>
                </div>

                
<div className="mt-5 space-y-3">
  {/* Working feature: Profit Calculator */}
  <a
    href="/profit-calculator"
    className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-green-50/70 p-4 transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-green-100"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
      🧮
    </div>

    <div className="min-w-0 flex-1">
      <p className="font-bold text-slate-800">
        Profit Calculator
      </p>
      <p className="mt-1 text-xs text-slate-500">
        Estimate your selling profit
      </p>
    </div>

    <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">
      FREE
    </span>
  </a>

  {/* Working feature: Winning Products */}
  <a
    href="/winning-products"
    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-100"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl">
      🔥
    </div>

    <div className="min-w-0 flex-1">
      <p className="font-bold text-slate-800">
        Winning Products
      </p>
      <p className="mt-1 text-xs text-slate-500">
        Explore example product opportunities
      </p>
    </div>

    <span className="text-[10px] font-semibold text-orange-600">
      PREVIEW
    </span>
  </a>

  {/* Planned feature: not clickable yet */}
 
<a
  href="/vero-checker"
  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50/40 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-purple-100"
>
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl">
    🛡️
  </div>

  <div className="min-w-0 flex-1">
    <p className="font-bold text-slate-800">
      Listing Protection
    </p>
    <p className="mt-1 text-xs text-slate-500">
      VERO and copyright review preview
    </p>
  </div>

  <span className="text-[10px] font-semibold text-orange-600">
    PREVIEW
  </span>
</a>

</div>


                <div className="mt-5 rounded-xl bg-slate-900 p-4 text-white">
                  <p className="text-sm font-bold">One platform. More possibilities.</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    The UltraDS workspace will grow as additional features
                    become available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main features */}
        <section id="features" className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                UltraDS features
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Everything starts with the right decisions.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-500">
                Explore the features planned to support your product research,
                listing decisions and eBay selling workflow.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Learning */}
        <section className="border-y border-slate-100 bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  Learn with UltraDS
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Keep learning. Keep improving.
                </h2>

                <p className="mt-4 leading-7 text-slate-500">
                  Find learning resources, explore mentorship and review
                  online class information in one organized place.
                </p>
              </div>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {learningResources.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                    {resource.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {resource.description}
                  </p>

                  <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">
                    Coming soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-orange-500 to-pink-500 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Start here
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Know your numbers before you list.
                </h2>

                <p className="mt-3 leading-7 text-white/90">
                  Use the free UltraDS Profit Calculator to estimate the
                  potential profitability of your next product.
                </p>
              </div>

              <a
                href="/profit-calculator"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-orange-600 transition hover:bg-orange-50"
              >
                Open Free Calculator
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-pink-500 text-lg font-extrabold">
              U
            </span>

            <span className="text-xl font-extrabold tracking-tight">
              Ultra<span className="text-orange-400">DS</span>
            </span>
          </a>

          <p className="text-sm text-slate-400">
            Practical features for eBay sellers. Built step by step.
          </p>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} UltraDS
          </p>
        </div>
      </footer>
    </div>
  );
}
