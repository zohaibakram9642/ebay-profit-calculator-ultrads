
import { useMemo, useState } from "react";
import Header from "./Header";

const guides = [
  {
    id: "getting-started",
    title: "Getting Started with eBay Dropshipping",
    category: "Getting Started",
    level: "Beginner",
    readTime: "4 min",
    description:
      "Understand the main steps involved in preparing to run an eBay dropshipping business.",
    sections: [
      {
        heading: "Understand the business model",
        paragraphs: [
          "In dropshipping, a seller lists products for sale and arranges fulfilment after receiving an order. Your responsibilities still include customer service, accurate listings, delivery expectations and resolving order problems.",
          "Before choosing a supplier or creating listings, learn the rules that apply to your marketplace and fulfilment arrangement.",
        ],
      },
      {
        heading: "Prepare before listing",
        paragraphs: [
          "Choose a marketplace, understand its seller requirements, research potential products and calculate expected costs. Avoid assuming that a product is suitable simply because another seller lists it.",
        ],
        points: [
          "Understand the marketplace's current dropshipping policy.",
          "Check supplier reliability and product availability.",
          "Calculate fees, shipping expenses and possible returns.",
          "Prepare a process for customer questions and delivery issues.",
        ],
      },
    ],
  },
  {
    id: "product-research",
    title: "How to Research Product Opportunities",
    category: "Product Research",
    level: "Beginner",
    readTime: "5 min",
    description:
      "Build a repeatable process for comparing product ideas before investing time in a listing.",
    sections: [
      {
        heading: "Start with evidence",
        paragraphs: [
          "A product's potential should not be judged by its selling price alone. Review comparable listings, their prices, listing quality and any available evidence of demand.",
          "Keep observed facts separate from assumptions. A high price or a large number of listings does not, by itself, establish that a product will sell profitably.",
        ],
      },
      {
        heading: "Compare your shortlist",
        paragraphs: [
          "Research several candidates using the same criteria. Consistent comparisons make it easier to identify products worth investigating further.",
        ],
        points: [
          "Compare similar products rather than unrelated listings.",
          "Record supplier cost and delivery estimates.",
          "Investigate competition and possible listing restrictions.",
          "Recheck availability and prices before making a listing decision.",
        ],
      },
    ],
  },
  {
    id: "profit-calculation",
    title: "Calculate Profit Before You List",
    category: "Profitability",
    level: "Beginner",
    readTime: "4 min",
    description:
      "Learn which revenue and expense items to consider when estimating product profitability.",
    sections: [
      {
        heading: "Include the full cost picture",
        paragraphs: [
          "A positive difference between the selling price and supplier price is not necessarily your net profit. Marketplace fees, supplier shipping, advertising, refunds and other expenses can reduce the amount you keep.",
          "Buyer-paid shipping may form part of transaction revenue, while shipping paid to your supplier is a business expense. Avoid counting the same amount twice.",
        ],
      },
      {
        heading: "Use an estimate responsibly",
        paragraphs: [
          "Enter realistic prices and expense assumptions in the UltraDS Profit Calculator. Treat the result as an estimate until you have verified the fee rules that apply to your account and transaction.",
        ],
        points: [
          "Use a realistic expected selling price.",
          "Include the supplier product cost and shipping.",
          "Allow for applicable marketplace and advertising fees.",
          "Leave room for returns and other unexpected expenses.",
        ],
      },
    ],
  },
  {
    id: "listing-safety",
    title: "Review Listing and Intellectual Property Risks",
    category: "Listing Safety",
    level: "Intermediate",
    readTime: "5 min",
    description:
      "Learn why brands, images, product claims and marketplace rules deserve attention before publishing.",
    sections: [
      {
        heading: "Review the product and its presentation",
        paragraphs: [
          "Products can raise different issues involving trademarks, copyright, counterfeit goods, product safety or marketplace-specific restrictions. These issues require more than checking whether another seller has listed a similar item.",
          "Confirm that you are authorised to use product images, written descriptions and brand assets. Do not assume a supplier's permission automatically resolves every marketplace or intellectual property concern.",
        ],
      },
      {
        heading: "Check before publishing",
        paragraphs: [
          "Investigate relevant rights and review the latest rules for your marketplace and product category. Where uncertainty remains, obtain appropriate legal or platform guidance before listing.",
        ],
        points: [
          "Investigate relevant brand and trademark information.",
          "Check ownership or permission for images and written material.",
          "Review restricted-product and listing policies.",
          "Do not treat an automated or preliminary search as legal clearance.",
        ],
      },
    ],
  },
  {
    id: "supplier-management",
    title: "Managing Supplier Prices and Stock",
    category: "Supplier Workflow",
    level: "Intermediate",
    readTime: "4 min",
    description:
      "Establish a practical routine for checking supplier availability, prices and delivery estimates.",
    sections: [
      {
        heading: "Why supplier changes matter",
        paragraphs: [
          "A supplier may change a product price, run out of stock or update its estimated delivery time after you create a listing. These changes can affect profitability and your ability to meet customer expectations.",
          "The more products you manage, the more useful a consistent monitoring process becomes.",
        ],
      },
      {
        heading: "Build a monitoring routine",
        paragraphs: [
          "Keep a record of supplier URLs, product variants, purchase costs and expected delivery times. Check those details before fulfilling orders and after any significant supplier update.",
        ],
        points: [
          "Track the exact product variant and supplier URL.",
          "Recalculate profitability when costs change.",
          "Verify stock before accepting or fulfilling orders.",
          "Review delivery estimates and update listings where necessary.",
        ],
      },
    ],
  },
  {
    id: "order-management",
    title: "Build a Reliable Order Management Process",
    category: "Store Operations",
    level: "Beginner",
    readTime: "4 min",
    description:
      "Create a consistent workflow for order checks, fulfilment, tracking and customer communication.",
    sections: [
      {
        heading: "Use a repeatable order workflow",
        paragraphs: [
          "Each order should have a clear process for verifying the product, confirming supplier availability, arranging fulfilment and tracking delivery. Keep records so that issues can be investigated without relying on memory.",
        ],
        points: [
          "Confirm the ordered variant and delivery details.",
          "Check supplier availability and current costs.",
          "Record fulfilment and tracking information.",
          "Monitor delivery progress and respond to customer enquiries.",
        ],
      },
      {
        heading: "Plan for problems",
        paragraphs: [
          "Supplier cancellations, delays, incorrect items and returns need a documented response. Understand the relevant marketplace requirements and communicate accurately with customers rather than promising an unverified delivery date.",
        ],
      },
    ],
  },
];

const categories = [
  "All Categories",
  ...new Set(guides.map((guide) => guide.category)),
];

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z" />
      <path d="M4 5.5v15.5M8 7h8M8 11h7" />
    </svg>
  );
}

function GuideCard({ guide, onRead }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/40 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
          <BookIcon />
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
          {guide.level}
        </span>
      </div>

      <p className="mt-5 text-xs font-semibold text-orange-600">
        {guide.category}
      </p>

      <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900">
        {guide.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
        {guide.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-400">
          {guide.readTime} read
        </span>

        <button
          type="button"
          onClick={() => onRead(guide)}
          className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-bold text-orange-600 transition hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-100"
        >
          Read guide <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

function GuideArticle({ guide, onBack }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
      >
        <span aria-hidden="true">←</span> All guides
      </button>

      <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
          {guide.category}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
          {guide.level}
        </span>

        <span className="text-xs text-slate-400">
          {guide.readTime} read
        </span>
      </div>

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950">
        {guide.title}
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-600">
        {guide.description}
      </p>

      <div className="mt-8 space-y-8">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h3 className="text-lg font-bold text-slate-900">
              {section.heading}
            </h3>

            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.heading}-${index}`}
                  className="text-sm leading-7 text-slate-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {section.points && (
              <ul className="mt-4 space-y-3">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-bold text-amber-900">
          Important
        </p>
        <p className="mt-1 text-sm leading-6 text-amber-900/80">
          This guide is general educational material. Marketplace rules,
          fees and product requirements can change, so verify the current
          requirements that apply to your account and product before acting.
        </p>
      </div>
    </article>
  );
}

export default function ResourcesGuides() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [selectedGuide, setSelectedGuide] = useState(null);

  const filteredGuides = useMemo(() => {
    const query = search.trim().toLowerCase();

    return guides.filter((guide) => {
      const matchesCategory =
        category === "All Categories" || guide.category === category;

      const searchableText = [
        guide.title,
        guide.category,
        guide.description,
        ...guide.sections.map((section) => section.heading),
        ...guide.sections.flatMap((section) => section.paragraphs),
        ...guide.sections.flatMap((section) => section.points ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header pageTitle="Resources & Guides" />

      <section className="border-b border-slate-200 bg-linear-to-br from-orange-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-orange-700">
            <BookIcon />
            UltraDS Learning Hub
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Resources & Guides
            <span className="mt-2 block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Learn. Research. Improve.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore practical starter guides for product research,
            profitability, listing safety, supplier management and eBay
            store operations.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        {selectedGuide ? (
          <GuideArticle
            guide={selectedGuide}
            onBack={() => setSelectedGuide(null)}
          />
        ) : (
          <>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                  Browse the learning library
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Search topics or choose a category to find a guide.
                </p>
              </div>

              <span className="text-sm font-medium text-slate-500">
                {filteredGuides.length} of {guides.length} guides
              </span>
            </div>

            <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 sm:p-5">
              <div>
                <label
                  htmlFor="guide-search"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Search guides
                </label>

                <input
                  id="guide-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search eBay, fees, suppliers..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label
                  htmlFor="guide-category"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Category
                </label>

                <select
                  id="guide-category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredGuides.length > 0 ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredGuides.map((guide) => (
                  <GuideCard
                    key={guide.id}
                    guide={guide}
                    onRead={setSelectedGuide}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
                <h3 className="text-lg font-bold text-slate-800">
                  No guides found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search term or choose a different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All Categories");
                  }}
                  className="mt-5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Clear filters
                </button>
              </div>
            )}

            <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="font-bold text-slate-900">
                More learning opportunities
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                UltraDS will expand this library as more learning material
                is prepared.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/profit-calculator"
                  className="inline-flex min-h-10 items-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Try the free Profit Calculator
                </a>

                <a
                  href="/"
                  className="inline-flex min-h-10 items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a href="/" className="font-extrabold text-slate-900">
            Ultra<span className="text-orange-500">DS</span>
          </a>

          <p>Resources & Guides · UltraDS Learning Hub</p>
        </div>
      </footer>
    </div>
  );
}
