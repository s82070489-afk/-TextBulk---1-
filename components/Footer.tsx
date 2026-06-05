import Link from "next/link";
import { APP_NAME, APP_NAME_EN, APP_TAGLINE } from "@/lib/brand";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold tracking-tight text-zinc-900">
                {APP_NAME}
              </span>
              <span className="text-[10px] font-medium tracking-widest text-accent-600">
                {APP_NAME_EN}
              </span>
            </div>
            <p className="mt-3 text-[13px] leading-[1.85] tracking-wide text-zinc-500">
              {APP_TAGLINE} 모든 이미지 처리는 브라우저 내에서만
              이루어집니다.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400">
              바로가기
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/", label: "합성 툴" },
                { href: "/about", label: "서비스 소개" },
                { href: "/features", label: "활용 가이드" },
                { href: "/privacy", label: "개인정보처리방침" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] tracking-wide text-zinc-500 hover:text-accent-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-zinc-200/80 pt-8 text-center text-xs tracking-wide text-zinc-400">
          &copy; {currentYear} {APP_NAME} ({APP_NAME_EN})
        </p>
      </div>
    </footer>
  );
}
