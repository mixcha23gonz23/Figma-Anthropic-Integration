export default function Header({ title }: { title: string }) {
  return (
    <header className="bg-white border-b border-[#e2e8f0] h-[72px] flex items-center justify-between px-8 shrink-0">
      <h1 className="text-[#0f172a] font-semibold text-[22px]">{title}</h1>
      <div className="w-9 h-9 rounded-full bg-[#6366f1] flex items-center justify-center">
        <span className="text-white font-bold text-sm">E</span>
      </div>
    </header>
  );
}
