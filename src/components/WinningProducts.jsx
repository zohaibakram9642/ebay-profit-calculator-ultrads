
import { useState } from "react";
import Header from "./Header";

const sampleProducts = [
  {
    id: 1,
    name: "Adjustable Laptop Stand",
    category: "Home Office",
    supplierPrice: 11.2,
    targetPrice: 29.99,
  },
  {
    id: 2,
    name: "Pet Grooming Brush",
    category: "Pet Supplies",
    supplierPrice: 4.75,
    targetPrice: 16.99,
  },
  {
    id: 3,
    name: "Drawer Organizer Set",
    category: "Home & Kitchen",
    supplierPrice: 8.4,
    targetPrice: 24.99,
  },
  {
    id: 4,
    name: "Reusable Food Storage Bags",
    category: "Home & Kitchen",
    supplierPrice: 6.3,
    targetPrice: 19.99,
  },
  {
    id: 5,
    name: "Magnetic Phone Mount",
    category: "Car Accessories",
    supplierPrice: 5.6,
    targetPrice: 18.99,
  },
  {
    id: 6,
    name: "LED Closet Light",
    category: "Home & Kitchen",
    supplierPrice: 7.9,
    targetPrice: 22.99,
  },
  {
    id: 7,
    name: "Travel Cable Organizer",
    category: "Travel Accessories",
    supplierPrice: 3.9,
    targetPrice: 14.99,
  },
  {
    id: 8,
    name: "Resistance Band Set",
    category: "Sports & Fitness",
    supplierPrice: 6.85,
    targetPrice: 21.99,
  },
];

const categories = [
  "All Categories",
  ...new Set(sampleProducts.map((product) => product.category)),
];

const formatMoney = (amount) =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

function ProductCard({ product }) {
  const priceSpread = product.targetPrice - product.supplierPrice;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
          {product.category}
        </span>

        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">
          Sample
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {product.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Example product entry for the UltraDS product research interface.
      </p>

      <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-slate-500">Sample supplier cost</span>
          <span className="font-semibold text-slate-800">
            {formatMoney(product.supplierPrice)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-slate-500">Example target price</span>
          <span className="font-semibold text-slate-800">
            {formatMoney(product.targetPrice)}
          </span>
        </div>

        <div className="border-t border-slate-200 pt-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-slate-700">
              Price spread
            </span>
            <span className="text-lg font-extrabold text-orange-600">
              {formatMoney(priceSpread)}
            </span>
          </div>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Before marketplace fees, shipping, advertising and other costs.
            This is not net profit.
          </p>
        </div>
      </div>

      <a
        href="/profit-calculator"
        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm font-bold text-orange-700 transition hover:border-orange-300 hover:bg-orange-100"
      >
        Estimate profit
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function WinningProducts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");
  const [sortBy, setSortBy] = useState("spread");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleProducts = sampleProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        selectedCategory === "All Categories" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "supplier-low") {
        return a.supplierPrice - b.supplierPrice;
      }

      if (sortBy === "price-high") {
        return b.targetPrice - a.targetPrice;
      }

      return (
        b.targetPrice -
        b.supplierPrice -
        (a.targetPrice - a.supplierPrice)
      );
    });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header pageTitle="Winning Products" />

      <main>
        {/* Page hero */}
        <section className="border-b border-slate-200 bg-linear-to-br from-orange-50 via-white to-purple-50">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
                Frontend Preview · Sample Data
              </span>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Winning Products
                <span className="block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Start your product research.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore the planned UltraDS product discovery experience.
                Search example products, filter categories and compare
                illustrative supplier costs with example selling prices.
              </p>
            </div>

            {/* Preview notice */}
            <div className="mt-8 flex max-w-4xl gap-3 rounded-2xl border border-amber-200 bg-white/80 p-4 sm:p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                !
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  Preview data only
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  These sample products and prices are for testing the
                  interface. They are not live eBay listings, verified
                  supplier prices, sales data or recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product research workspace */}
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                Product explorer
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Search and organize the example product list.
              </p>
            </div>

            <span className="text-sm font-medium text-slate-500">
              {visibleProducts.length} of {sampleProducts.length} examples
            </span>
          </div>

          {/* Search and filters */}
          <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-3 md:p-5">
            <div className="md:col-span-1">
              <label
                htmlFor="product-search"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Search products
              </label>

              <div className="relative">
                <svg
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4" />
                </svg>

                <input
                  id="product-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search name or category"
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="product-category"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Category
              </label>

              <select
                id="product-category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="product-sort"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Sort by
              </label>

              <select
                id="product-sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                <option value="spread">Highest price spread</option>
                <option value="supplier-low">Lowest supplier cost</option>
                <option value="price-high">Highest target price</option>
              </select>
            </div>
          </div>

          {/* Results */}
          {visibleProducts.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
              <h3 className="text-lg font-bold text-slate-800">
                No matching examples
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="mt-5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="mt-8 text-xs leading-5 text-slate-400">
            Price spread is calculated as example target price minus example
            supplier cost. It excludes eBay fees, supplier shipping,
            advertising, returns, taxes and other business expenses.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a href="/" className="font-extrabold text-slate-900">
            Ultra<span className="text-orange-500">DS</span>
          </a>

          <p>Product research preview. Live data is not connected yet.</p>
        </div>
      </footer>
    </div>
  );
}
