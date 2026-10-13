
import { useState } from "react";

const navigationItems = [
  { label: "Home", icon: "🏠", href: "/", ready: true },
  { label: "Winning Products", icon: "🔥", ready: false },
  {
    label: "Profit Calculator",
    icon: "🧮",
    href: "#profit-calculator",
    ready: true,
    free: true,
  },
  {
    label: "VERO & Copyright Checker",
    icon: "🛡️",
    ready: false,
  },
  { label: "Product Analyzer", icon: "🔎", ready: false },
  { label: "Resources & Guides", icon: "📚", ready: false },
  { label: "Mentorship", icon: "🎓", ready: false },
  { label: "Online Classes", icon: "🎓", ready: false },
  { label: "Login / Account", icon: "👤", ready: false },
];

function USAFlag() {
  return (
    <svg
      width="22"
      height="15"
      viewBox="0 0 22 15"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 rounded-sm"
      role="img"
      aria-label="United States flag"
    >
      <rect width="22" height="15" fill="#fff" />

      {Array.from({ length: 7 }, (_, index) => (
        <rect
          key={index}
          y={index * 2.3}
          width="22"
          height="1.15"
          fill="#B22234"
        />
      ))}

      <rect width="9.5" height="8.1" fill="#3C3B6E" />

      {Array.from({ length: 6 }, (_, row) =>
        Array.from(
          { length: row % 2 === 0 ? 5 : 4 },
          (_, column) => (
            <circle
              key={`${row}-${column}`}
              cx={row % 2 === 0
                ? 1.4 + column * 1.7
                : 2.25 + column * 1.7}
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const handleFutureFeature = (label) => {
    setNotice(`${label} is planned for a future UltraDS update.`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-3">
          {/* UltraDS brand */}
          <a
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-3"
            aria-label="UltraDS home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-pink-500 text-xl font-extrabold text-white shadow-sm">
              U
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[22px] font-extrabold tracking-tight text-slate-950">
                  Ultra<span className="text-orange-500">DS</span>
                </span>

                <span className="rounded-md bg-orange-50 px-2 py-1 text-[10px] font-bold uppercase text-orange-600">
                  Free Feature
                </span>
              </div>

              <p className="text-xs text-slate-500">
                eBay Profit Calculator
              </p>
            </div>
          </a>

          {/* Market indicator and navigation toggle */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 md:flex lg:px-4 lg:text-sm">
              <USAFlag />
              <span>USA Market</span>
              <span className="text-slate-300">•</span>
              <span>eBay.com</span>
              <span className="text-slate-300">•</span>
              <span>USD</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setMenuOpen((current) => !current);
                setNotice("");
              }}
              aria-expanded={menuOpen}
              aria-controls="ultrads-navigation"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              className="flex min-h-11 items-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-orange-100 sm:px-4"
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
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>

              <span className="hidden sm:inline">
                {menuOpen ? "Close Menu" : "Explore UltraDS"}
              </span>
            </button>
          </div>
        </div>

        {/* Expandable navigation panel */}
        {menuOpen && (
          <div
            id="ultrads-navigation"
            className="absolute left-0 right-0 top-full z-50 rounded-b-2xl border border-t-0 border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:p-6"
          >
            <div className="mb-4">
              <h2 className="text-lg font-bold text-slate-900">
                Explore UltraDS
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your workspace for eBay selling and learning.
              </p>
            </div>

            <nav
              aria-label="Main navigation"
              className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
            >
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.ready ? (
                    <a
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setNotice("");
                      }}
                      className="flex min-h-[58px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg">
                        {item.icon}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-slate-800">
                          {item.label}
                        </span>

                        {item.free && (
                          <span className="mt-0.5 block text-xs font-medium text-green-600">
                            Free feature
                          </span>
                        )}
                      </span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleFutureFeature(item.label)}
                      className="flex min-h-[58px] w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-left transition hover:border-slate-300 hover:bg-slate-100"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg">
                        {item.icon}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-slate-700">
                          {item.label}
                        </span>

                        <span className="mt-0.5 block text-xs text-slate-400">
                          Coming soon
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {notice && (
              <p
                role="status"
                aria-live="polite"
                className="mt-4 rounded-xl bg-orange-50 px-4 py-3 text-sm text-orange-800"
              >
                {notice}
              </p>
            )}

            <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500 md:hidden">
              <USAFlag />
              <span>USA Market</span>
              <span>•</span>
              <span>eBay.com</span>
              <span>•</span>
              <span>USD</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
