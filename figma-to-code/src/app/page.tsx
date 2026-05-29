import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import SyncsTable from "@/components/SyncsTable";

const stats = [
  { label: "Total Components", value: "142", delta: "+12 this week",   accentColor: "#6366f1" },
  { label: "Design Tokens",    value: "38",  delta: "+3 today",        accentColor: "#10b981" },
  { label: "Figma Syncs",      value: "27",  delta: "Last: 2 min ago", accentColor: "#f59e0b" },
  { label: "Code Generated",   value: "89",  delta: "Files exported",  accentColor: "#ef4444" },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc]">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-auto">
        <Header title="Dashboard" />

        <main className="flex-1 p-8 flex flex-col gap-6">
          {/* Stat cards */}
          <div className="flex gap-[22px]">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          {/* Recent syncs table */}
          <SyncsTable />

          {/* Prompt hint */}
          <div className="bg-[#eef2ff] border border-[#c7d2fe] rounded-xl px-6 py-4">
            <p className="text-[#6366f1] font-semibold text-[11px] mb-1">
              Claude prompt used to generate this file:
            </p>
            <p className="text-[#1e293b] text-sm">
              Read the selected Figma frame and generate React + Tailwind code with semantic HTML
              and responsive layout.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
