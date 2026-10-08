import { useState } from "react";

function USAFlag() {
  return (
    <svg
      width="22"
      height="15"
      viewBox="0 0 22 15"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 rounded-sm"
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

      <circle cx="1.4" cy="1.3" r="0.35" fill="white" />
      <circle cx="3.1" cy="1.3" r="0.35" fill="white" />
      <circle cx="4.8" cy="1.3" r="0.35" fill="white" />
      <circle cx="6.5" cy="1.3" r="0.35" fill="white" />
      <circle cx="8.2" cy="1.3" r="0.35" fill="white" />

      <circle cx="2.25" cy="2.6" r="0.35" fill="white" />
      <circle cx="3.95" cy="2.6" r="0.35" fill="white" />
      <circle cx="5.65" cy="2.6" r="0.35" fill="white" />
      <circle cx="7.35" cy="2.6" r="0.35" fill="white" />

      <circle cx="1.4" cy="3.9" r="0.35" fill="white" />
      <circle cx="3.1" cy="3.9" r="0.35" fill="white" />
      <circle cx="4.8" cy="3.9" r="0.35" fill="white" />
      <circle cx="6.5" cy="3.9" r="0.35" fill="white" />
      <circle cx="8.2" cy="3.9" r="0.35" fill="white" />

      <circle cx="2.25" cy="5.2" r="0.35" fill="white" />
      <circle cx="3.95" cy="5.2" r="0.35" fill="white" />
      <circle cx="5.65" cy="5.2" r="0.35" fill="white" />
      <circle cx="7.35" cy="5.2" r="0.35" fill="white" />

      <circle cx="1.4" cy="6.5" r="0.35" fill="white" />
      <circle cx="3.1" cy="6.5" r="0.35" fill="white" />
      <circle cx="4.8" cy="6.5" r="0.35" fill="white" />
      <circle cx="6.5" cy="6.5" r="0.35" fill="white" />
      <circle cx="8.2" cy="6.5" r="0.35" fill="white" />
    </svg>
  );
}

function App() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [purchasingPrice, setPurchasingPrice] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [promotedAds, setPromotedAds] = useState("");

  const [numberOfOrders, setNumberOfOrders] = useState("1");
  const [sellerLevel, setSellerLevel] = useState("Above Standard");
  const [storeSubscription, setStoreSubscription] = useState("No");

  const [category, setCategory] = useState("Most Categories");

  /*
    eBay Final Value Fee rates.

    These can later be moved to the backend/admin panel.
  */
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
  const purchasing = Number(purchasingPrice) || 0;
  const shipping = Number(shippingCost) || 0;
  const adsRate = Number(promotedAds) || 0;

  const orders = Math.max(
    1,
    Number(numberOfOrders) || 1
  );

  /*
    The calculator stays empty until the user
    enters a Selling Price.
  */
  const hasCalculationInput =
    sellingPrice.trim() !== "";

  const ebayFeeRate =
    categoryFeeRates[category] ?? 13.6;

  /*
    Total sales
  */
  const totalSales = hasCalculationInput
    ? selling * orders
    : 0;

  /*
    Final Value Fee
  */
  const finalValueFee = hasCalculationInput
    ? totalSales * (ebayFeeRate / 100)
    : 0;

  /*
    Per-order fee:
    $0.30 for orders $10 or less
    $0.40 for orders over $10
  */
  const perOrderFeeRate = hasCalculationInput
    ? selling <= 10
      ? 0.3
      : 0.4
    : 0;

  const orderFee = hasCalculationInput
    ? perOrderFeeRate * orders
    : 0;

  /*
    Promoted Ads
  */
  const adsCost = hasCalculationInput
    ? totalSales * (adsRate / 100)
    : 0;

  /*
    Product cost
  */
  const productCostTotal = hasCalculationInput
    ? purchasing * orders
    : 0;

  /*
    Shipping cost
  */
  const shippingTotal = hasCalculationInput
    ? shipping * orders
    : 0;

  const productAndShipping =
    productCostTotal + shippingTotal;

  /*
    Total eBay fees
  */
  const ebayFee =
    finalValueFee + orderFee;

  /*
    Total costs
  */
  const totalCosts =
    productAndShipping +
    ebayFee +
    adsCost;

  /*
    Actual profit
  */
  const profit = hasCalculationInput
    ? totalSales - totalCosts
    : 0;

  /*
    Profit margin
  */
  const profitMargin =
    hasCalculationInput && totalSales > 0
      ? (profit / totalSales) * 100
      : 0;

  /*
    ROI
  */
  const roi =
    hasCalculationInput &&
    productAndShipping > 0
      ? (profit / productAndShipping) * 100
      : 0;

  const formatMoney = (value) =>
    `$${value.toFixed(2)}`;

  const displayMoney = (value) =>
    hasCalculationInput
      ? formatMoney(value)
      : "—";

  const displayPercent = (value) =>
    hasCalculationInput
      ? `${value.toFixed(2)}%`
      : "—";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">

      {/* Header */}
      <header className="border-b border-white bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Ultra<span className="text-orange-500">DS</span>
            </h1>

            <p className="text-xs text-slate-500">
              eBay Dropshipping Suite
            </p>
          </div>

          {/* USA Market */}
          <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <USAFlag />

            <span>USA Market</span>

            <span className="text-blue-300">•</span>

            <span>eBay.com</span>

            <span className="text-blue-300">•</span>

            <span>USD</span>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-10">

        {/* Heading */}
        <div className="mb-8">

          <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-sm">
            PROFIT CALCULATOR
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Know Your Profit
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Before You Sell
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Calculate your estimated eBay profit, costs,
            margins and return on investment in seconds.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Calculator */}
          <section className="lg:col-span-2">

            <div className="rounded-3xl border border-white bg-white/90 p-7 shadow-xl shadow-orange-100/50">

              <div className="mb-7 flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Product Details
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Enter your product information below.
                  </p>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 text-sm font-bold text-orange-600">
                  USD $
                </div>

              </div>

              {/* Product Inputs */}
              <div className="grid gap-5 md:grid-cols-2">

                {/* Selling Price */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Selling Price
                    <span className="ml-1 font-normal text-slate-400">
                      (eBay Price)
                    </span>
                  </label>

                  <div className="flex">
                    <span className="flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-orange-50 px-4 font-semibold text-orange-500">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      value={sellingPrice}
                      onChange={(e) =>
                        setSellingPrice(e.target.value)
                      }
                      placeholder="100"
                      className="w-full rounded-r-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Purchasing Price */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Purchasing Price
                    <span className="ml-1 font-normal text-slate-400">
                      (Product Cost)
                    </span>
                  </label>

                  <div className="flex">
                    <span className="flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-purple-50 px-4 font-semibold text-purple-500">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      value={purchasingPrice}
                      onChange={(e) =>
                        setPurchasingPrice(e.target.value)
                      }
                      placeholder="50"
                      className="w-full rounded-r-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />
                  </div>
                </div>

                {/* Shipping */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Shipping Cost
                    <span className="ml-1 font-normal text-slate-400">
                      (Supplier → Customer)
                    </span>
                  </label>

                  <div className="flex">
                    <span className="flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-blue-50 px-4 font-semibold text-blue-500">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      value={shippingCost}
                      onChange={(e) =>
                        setShippingCost(e.target.value)
                      }
                      placeholder="0"
                      className="w-full rounded-r-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Promoted Ads */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Promoted Ads
                    <span className="ml-1 font-normal text-slate-400">
                      (Ad Rate)
                    </span>
                  </label>

                  <div className="flex">
                    <input
                      type="number"
                      min="0"
                      value={promotedAds}
                      onChange={(e) =>
                        setPromotedAds(e.target.value)
                      }
                      placeholder="5"
                      className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                    />

                    <span className="flex items-center rounded-r-xl border border-l-0 border-slate-300 bg-pink-50 px-4 font-semibold text-pink-500">
                      %
                    </span>
                  </div>
                </div>

              </div>

              {/* eBay Settings */}
              <div className="mt-6 grid gap-5 md:grid-cols-2">

                {/* Number of Orders */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    No. of Orders
                  </label>

                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={numberOfOrders}
                    onChange={(e) =>
                      setNumberOfOrders(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                {/* eBay Store Subscription */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    eBay Store Subscription
                  </label>

                  <select
                    value={storeSubscription}
                    onChange={(e) =>
                      setStoreSubscription(e.target.value)
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

                {/* Seller Level */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Seller Level
                  </label>

                  <select
                    value={sellerLevel}
                    onChange={(e) =>
                      setSellerLevel(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  >
                    <option>Top Rated</option>
                    <option>Above Standard</option>
                    <option>Below Standard</option>
                  </select>
                </div>

              </div>

              {/* Product Category */}
              <div className="mt-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Category
                </label>

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                >
                  <option>Most Categories</option>
                  <option>Antiques</option>
                  <option>Art</option>
                  <option>Baby</option>
                  <option>Books & Magazines</option>
                  <option>Business & Industrial</option>
                  <option>Cameras & Photo</option>
                  <option>Cell Phones & Accessories</option>
                  <option>Clothing, Shoes & Accessories</option>
                  <option>Collectibles</option>
                  <option>Computers/Tablets & Networking</option>
                  <option>Consumer Electronics</option>
                  <option>Crafts</option>
                  <option>Dolls & Bears</option>
                  <option>eBay Motors</option>
                  <option>Health & Beauty</option>
                  <option>Home & Garden</option>
                  <option>Jewelry & Watches</option>
                  <option>Musical Instruments & Gear</option>
                  <option>Pet Supplies</option>
                  <option>Pottery & Glass</option>
                  <option>Sporting Goods</option>
                  <option>Sports Mem, Cards & Fan Shop</option>
                  <option>Toys & Hobbies</option>
                  <option>Video Games & Consoles</option>
                  <option>Everything Else</option>
                </select>

              </div>

              {/* eBay Fee Information */}
              <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="font-semibold text-slate-800">
                      eBay Final Value Fee
                    </p>

                    <p className="text-xs text-slate-500">
                      Based on your selected category
                    </p>
                  </div>

                  <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
                    {ebayFeeRate}%
                  </span>

                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-500">

                  <div>
                    Final Value Fee:
                    <span className="ml-1 font-semibold text-slate-700">
                      {displayMoney(finalValueFee)}
                    </span>
                  </div>

                  <div>
                    Per-Order Fee:
                    <span className="ml-1 font-semibold text-slate-700">
                      {displayMoney(orderFee)}
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Profit Summary */}
          <aside>

            <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-200">

              {/* Profit */}
              <div className="p-7">

                <p className="text-sm font-medium text-slate-400">
                  Estimated Actual Profit
                </p>

                <div
                  className={`mt-2 text-5xl font-extrabold tracking-tight ${
                    hasCalculationInput && profit < 0
                      ? "text-red-400"
                      : "text-white"
                  }`}
                >
                  {hasCalculationInput
                    ? formatMoney(profit)
                    : "—"}
                </div>

                <div className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-200">
                  {displayPercent(profitMargin)} Profit Margin
                </div>

              </div>

              {/* Cost Breakdown */}
              <div className="bg-slate-800 p-7">

                {/* Final Value Fee */}
                <div className="mb-4 flex justify-between">
                  <span className="text-sm text-slate-400">
                    Final Value Fee
                  </span>

                  <span className="font-semibold">
                    {displayMoney(finalValueFee)}
                  </span>
                </div>

                {/* Per Order Fee */}
                <div className="mb-4 flex justify-between">
                  <span className="text-sm text-slate-400">
                    Per-Order Fee
                  </span>

                  <span className="font-semibold">
                    {displayMoney(orderFee)}
                  </span>
                </div>

                {/* Promoted Ads */}
                <div className="mb-4 flex justify-between">
                  <span className="text-sm text-slate-400">
                    Promoted Ads
                  </span>

                  <span className="font-semibold">
                    {displayMoney(adsCost)}
                  </span>
                </div>

                {/* Product + Shipping */}
                <div className="mb-4 flex justify-between">
                  <span className="text-sm text-slate-400">
                    Product + Shipping
                  </span>

                  <span className="font-semibold">
                    {displayMoney(productAndShipping)}
                  </span>
                </div>

                {/* Total Costs */}
                <div className="border-t border-slate-700 pt-5">

                  <div className="flex justify-between">

                    <span className="font-bold">
                      Total Costs
                    </span>

                    <span className="font-bold">
                      {displayMoney(totalCosts)}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* Statistics */}
            <div className="mt-5 grid grid-cols-2 gap-4">

              {/* ROI */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <p className="text-xs font-medium text-blue-500">
                  ROI
                </p>

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

              {/* Net Profit */}
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

          </aside>

        </div>

      </main>

    </div>
  );
}

export default App;