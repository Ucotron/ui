import { cn } from "./lib/utils";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Network,
  Search,
  Plug,
  Folder,
  Blocks,
  ClipboardList,
  Settings,
  Shield,
  History,
  Lock,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function Shell({ children, className }: ShellProps) {
  return (
    <div className={cn("flex min-h-screen", className)}>
      {children}
    </div>
  );
}

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const mainNav = [
    { href: "/", label: "Overview", icon: LayoutDashboard },
    { href: "/graph", label: "Graph", icon: Network },
    { href: "/search", label: "Search & Augment", icon: Search },
    { href: "/connectors", label: "Connectors", icon: Plug },
    { href: "/namespaces", label: "Namespaces", icon: Folder },
  ];

  const proNav = [
    { href: "/frames", label: "Ucotron Frames", icon: Blocks },
    { href: "/audit", label: "Audit Logs", icon: ClipboardList },
  ];

  const platinumNav = [
    { href: "/compliance", label: "Compliance", icon: Shield },
    { href: "/reverse-rag", label: "Reverse RAG", icon: History },
    { href: "/privacy-vault", label: "Privacy Vault", icon: Lock },
    { href: "/time-travel", label: "Time Travel", icon: Clock },
    { href: "/logic-guards", label: "Logic Guards", icon: ShieldCheck },
  ];

  const NavGroup = ({
    title,
    items,
  }: {
    title: string;
    items: { href: string; label: string; icon: React.ElementType }[];
  }) => (
    <div className="mb-4">
      <h3 className="mb-2 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
              {isActive && <ChevronRight className="ml-auto h-3 w-3" />}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <aside
      className={cn(
        "flex w-64 flex-col border-r bg-background/50 backdrop-blur-xl",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
          <span>Ucotron</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <NavGroup title="Main" items={mainNav} />
        <NavGroup title="Pro" items={proNav} />
        <NavGroup title="Platinum" items={platinumNav} />
      </div>
      <div className="border-t p-3">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between border-b bg-background/50 px-4 backdrop-blur-xl",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-medium">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">{children}</div>
    </header>
  );
}

interface NamespaceSelectorProps {
  currentNamespace: string;
  namespaces: string[];
  onChange: (namespace: string) => void;
  className?: string;
}

export function NamespaceSelector({
  currentNamespace,
  namespaces,
  onChange,
  className,
}: NamespaceSelectorProps) {
  return (
    <select
      value={currentNamespace}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "rounded-md border border-input bg-background px-3 py-1.5 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className
      )}
    >
      {namespaces.map((ns) => (
        <option key={ns} value={ns}>
          {ns}
        </option>
      ))}
    </select>
  );
}

interface ProModeToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  className?: string;
}

export function ProModeToggle({
  enabled,
  onChange,
  className,
}: ProModeToggleProps) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-all",
        enabled
          ? "bg-amber-500/20 text-amber-500 border border-amber-500/50"
          : "bg-muted text-muted-foreground hover:bg-accent",
        className
      )}
    >
      <Sparkles className="h-4 w-4" />
      <span>{enabled ? "Pro Mode" : "Pro"}</span>
    </button>
  );
}
