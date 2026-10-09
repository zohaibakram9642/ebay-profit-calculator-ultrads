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
        Array.from({ length: row % 2 === 0 ? 5 : 4 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={row % 2 === 0 ? 1.4 + col * 1.7 : 2.25 + col * 1.7}
            cy={1.3 + row * 1.04}
            r="0.35"
            fill="white"
          />
        ))
      )}
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-pink-500 text-xl font-extrabold text-white shadow-sm">
            U
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[22px] font-extrabold tracking-tight text-slate-950">
                Ultra<span className="text-orange-500">DS</span>
              </span>

              <span className="rounded-md bg-orange-50 px-2 py-1 text-[10px] font-bold uppercase text-orange-600">
                Free Tool
              </span>
            </div>

            <p className="text-xs text-slate-500">
              eBay Profit Calculator
            </p>
          </div>
        </a>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 sm:px-4 sm:text-sm">
          <USAFlag />
          <span>USA Market</span>
          <span className="hidden text-slate-300 sm:inline">•</span>
          <span className="hidden sm:inline">eBay.com</span>
          <span className="text-slate-300">•</span>
          <span>USD</span>
        </div>
      </div>
    </header>
  );
}