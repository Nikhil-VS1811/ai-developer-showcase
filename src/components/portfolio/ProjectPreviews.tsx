import { Send, Sparkles, FileText, Search, TrendingUp, GitBranch } from "lucide-react";

/**
 * Consistent presentation: each preview is a rounded "browser" frame with
 * a faux titlebar + URL pill, and the app UI rendered inside. Designed to
 * read well at small sizes (card hero).
 */
function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="w-full h-full rounded-xl border border-border bg-background/80 backdrop-blur-sm shadow-xl shadow-black/20 overflow-hidden flex flex-col">
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/40">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 mx-2 px-2 py-0.5 rounded-md bg-background/60 border border-border/60 text-[9px] font-mono text-muted-foreground truncate text-center">
          {url}
        </div>
      </div>
      {/* App body */}
      <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

export function ChatPreview() {
  return (
    <Frame url="geetai.app/chat">
      <div className="h-full flex flex-col bg-gradient-to-b from-background to-muted/20">
        <div className="px-3 py-1.5 border-b border-border/60 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" strokeWidth={2} />
          <span className="text-[10px] font-medium text-foreground">GeetAI</span>
          <span className="ml-auto text-[8px] font-mono text-muted-foreground">mood · calm</span>
        </div>
        <div className="flex-1 px-3 py-2 space-y-1.5 overflow-hidden">
          <div className="flex justify-end">
            <div className="max-w-[75%] px-2 py-1 rounded-lg rounded-tr-sm bg-primary/15 border border-primary/20">
              <div className="h-1 w-20 bg-foreground/40 rounded-full" />
              <div className="h-1 w-14 bg-foreground/30 rounded-full mt-0.5" />
            </div>
          </div>
          <div className="flex">
            <div className="max-w-[80%] px-2 py-1 rounded-lg rounded-tl-sm bg-card border border-border">
              <div className="text-[8px] font-mono text-amber-400/80 mb-0.5">Gita 2.47</div>
              <div className="h-1 w-24 bg-foreground/30 rounded-full" />
              <div className="h-1 w-20 bg-foreground/20 rounded-full mt-0.5" />
              <div className="h-1 w-16 bg-foreground/20 rounded-full mt-0.5" />
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5 border-t border-border/60 flex items-center gap-1.5">
          <div className="flex-1 h-5 rounded-md bg-muted/60 border border-border/60 flex items-center px-2">
            <span className="text-[8px] text-muted-foreground/70">Share what's on your mind…</span>
          </div>
          <div className="w-5 h-5 rounded-md bg-primary/90 flex items-center justify-center">
            <Send className="w-2.5 h-2.5 text-primary-foreground" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function DocQAPreview() {
  return (
    <Frame url="docuquery.app/ask">
      <div className="h-full flex">
        {/* Sidebar: docs */}
        <div className="w-[34%] border-r border-border/60 bg-muted/30 px-2 py-2 space-y-1">
          <div className="text-[8px] font-mono uppercase tracking-wide text-muted-foreground mb-1">Sources</div>
          {["whitepaper.pdf", "rfc-2023.pdf", "notes.md"].map((n, i) => (
            <div key={n} className={`flex items-center gap-1 px-1.5 py-1 rounded-md ${i === 0 ? "bg-primary/10 border border-primary/20" : ""}`}>
              <FileText className={`w-2.5 h-2.5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} strokeWidth={2} />
              <span className={`text-[8px] font-mono truncate ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>{n}</span>
            </div>
          ))}
        </div>
        {/* Main: Q&A */}
        <div className="flex-1 flex flex-col">
          <div className="px-2.5 py-1.5 border-b border-border/60 flex items-center gap-1.5">
            <Search className="w-2.5 h-2.5 text-muted-foreground" strokeWidth={2} />
            <span className="text-[8px] font-mono text-muted-foreground">What does section 3.2 conclude?</span>
          </div>
          <div className="flex-1 px-2.5 py-2 space-y-1.5 overflow-hidden">
            <div className="space-y-0.5">
              <div className="h-1 w-full bg-foreground/40 rounded-full" />
              <div className="h-1 w-[85%] bg-foreground/30 rounded-full" />
              <div className="h-1 w-[70%] bg-foreground/25 rounded-full" />
            </div>
            <div className="flex flex-wrap gap-1 pt-1">
              <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">p.12</span>
              <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">p.18</span>
              <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">p.24</span>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function DashboardPreview() {
  const bars = [40, 65, 30, 80, 55, 70, 45, 90, 60, 75, 50, 85];
  return (
    <Frame url="devdash.app/overview">
      <div className="h-full flex flex-col bg-gradient-to-b from-background to-muted/10">
        <div className="px-3 py-1.5 border-b border-border/60 flex items-center gap-2">
          <GitBranch className="w-3 h-3 text-emerald-400" strokeWidth={2} />
          <span className="text-[9px] font-medium text-foreground">Overview</span>
          <span className="ml-auto text-[8px] font-mono text-muted-foreground">last 30d</span>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-1.5 px-2 py-1.5 border-b border-border/40">
          {[
            { label: "commits", value: "248" },
            { label: "PRs", value: "32" },
            { label: "stars", value: "1.2k" },
          ].map((s) => (
            <div key={s.label} className="px-1.5 py-1 rounded-md bg-card border border-border/60">
              <div className="text-[8px] font-mono text-muted-foreground">{s.label}</div>
              <div className="text-[11px] font-semibold text-foreground leading-none mt-0.5">{s.value}</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="flex-1 px-2.5 py-2 flex flex-col">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="w-2.5 h-2.5 text-emerald-400" strokeWidth={2} />
            <span className="text-[8px] font-mono text-muted-foreground">activity</span>
          </div>
          <div className="flex-1 flex items-end gap-1">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/70 to-emerald-400/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}