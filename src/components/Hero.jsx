
export default function Hero() {
  return (
    <section className="mb-10">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3.5 py-2 text-xs font-bold tracking-wide text-orange-600 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-orange-500" />
        EBAY PROFIT CALCULATOR
      </div>

      <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[56px]">
        Know Your Profit
        <span className="mt-1 block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text pb-1 text-transparent">
          Before You Sell
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        Calculate your eBay fees, product costs and estimated profit
        before listing. Make more informed decisions with a clear
        breakdown of your potential returns.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "eBay Fees",
          "Product Costs",
          "Promoted Ads",
          "Profit & ROI",
        ].map((feature) => (
          <div
            key={feature}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-600">
              ✓
            </span>
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}
