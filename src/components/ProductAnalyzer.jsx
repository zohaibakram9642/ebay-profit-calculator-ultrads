
import { useState } from "react";
import Header from "./Header";

const money = (value) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const percent = (value) => `${value.toFixed(2)}%`;

export default function ProductAnalyzer() {
  const [productName, setProductName] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [supplierCost, setSupplierCost] = useState("");
  const [supplierShipping, setSupplierShipping] = useState("");
  const [marketplaceFeeRate, setMarketplaceFeeRate] = useState("13.6");
  const [adsRate, setAdsRate] = useState("0");
  const [monthlySales, setMonthlySales] = useState("");
  const [competitorCount, setCompetitorCount] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const updateField = (setter) => (event) => {
    setter(event.target.value);
    setAnalyzed(false);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (
      Number(sellingPrice) <= 0 ||
      Number(supplierCost) < 0 ||
      Number(supplierShipping || 0) < 0 ||
      Number(marketplaceFeeRate) < 0 ||
      Number(adsRate) < 0
    ) {
      return;
    }

    setAnalyzed(true);
  }

  function resetForm() {
    setProductName("");
    setSellingPrice("");
    setSupplierCost("");
    setSupplierShipping("");
    setMarketplaceFeeRate("13.6");
    setAdsRate("0");
    setMonthlySales("");
    setCompetitorCount("");
    setAnalyzed(false);
  }

  const selling = Number(sellingPrice) || 0;
  const productCost = Number(supplierCost) || 0;
  const shippingCost = Number(supplierShipping) || 0;
  const feeRate = Number(marketplaceFeeRate) || 0;
  const advertisingRate = Number(adsRate) || 0;
  const expectedMonthlySales = Number(monthlySales) || 0;

  const marketplaceFees = selling * (feeRate / 100);
  const advertisingCost = selling * (advertisingRate / 100);
  const totalProductCost = productCost + shippingCost;

  const estimatedProfit =
    selling - totalProductCost - marketplaceFees - advertisingCost;

  const profitMargin =
    selling > 0 ? (estimatedProfit / selling) * 100 : 0;

  const roi =
    totalProductCost > 0
      ? (estimatedProfit / totalProductCost) * 100
      : 0;

  const monthlyProfit = estimatedProfit * expectedMonthlySales;

  const competitorNumber =
    competitorCount.trim() === "" ? null : Number(competitorCount);

  let competitionLabel = "Not provided";
  let competitionDescription =
    "Enter a competitor count to display a simple reference label.";

  if (competitorNumber !== null) {
    if (competitorNumber <= 25) {
      competitionLabel = "1–25 listings";
      competitionDescription =
        "A lower entered listing count. This does not establish low competition.";
    } else if (competitorNumber <= 100) {
      competitionLabel = "26–100 listings";
      competitionDescription =
        "A moderate entered listing count. Actual competitiveness may differ.";
    } else {
      competitionLabel = "100+ listings";
      competitionDescription =
        "A higher entered listing count. Actual competitiveness may differ.";
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header pageTitle="Product Analyzer" />

      {/* Page introduction */}
      <section className="border-b border-slate-200 bg-linear-to-br from-orange-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Product Analysis Preview
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Analyze before you invest.
            <span className="mt-2 block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Make informed product decisions.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Enter a candidate product's costs and expected selling price
            to estimate its potential profitability. Additional market
            research capabilities can be connected in a future update.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {/* Input form */}
          <section className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Product details
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Use your own researched prices and estimates.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="analyzer-product-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Product name
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="analyzer-product-name"
                    type="text"
                    required
                    maxLength={160}
                    value={productName}
                    onChange={updateField(setProductName)}
                    placeholder="e.g. Adjustable laptop stand"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="analyzer-selling-price"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Expected selling price ($)
                    </label>

                    <input
                      id="analyzer-selling-price"
                      type="number"
                      min="0.01"
                      step="0.01"
                      required
                      value={sellingPrice}
                      onChange={updateField(setSellingPrice)}
                      placeholder="29.99"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="analyzer-supplier-cost"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Supplier product cost ($)
                    </label>

                    <input
                      id="analyzer-supplier-cost"
                      type="number"
                      min="0"
                      step="0.01"
                      required
                      value={supplierCost}
                      onChange={updateField(setSupplierCost)}
                      placeholder="10.00"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="analyzer-shipping"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Supplier shipping ($)
                    </label>

                    <input
                      id="analyzer-shipping"
                      type="number"
                      min="0"
                      step="0.01"
                      value={supplierShipping}
                      onChange={updateField(setSupplierShipping)}
                      placeholder="0.00"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="analyzer-fee-rate"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Assumed marketplace fees (%)
                    </label>

                    <input
                      id="analyzer-fee-rate"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      required
                      value={marketplaceFeeRate}
                      onChange={updateField(setMarketplaceFeeRate)}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="analyzer-ads-rate"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Advertising rate (%)
                    </label>

                    <input
                      id="analyzer-ads-rate"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={adsRate}
                      onChange={updateField(setAdsRate)}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="analyzer-monthly-sales"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Expected monthly units
                    </label>

                    <input
                      id="analyzer-monthly-sales"
                      type="number"
                      min="0"
                      step="1"
                      value={monthlySales}
                      onChange={updateField(setMonthlySales)}
                      placeholder="Optional"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="analyzer-competitors"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Competitor listings observed
                    </label>

                    <input
                      id="analyzer-competitors"
                      type="number"
                      min="0"
                      step="1"
                      value={competitorCount}
                      onChange={updateField(setCompetitorCount)}
                      placeholder="Optional"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-sm font-semibold text-amber-900">
                    Calculation assumptions
                  </p>
                  <p className="mt-1 text-xs leading-5 text-amber-900/80">
                    Marketplace fee and advertising percentages are your
                    assumptions. This estimate excludes fixed per-order
                    fees, tax effects, returns, currency conversion and
                    other operating costs.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
                  >
                    Analyze Product
                    <span aria-hidden="true">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="min-h-12 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Results and guidance */}
          <aside className="space-y-5">
            <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-lg shadow-slate-300/30">
              <div className="p-6">
                <p className="text-sm font-medium text-slate-400">
                  Estimated profit per unit
                </p>

                <p
                  className={`mt-3 text-4xl font-extrabold tracking-tight ${
                    analyzed && estimatedProfit < 0
                      ? "text-red-400"
                      : "text-white"
                  }`}
                >
                  {analyzed ? money(estimatedProfit) : "—"}
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-400">
                  Based on the values you entered. This is an estimate,
                  not a live market assessment.
                </p>
              </div>

              <div className="space-y-4 bg-slate-800 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-400">
                    Estimated margin
                  </span>
                  <span className="font-bold">
                    {analyzed ? percent(profitMargin) : "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-400">
                    Estimated ROI
                  </span>
                  <span className="font-bold">
                    {analyzed
                      ? totalProductCost > 0
                        ? percent(roi)
                        : "N/A"
                      : "—"}
                  </span>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-400">
                      Monthly profit estimate
                    </span>
                    <span className="text-right font-bold">
                      {analyzed && monthlySales.trim() !== ""
                        ? money(monthlyProfit)
                        : "—"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">
                Your competitor research
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {competitionDescription}
              </p>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Entered listing count
                </p>

                <p className="mt-1 text-lg font-extrabold text-slate-800">
                  {competitorNumber === null
                    ? "Not provided"
                    : competitorNumber.toLocaleString("en-US")}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Reference band: {competitionLabel}
                </p>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                This is based only on the count you enter. UltraDS has
                not collected or verified competitor listings.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <h2 className="text-sm font-bold text-orange-900">
                What this preview can do
              </h2>

              <p className="mt-2 text-sm leading-6 text-orange-900/80">
                Calculate indicative profitability from your inputs.
                Live sales velocity, demand, competition, supplier
                availability and product research integrations are
                not connected yet.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-8">
          <a
            href="/winning-products"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
          >
            ← Back to Winning Products
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a href="/" className="font-extrabold text-slate-900">
            Ultra<span className="text-orange-500">DS</span>
          </a>
          <p>Product Analyzer · Feature Preview</p>
        </div>
      </footer>
    </div>
  );
}
