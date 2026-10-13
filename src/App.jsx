import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import WinningProducts from "./components/WinningProducts";
import VeroChecker from "./components/VeroChecker";
import ProductAnalyzer from "./components/ProductAnalyzer";



function USAFlag() {
  return (
    <svg
      width="22"
      height="15"
      viewBox="0 0 22 15"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 rounded-sm"
      aria-label="USA flag"
      role="img"
    >
      <rect width="22" height="15" fill="#fff" />
      <rect y="0" width="22" height="1.15" fill="#B22234" />
      <rect y="2.3" width="22" height="1.15" fill="#B22234" />
      <rect y="4.6" width="22" height="1.15" fill="#B22234" />
      <rect y="6.9" width="22" height="1.15" fill="#B22234" />
      <rect y="9.2" width="22" height="1.15" fill="#B22234" />
      <rect y="11.5" width="22" height="1.15" fill="#B22234" />
      <rect y="13.8" width="22" height="1.2" fill="#B22234" />
      <rect width="9.5" height="8.1" fill="#3C3B6E" />

      {Array.from({ length: 6 }, (_, row) =>
        Array.from(
          { length: row % 2 === 0 ? 5 : 4 },
          (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={row % 2 === 0 ? 1.4 + col * 1.7 : 2.25 + col * 1.7}
              cy={1.3 + row * 1.04}
              r="0.35"
              fill="white"
            />
          )
        )
      )}
    </svg>
  );
}

function ProfitCalculator() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [buyerShipping, setBuyerShipping] = useState("");
  const [purchasingPrice, setPurchasingPrice] = useState("");
  const [aliexpressShipping, setAliexpressShipping] = useState("");
  const [promotedAds, setPromotedAds] = useState("");

  const [numberOfOrders, setNumberOfOrders] = useState("1");
  const [sellerLevel, setSellerLevel] = useState("Above Standard");
  const [storeSubscription, setStoreSubscription] = useState("No");
  const [category, setCategory] = useState("Most Categories");

  const categoryFeeRates = {
    "Most Categories": 13.6,
    Antiques: 13.6,
    Art: 13.6,
    Baby: 13.6,
    "Books & Magazines": 15.3,
    "Business & Industrial": 13.6,
    "Cameras & Photo": 9.35,
    "Cell Phones & Accessories": 9.35,
    "Clothing, Shoes & Accessories": 13.6,
    Collectibles: 12.7,
    "Computers/Tablets & Networking": 9.35,
    "Consumer Electronics": 9.35,
    Crafts: 12.7,
    "Dolls & Bears": 12.7,
    "eBay Motors": 11.5,
    "Health & Beauty": 12.7,
    "Home & Garden": 13.6,
    "Jewelry & Watches": 15,
    "Musical Instruments & Gear": 10.35,
    "Pet Supplies": 12.7,
    "Pottery & Glass": 12.7,
    "Sporting Goods": 12.7,
    "Sports Mem, Cards & Fan Shop": 12.7,
    "Toys & Hobbies": 12.7,
    "Video Games & Consoles": 9.35,
    "Everything Else": 13.6,
  };

  const selling = Number(sellingPrice) || 0;
  const buyerShippingAmount = Number(buyerShipping) || 0;
  const purchasing = Number(purchasingPrice) || 0;
  const aliexpressShippingAmount = Number(aliexpressShipping) || 0;
  const adsRate = Number(promotedAds) || 0;

  const orders = Math.max(1, Math.floor(Number(numberOfOrders) || 1));
  const hasCalculationInput = sellingPrice.trim() !== "";

  const ebayFeeRate = categoryFeeRates[category] ?? 13.6;

  // Revenue includes the item price and shipping collected from buyers.
  const totalSales = hasCalculationInput
    ? (selling + buyerShippingAmount) * orders
    : 0;

  // This rate table is the calculator's current estimate.
  const finalValueFee = hasCalculationInput
    ? totalSales * (ebayFeeRate / 100)
    : 0;

  const perOrderFeeRate = hasCalculationInput
    ? selling + buyerShippingAmount <= 10
      ? 0.3
      : 0.4
    : 0;

  const orderFee = hasCalculationInput
    ? perOrderFeeRate * orders
    : 0;

  const adsCost = hasCalculationInput
    ? totalSales * (adsRate / 100)
    : 0;

  const productCostTotal = hasCalculationInput
    ? purchasing * orders
    : 0;

  // AliExpress shipping is an expense, not eBay revenue.
  const shippingTotal = hasCalculationInput
    ? aliexpressShippingAmount * orders
    : 0;

  const productAndShipping = productCostTotal + shippingTotal;
  const ebayFee = finalValueFee + orderFee;

  const totalCosts = productAndShipping + ebayFee + adsCost;

  const profit = hasCalculationInput
    ? totalSales - totalCosts
    : 0;

  const profitMargin =
    hasCalculationInput && totalSales > 0
      ? (profit / totalSales) * 100
      : 0;

  const roi =
    hasCalculationInput && productAndShipping > 0
      ? (profit / productAndShipping) * 100
      : 0;

  const formatMoney = (value) => `$${value.toFixed(2)}`;

  const displayMoney = (value) =>
    hasCalculationInput ? formatMoney(value) : "—";

  const displayPercent = (value) =>
    hasCalculationInput ? `${value.toFixed(2)}%` : "—";

  const resetCalculator = () => {
    setSellingPrice("");
    setBuyerShipping("");
    setPurchasingPrice("");
    setAliexpressShipping("");
    setPromotedAds("");
    setNumberOfOrders("1");
    setSellerLevel("Above Standard");
    setStoreSubscription("No");
    setCategory("Most Categories");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-purple-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:py-12">
        <Hero />

        {/* Calculator layout */}
        <div
  id="profit-calculator"
  className="grid gap-6 lg:grid-cols-3"
>
          <section className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-7">
              {/* Product card heading */}
              <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      $
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      Product Details
                    </h3>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    Enter your product information to calculate your
                    estimated profit.
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 sm:self-auto">
                  <USAFlag />
                  USD
                </div>
              </div>

              {/* Product input component */}
              <ProductDetails
                sellingPrice={sellingPrice}
                setSellingPrice={setSellingPrice}
                buyerShipping={buyerShipping}
                setBuyerShipping={setBuyerShipping}
                purchasingPrice={purchasingPrice}
                setPurchasingPrice={setPurchasingPrice}
                aliexpressShipping={aliexpressShipping}
                setAliexpressShipping={setAliexpressShipping}
                promotedAds={promotedAds}
                setPromotedAds={setPromotedAds}
              />

              {/* Order and seller details */}
              <div className="mt-8 border-t border-slate-100 pt-7">
                <div className="mb-5">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                    Order & Seller Details
                  </h4>

                  <p className="mt-1 text-xs text-slate-400">
                    Select the details that match your eBay account.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {/* Number of orders */}
                  <div>
                    <label
                      htmlFor="numberOfOrders"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Number of Orders
                    </label>

                    <input
                      id="numberOfOrders"
                      type="number"
                      min="1"
                      step="1"
                      value={numberOfOrders}
                      onChange={(event) =>
                        setNumberOfOrders(event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  {/* Store subscription */}
                  <div>
                    <label
                      htmlFor="storeSubscription"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      eBay Store Subscription
                    </label>

                    <select
                      id="storeSubscription"
                      value={storeSubscription}
                      onChange={(event) =>
                        setStoreSubscription(event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    >
                      <option>No</option>
                      <option>Starter</option>
                      <option>Basic</option>
                      <option>Premium</option>
                      <option>Anchor</option>
                      <option>Enterprise</option>
                    </select>
                  </div>

                  {/* Seller level */}
                  <div>
                    <label
                      htmlFor="sellerLevel"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Seller Level
                    </label>

                    <select
                      id="sellerLevel"
                      value={sellerLevel}
                      onChange={(event) =>
                        setSellerLevel(event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    >
                      <option>Top Rated</option>
                      <option>Above Standard</option>
                      <option>Below Standard</option>
                    </select>
                  </div>

                  {/* Product category */}
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Product Category
                    </label>

                    <select
                      id="category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    >
                      {Object.keys(categoryFeeRates).map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Current fee estimate */}
              <div className="mt-7 rounded-2xl border border-orange-100 bg-linear-to-r from-orange-50 to-amber-50 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-sm font-bold text-orange-600">
                        %
                      </span>

                      <p className="font-semibold text-slate-800">
                        eBay Final Value Fee
                      </p>
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      Estimated rate for the selected category
                    </p>
                  </div>

                  <span className="self-start rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white sm:self-auto">
                    {ebayFeeRate}%
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 border-t border-orange-100 pt-4 text-xs text-slate-500 sm:grid-cols-2">
                  <div className="flex justify-between rounded-lg bg-white/70 px-3 py-2 sm:block">
                    <span>Final Value Fee</span>
                    <span className="ml-1 font-semibold text-slate-700">
                      {displayMoney(finalValueFee)}
                    </span>
                  </div>

                  <div className="flex justify-between rounded-lg bg-white/70 px-3 py-2 sm:block">
                    <span>Per-Order Fee</span>
                    <span className="ml-1 font-semibold text-slate-700">
                      {displayMoney(orderFee)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reset calculator */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                >
                  Reset Calculator
                </button>
              </div>
            </div>
          </section>

          {/* Profit summary */}
          <aside>
            <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-300/50">
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-400">
                    Estimated Profit
                  </p>

                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-300">
                    USD
                  </span>
                </div>

                <div
                  className={`mt-3 text-5xl font-extrabold tracking-tight ${
                    hasCalculationInput && profit < 0
                      ? "text-red-400"
                      : "text-white"
                  }`}
                >
                  {hasCalculationInput ? formatMoney(profit) : "—"}
                </div>

                <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-slate-200">
                  {displayPercent(profitMargin)} Profit Margin
                </div>
              </div>

              <div className="bg-slate-800 p-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Fee Breakdown
                </p>

                <div className="mb-4 flex justify-between gap-4">
                  <span className="text-sm text-slate-400">
                    Final Value Fee
                  </span>
                  <span className="font-semibold">
                    {displayMoney(finalValueFee)}
                  </span>
                </div>

                <div className="mb-4 flex justify-between gap-4">
                  <span className="text-sm text-slate-400">
                    International Fee
                  </span>
                  <span className="font-semibold">—</span>
                </div>

                <div className="mb-4 flex justify-between gap-4">
                  <span className="text-sm text-slate-400">
                    Per-Order Fee
                  </span>
                  <span className="font-semibold">
                    {displayMoney(orderFee)}
                  </span>
                </div>

                <div className="mb-4 flex justify-between gap-4">
                  <span className="text-sm text-slate-400">
                    Promoted Ads Fee
                  </span>
                  <span className="font-semibold">
                    {displayMoney(adsCost)}
                  </span>
                </div>

                <div className="mb-5 flex justify-between gap-4">
                  <span className="text-sm text-slate-400">
                    Product + AliExpress Shipping
                  </span>
                  <span className="font-semibold">
                    {displayMoney(productAndShipping)}
                  </span>
                </div>

                <div className="border-t border-slate-700 pt-5">
                  <div className="flex justify-between gap-4">
                    <span className="font-bold">Total Costs</span>
                    <span className="font-bold">
                      {displayMoney(totalCosts)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI and net profit */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-medium text-blue-500">ROI</p>

                <p
                  className={`mt-1 text-2xl font-extrabold ${
                    hasCalculationInput && roi < 0
                      ? "text-red-600"
                      : "text-blue-700"
                  }`}
                >
                  {displayPercent(roi)}
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                <p className="text-xs font-medium text-green-600">
                  Net Profit
                </p>

                <p
                  className={`mt-1 text-2xl font-extrabold ${
                    hasCalculationInput && profit < 0
                      ? "text-red-600"
                      : "text-green-700"
                  }`}
                >
                  {displayMoney(profit)}
                </p>
              </div>
            </div>

            {/* Information note */}
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Estimate before you list
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Use your expected selling price, supplier cost,
                    shipping and advertising rate to estimate your
                    potential eBay profit.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile market indicator */}
        <div className="mt-6 flex items-center justify-center sm:hidden">
          <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
            <USAFlag />
            <span>USA Market</span>
            <span className="text-blue-300">•</span>
            <span>eBay.com</span>
            <span className="text-blue-300">•</span>
            <span>USD</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <a href="/" className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-pink-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
                  U
                </div>

                <span className="text-xl font-extrabold tracking-tight">
                  Ultra<span className="text-orange-400">DS</span>
                </span>
              </a>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Practical features for eBay sellers to research products,
                understand profitability and grow their dropshipping business.
              </p>

              <div className="mt-5 inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-400">
                eBay Dropshipping Suite
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">Quick Links</h3>

              <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <a href="/" className="transition hover:text-orange-400">
                  Home
                </a>
                <a href="#" className="transition hover:text-orange-400">
                  About
                </a>
                <a href="#" className="transition hover:text-orange-400">
                  Contact
                </a>
                <a href="#" className="transition hover:text-orange-400">
                  Privacy Policy
                </a>
                <a href="#" className="transition hover:text-orange-400">
                  Terms of Service
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} UltraDS. All rights reserved.</p>
            <p>Built for eBay sellers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


function App() {
  const pathname =
    window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/profit-calculator") {
    return <ProfitCalculator />;
  }

  if (pathname === "/winning-products") {
    return <WinningProducts />;
  }

  if (pathname === "/vero-checker") {
    return <VeroChecker />;
  }

  if (pathname === "/product-analyzer") {
    return <ProductAnalyzer />;
  }

  return <Home />;
}

export default App;



