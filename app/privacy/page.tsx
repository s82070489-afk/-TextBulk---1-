import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { APP_NAME, APP_NAME_EN } from "@/lib/brand";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "텍스트벌크(TextBulk)의 개인정보처리방침. 사용자의 이미지와 텍스트 데이터를 서버로 전송하거나 저장하지 않으며, 모든 처리는 브라우저 내에서만 이루어집니다.",
  alternates: {
    canonical: "/privacy",
  },
};

const articles = [
  {
    id: 1,
    title: "핵심 원칙 — 클라이언트 사이드 전용 처리",
    summary:
      "본 사이트는 사용자의 이미지와 텍스트 데이터를 서버로 전송하거나 저장하지 않습니다.",
    content: [
      "이미지 텍스트 합성은 HTML5 Canvas API, FileReader API, Blob API 등 브라우저 표준 기술을 활용하여 사용자의 컴퓨터(클라이언트)에서만 수행됩니다.",
      "업로드한 배경 이미지, 입력한 텍스트 목록, 생성된 결과 이미지는 모두 브라우저 메모리에만 일시적으로 존재하며, 본 사이트의 서버 또는 제3자 서버로 전송되지 않습니다.",
      "브라우저 탭을 닫거나 페이지를 새로고침하면 메모리에 저장된 모든 데이터는 자동으로 삭제됩니다.",
    ],
  },
  {
    id: 2,
    title: "수집 항목",
    summary: "이미지·텍스트·회원가입·이메일 등 사용자 콘텐츠 데이터는 수집하지 않습니다.",
    items: [
      { label: "이미지 및 텍스트", value: "수집하지 않음" },
      { label: "회원가입 및 이메일", value: "수집하지 않음" },
      { label: "IP 주소", value: "서버 로그를 통해 자동 수집될 수 있음 (비식별)" },
      { label: "브라우저 유형 및 버전", value: "분석 도구를 통해 자동 수집될 수 있음 (비식별)" },
      { label: "접속 일시", value: "서버 로그를 통해 자동 수집될 수 있음 (비식별)" },
    ],
  },
  {
    id: 3,
    title: "처리 목적",
    items: [
      "웹사이트 서비스의 안정적 운영",
      "방문자 통계 분석 및 서비스 품질 개선",
      "부정 이용 방지 및 보안 유지",
    ],
  },
  {
    id: 4,
    title: "쿠키 사용",
    content: [
      "본 사이트는 서비스 제공 및 방문자 분석을 위해 쿠키를 사용할 수 있습니다. 쿠키는 웹사이트가 이용자의 브라우저에 저장하는 소량의 텍스트 파일입니다.",
    ],
    items: [
      "필수 쿠키: 웹사이트 기본 기능 작동에 필요한 쿠키",
      "분석 쿠키: 방문자 통계 분석 도구가 사용하는 쿠키 (도입 시 적용)",
    ],
    note: "이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다. 다만, 일부 서비스 이용에 제한이 있을 수 있습니다.",
  },
  {
    id: 5,
    title: "보유 및 파기",
    content: [
      "이용자의 이미지, 텍스트 등 콘텐츠 데이터는 서버에 저장되지 않으므로 별도의 보유·파기 절차가 적용되지 않습니다.",
      "자동 수집되는 비식별 접속 로그는 통계 분석 목적으로 최대 12개월간 보관 후 파기합니다.",
    ],
  },
  {
    id: 6,
    title: "제3자 제공",
    content: [
      "본 사이트는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.",
    ],
    items: [
      "이용자가 사전에 동의한 경우",
      "법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우",
    ],
  },
  {
    id: 7,
    title: "안전성 확보 조치",
    items: [
      "클라이언트 사이드 전용 아키텍처로 사용자 콘텐츠 데이터의 서버 전송 원천 차단",
      "HTTPS(SSL/TLS) 암호화 통신 적용",
      "보안 HTTP 헤더 설정 (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)",
      "정기적인 보안 점검 및 취약점 대응",
    ],
  },
  {
    id: 8,
    title: "문의",
    contact: {
      service: `${APP_NAME} (${APP_NAME_EN})`,
      email: "privacy@textbulk.app",
    },
  },
];

export default function PrivacyPage() {
  const lastUpdated = "2026년 6월 5일";

  return (
    <ArticleLayout>
      <article>
        <header className="mb-16 rounded-2xl border border-accent-100 bg-hero-glow px-6 py-8 sm:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent-700">
            Privacy · {APP_NAME_EN}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[2rem]">
            개인정보처리방침
          </h1>
          <p className="mt-6 text-sm tracking-wide text-zinc-500">
            최종 수정일: {lastUpdated}
          </p>
          <p className="mt-5 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
            {APP_NAME}(이하 &quot;본 사이트&quot;)은
            「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의
            개인정보를 보호하기 위해 다음과 같이 개인정보처리방침을
            수립·공개합니다.
          </p>
        </header>

        <div className="space-y-14">
          {articles.map((article) => (
            <section key={article.id} id={`article-${article.id}`}>
              <div className="flex items-baseline gap-3 border-b border-zinc-200/80 pb-4">
                <span className="text-[11px] font-medium tracking-[0.12em] text-zinc-400">
                  제{article.id}조
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {article.title}
                </h2>
              </div>

              {"summary" in article && article.summary && (
                <p className="mt-5 text-[15px] font-medium leading-[1.85] tracking-wide text-zinc-800">
                  {article.summary}
                </p>
              )}

              {"content" in article &&
                article.content?.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-5 text-[15px] leading-[1.85] tracking-wide text-zinc-600"
                  >
                    {paragraph}
                  </p>
                ))}

              {"items" in article && article.items && (
                <>
                  {typeof article.items[0] === "string" ? (
                    <ul className="mt-4 space-y-2">
                      {(article.items as string[]).map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-[15px] leading-[1.85] tracking-wide text-zinc-600"
                        >
                          <span className="text-zinc-400">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-5 overflow-hidden rounded-lg border border-zinc-200/80">
                      <table className="w-full text-left text-[14px]">
                        <thead>
                          <tr className="border-b border-zinc-200/80 bg-zinc-50">
                            <th className="px-4 py-3 font-medium tracking-wide text-zinc-600">
                              항목
                            </th>
                            <th className="px-4 py-3 font-medium tracking-wide text-zinc-600">
                              처리 방침
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                          {(
                            article.items as { label: string; value: string }[]
                          ).map((row) => (
                            <tr key={row.label}>
                              <td className="px-4 py-3 font-medium text-zinc-800">
                                {row.label}
                              </td>
                              <td className="px-4 py-3 tracking-wide text-zinc-600">
                                {row.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}

              {"note" in article && article.note && (
                <p className="mt-5 text-[14px] leading-[1.85] tracking-wide text-zinc-500">
                  {article.note}
                </p>
              )}

              {"contact" in article && article.contact && (
                <div className="mt-5 overflow-hidden rounded-lg border border-zinc-200/80">
                  <table className="w-full text-left text-[14px]">
                    <tbody className="divide-y divide-zinc-100">
                      <tr>
                        <th className="w-28 bg-zinc-50 px-4 py-3 font-medium tracking-wide text-zinc-600">
                          서비스명
                        </th>
                        <td className="px-4 py-3 text-zinc-800">
                          {article.contact.service}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-zinc-50 px-4 py-3 font-medium tracking-wide text-zinc-600">
                          이메일
                        </th>
                        <td className="px-4 py-3">
                          <a
                            href={`mailto:${article.contact.email}`}
                            className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500"
                          >
                            {article.contact.email}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>
      </article>
    </ArticleLayout>
  );
}
