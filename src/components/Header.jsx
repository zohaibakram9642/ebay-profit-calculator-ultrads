
import { useState } from "react";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Winning Products", href: "/winning-products" },
  { label: "Profit Calculator", href: "/profit-calculator" },
];

const upcomingFeatures = [
  "VERO & Copyright Checker",
  "Product Analyzer",
  "Resources & Guides",
  "Mentorship",
  "Online Classes",
];

export default function Header({
  isHome = false,
  pageTitle = "eBay Profit Calculator",
}) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const pathname =
    window.location.pathname.replace(/\/+$/, "") || "/";

  const linkClass = (href) =>
    `whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-semibold transition sm:text-sm ${
      pathname === href
        ? "bg-orange-50 text-orange-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-orange-600"
    }`;

  const showComingSoon = (label) => {
    setNotice(`${label} is planned for a future UltraDS update.`);
    setMoreOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="flex min-h-[76px] items-center justify-between gap-3">
          {/* Brand */}
          <a
            href="/"
            aria-label="UltraDS Home"
            className="flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-pink-500 text-xl font-extrabold text-white">
              U
            </div>

            <div>
              <div className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                Ultra<span className="text-orange-500">DS</span>
              </div>

              <p className="hidden text-[11px] text-slate-500 sm:block">
                {isHome ? "eBay Dropshipping Suite" : pageTitle}
              </p>
            </div>
          </a>

          {/* Primary navigation: always visible on desktop/tablet */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {primaryLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                aria-current={
                  pathname === item.href ? "page" : undefined
                }
              >
                {item.label}
                {item.label === "Profit Calculator" && (
                  <span className="ml-1.5 rounded bg-green-100 px-1 py-0.5 text-[9px] font-bold text-green-700">
                    FREE
                  </span>
                )}
              </a>
            ))}

            {/* Secondary features */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setMoreOpen((open) => !open);
                  setNotice("");
                }}
                aria-expanded={moreOpen}
                className={linkClass("")}
              >
                More
                <span className="ml-1" aria-hidden="true">
                  {moreOpen ? "▴" : "▾"}
                </span>
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                    Explore UltraDS
                  </p>

                  {upcomingFeatures.map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => showComingSoon(label)}
                      className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50"
                    >
                      <span>{label}</span>
                      <span className="shrink-0 text-[10px] text-slate-400">
                        Soon
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => showComingSoon("Login / Account")}
              className="ml-1 whitespace-nowrap rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-slate-700 sm:text-sm"
            >
              Account
            </button>
          </nav>

          {/* Mobile navigation toggle */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((open) => !open);
              setNotice("");
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="ultrads-mobile-navigation"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            id="ultrads-mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-100 py-3 md:hidden"
          >
            {primaryLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`mb-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold ${
                  pathname === item.href
                    ? "bg-orange-50 text-orange-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}

                {item.label === "Profit Calculator" && (
                  <span className="rounded bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">
                    FREE
                  </span>
                )}
              </a>
            ))}

            <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-wide text-slate-400">
              More features
            </p>

            {upcomingFeatures.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => showComingSoon(label)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm text-slate-600 hover:bg-slate-50"
              >
                {label}
                <span className="text-[10px] text-slate-400">Soon</span>
              </button>
            ))}

            <button
              type="button"
              onClick={() => showComingSoon("Login / Account")}
              className="mt-2 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white"
            >
              Login / Account
            </button>
          </nav>
        )}

        {notice && (
          <div
            role="status"
            className="border-t border-slate-100 py-3 text-sm text-slate-600"
          >
            {notice}
          </div>
        )}
      </div>
    </header>
  );
}
