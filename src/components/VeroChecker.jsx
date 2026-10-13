
import { useState } from "react";
import Header from "./Header";

export default function VeroChecker() {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [listingUrl, setListingUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setProductName("");
    setBrandName("");
    setListingUrl("");
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header pageTitle="VERO & Copyright Checker" />

      <main>
        {/* Page introduction */}
        <section className="border-b border-slate-200 bg-linear-to-br from-orange-50 via-white to-purple-50">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Feature Preview
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              VERO & Copyright Checker
              <span className="mt-2 block bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Review before you list.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Prepare product information for a future listing-risk review.
              UltraDS is developing this feature to help sellers investigate
              potential brand, trademark, copyright and listing-policy concerns.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-7 px-5 py-10 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-12">
          {/* Input form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Product information
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter the available details below to preview the planned
                  checking workflow.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="product-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Product name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="product-name"
                    type="text"
                    required
                    maxLength={160}
                    value={productName}
                    onChange={(event) => {
                      setProductName(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="e.g. Wireless charging stand"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="brand-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Brand or trademark name
                  </label>

                  <input
                    id="brand-name"
                    type="text"
                    maxLength={120}
                    value={brandName}
                    onChange={(event) => {
                      setBrandName(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Enter a brand, if applicable"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Entering a brand does not establish whether its use
                    is permitted.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="listing-url"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Product or listing URL
                    <span className="ml-2 font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="listing-url"
                    type="url"
                    maxLength={1000}
                    value={listingUrl}
                    onChange={(event) => {
                      setListingUrl(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="https://example.com/product"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
                  >
                    Preview Check
                    <span aria-hidden="true">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="min-h-12 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                  >
                    Clear fields
                  </button>
                </div>
              </form>

              {/* Preview state: no real scan is performed */}
              {submitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg text-amber-800">
                      !
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900">
                        Preview submitted
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        Your information has been added to this page's
                        preview state. No trademark search, copyright scan,
                        or eBay policy check has been performed.
                      </p>

                      <div className="mt-4 space-y-2 rounded-xl border border-amber-200/70 bg-white/80 p-4 text-sm">
                        <p>
                          <span className="font-semibold text-slate-600">
                            Product:
                          </span>{" "}
                          <span className="break-words">{productName}</span>
                        </p>

                        {brandName.trim() && (
                          <p>
                            <span className="font-semibold text-slate-600">
                              Brand:
                            </span>{" "}
                            <span className="break-words">{brandName}</span>
                          </p>
                        )}

                        {listingUrl.trim() && (
                          <p>
                            <span className="font-semibold text-slate-600">
                              URL:
                            </span>{" "}
                            <span className="break-all">{listingUrl}</span>
                          </p>
                        )}
                      </div>

                      <p className="mt-3 text-xs leading-5 text-amber-900">
                        This preview is not a clearance decision or legal
                        advice. Check applicable rights and marketplace
                        policies before listing a product.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Planned checks */}
          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-slate-900">
                Planned review areas
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                These are intended areas for future functionality, not
                checks currently performed by this page.
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                    ™
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Brand & trademark research
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Investigate relevant brand names and trademark
                      information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                    ©
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Copyright concerns
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Review potential concerns involving images, text
                      and other creative material.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Marketplace policy review
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Help sellers review relevant listing requirements
                      before publishing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
              <h3 className="text-sm font-bold text-orange-900">
                Important
              </h3>

              <p className="mt-2 text-sm leading-6 text-orange-900/80">
                A product not appearing in a search does not prove it is
                safe to sell. Rights, permissions and marketplace rules
                may depend on the specific item and how it is listed.
              </p>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 lg:px-8">
          <a
            href="/profit-calculator"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
          >
            ← Return to the free Profit Calculator
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a href="/" className="font-extrabold text-slate-900">
            Ultra<span className="text-orange-500">DS</span>
          </a>

          <p>VERO & Copyright Checker · Feature Preview</p>
        </div>
      </footer>
    </div>
  );
}
