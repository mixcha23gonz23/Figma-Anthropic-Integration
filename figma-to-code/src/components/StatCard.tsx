interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  accentColor: string;
}

export default function StatCard({ label, value, delta, accentColor }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden flex-1 min-w-0">
      <div className="flex h-full">
        <div className="w-1 shrink-0" style={{ backgroundColor: accentColor }} />
        <div className="px-5 py-5 flex flex-col gap-1">
          <p className="text-[#64748b] text-xs font-medium">{label}</p>
          <p className="text-[#0f172a] text-[32px] font-bold leading-none mt-1">{value}</p>
          <p className="text-[#64748b] text-xs mt-auto pt-3">{delta}</p>
        </div>
      </div>
    </div>
  );
}
