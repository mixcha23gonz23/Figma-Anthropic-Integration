const navItems = [
  { label: "Dashboard", active: true },
  { label: "Analytics", active: false },
  { label: "Components", active: false },
  { label: "Design Tokens", active: false },
  { label: "Settings", active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 bg-[#0f172a] flex flex-col h-screen sticky top-0">
      <div className="px-6 py-7">
        <span className="text-white font-bold text-lg">⚡ ClaudeUI</span>
      </div>

      <nav className="flex flex-col gap-1 px-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-[#6366f1] text-white font-semibold"
                : "text-[#94a3b8] hover:text-white hover:bg-white/5"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
