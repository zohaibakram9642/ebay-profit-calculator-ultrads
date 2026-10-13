
function MoneyField({
  label,
  helper,
  value,
  onChange,
  placeholder = "0",
  accent = "orange",
}) {
  const accents = {
    orange: {
      prefix: "bg-orange-50 text-orange-600",
      focus: "focus:border-orange-500 focus:ring-orange-100",
    },
    blue: {
      prefix: "bg-blue-50 text-blue-600",
      focus: "focus:border-blue-500 focus:ring-blue-100",
    },
    purple: {
      prefix: "bg-purple-50 text-purple-600",
      focus: "focus:border-purple-500 focus:ring-purple-100",
    },
    pink: {
      prefix: "bg-pink-50 text-pink-600",
      focus: "focus:border-pink-500 focus:ring-pink-100",
    },
  };

  const style = accents[accent] ?? accents.orange;

  return (
    <div className="min-w-0">
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {helper && (
          <span className="ml-1 font-normal text-slate-400">
            ({helper})
          </span>
        )}
      </label>

      <div className="flex">
        <span
          className={`flex items-center rounded-l-xl border border-r-0 border-slate-300 px-4 font-semibold ${style.prefix}`}
        >
          $
        </span>

        <input
          type="number"
          min="0"
          step="0.01"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`w-full min-w-0 rounded-r-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${style.focus}`}
        />
      </div>
    </div>
  );
}

export default function ProductDetails({
  sellingPrice,
  setSellingPrice,
  buyerShipping,
  setBuyerShipping,
  purchasingPrice,
  setPurchasingPrice,
  aliexpressShipping,
  setAliexpressShipping,
  promotedAds,
  setPromotedAds,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <MoneyField
        label="Selling Price"
        helper="eBay item price"
        value={sellingPrice}
        onChange={setSellingPrice}
        placeholder="0"
        accent="orange"
      />

      <MoneyField
        label="Shipping Charged to Buyer"
        helper="Buyer-paid shipping"
        value={buyerShipping}
        onChange={setBuyerShipping}
        placeholder="0"
        accent="blue"
      />

      <MoneyField
        label="Purchasing Price"
        helper="Product cost"
        value={purchasingPrice}
        onChange={setPurchasingPrice}
        placeholder="0"
        accent="purple"
      />

      <MoneyField
        label="AliExpress Shipping"
        helper="Supplier shipping cost"
        value={aliexpressShipping}
        onChange={setAliexpressShipping}
        placeholder="0"
        accent="blue"
      />

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Promoted Ads Rate
        </label>

        <div className="flex">
          <input
            type="number"
            min="0"
            step="0.1"
            value={promotedAds}
            onChange={(event) => setPromotedAds(event.target.value)}
            placeholder="0"
            className="w-full min-w-0 rounded-l-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
          />

          <span className="flex items-center rounded-r-xl border border-l-0 border-slate-300 bg-pink-50 px-4 font-semibold text-pink-600">
            %
          </span>
        </div>
        <p className="mt-1.5 text-xs text-slate-400">
          Leave empty if you are not using Promoted Listings.
        </p>
      </div>
    </div>
  );
}
