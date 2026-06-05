"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "합성 툴" },
  { href: "/about", label: "소개" },
  { href: "/features", label: "활용 가이드" },
  { href: "/privacy", label: "개인정보처리방침" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="주요 메뉴">
      <ul className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-lg px-3 py-2 text-[13px] font-medium tracking-wide transition ${
                  isActive
                    ? "bg-white text-accent-800 shadow-card"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
