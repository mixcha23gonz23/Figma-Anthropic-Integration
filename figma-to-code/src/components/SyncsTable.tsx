const rows = [
  { component: "Button",   file: "Design System v2", generated: "Button.tsx",   status: "Success", time: "2m ago" },
  { component: "Card",     file: "Design System v2", generated: "Card.tsx",     status: "Success", time: "5m ago" },
  { component: "NavBar",   file: "Dashboard.fig",    generated: "NavBar.tsx",   status: "Success", time: "12m ago" },
  { component: "StatCard", file: "Dashboard.fig",    generated: "StatCard.tsx", status: "Success", time: "14m ago" },
  { component: "Table",    file: "Dashboard.fig",    generated: "Table.tsx",    status: "Syncing", time: "now" },
];

const statusColor: Record<string, string> = {
  Success: "text-[#10b981]",
  Syncing: "text-[#f59e0b]",
};

export default function SyncsTable() {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden">
      <div className="px-6 py-5 border-b border-[#f1f5f9]">
        <h2 className="text-[#0f172a] font-semibold text-base">Recent Figma Syncs</h2>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#f1f5f9]">
            {["Component", "File", "Generated", "Status", "Time"].map((col) => (
              <th
                key={col}
                className="text-left px-6 py-3 text-[#64748b] font-semibold text-xs"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.component}
              className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}
            >
              <td className="px-6 py-3 text-[#0f172a] font-medium">{row.component}</td>
              <td className="px-6 py-3 text-[#475569]">{row.file}</td>
              <td className="px-6 py-3 text-[#475569]">{row.generated}</td>
              <td className={`px-6 py-3 font-medium ${statusColor[row.status] ?? "text-[#475569]"}`}>
                {row.status}
              </td>
              <td className="px-6 py-3 text-[#475569]">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
