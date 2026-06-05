import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Callout from "@/components/Callout";
import { APP_NAME, APP_NAME_EN } from "@/lib/brand";

export const metadata: Metadata = {
  title: "기능 및 활용 가이드",
  description:
    "텍스트벌크(TextBulk)의 기능 소개와 실전 활용 팁. 인스타그램 카드뉴스, 블로그 썸네일, 마케팅 배너 대량 제작 가이드를 제공합니다.",
  alternates: {
    canonical: "/features",
  },
};

const coreFeatures = [
  {
    title: "드래그 앤 드롭 이미지 업로드",
    description:
      "PNG, JPG, WEBP 등 주요 형식을 지원합니다. 파일을 드래그하거나 클릭하여 선택하면 즉시 미리보기가 표시됩니다.",
  },
  {
    title: "텍스트 목록 일괄 입력",
    description:
      "한 줄에 하나씩 문구를 입력합니다. 엑셀이나 노션에서 텍스트 목록을 복사해 붙여넣으면 각 줄이 개별 이미지로 생성됩니다.",
  },
  {
    title: "HTML5 Canvas 기반 합성",
    description:
      "글자 크기, 색상, 정렬, 세로 위치, 그림자 효과를 조절할 수 있으며 긴 텍스트는 자동 줄바꿈됩니다.",
  },
  {
    title: "ZIP 일괄 다운로드",
    description:
      "생성된 이미지를 ZIP 파일로 한 번에 받거나, 개별·순차 다운로드할 수 있습니다. 파일명은 텍스트 내용을 기반으로 자동 생성됩니다.",
  },
];

const advancedTips = [
  "한 줄에 15~25자 내외로 작성하면 이미지마다 균형 잡힌 레이아웃이 유지됩니다.",
  "텍스트 가장자리 선명도가 중요하면 PNG, 용량 절감이 필요하면 JPEG를 선택하세요.",
  "배경 이미지는 최종 출력 해상도와 동일하거나 더 큰 크기를 사용하면 품질 저하를 방지할 수 있습니다.",
  "밝은 배경에는 그림자 효과를 켜고, 어두운 배경에서는 끄는 것이 가독성에 유리합니다.",
  "엑셀에서 마케팅 문구 열 전체를 복사해 붙여넣으면 즉시 대량 생성이 가능합니다.",
];

export default function FeaturesPage() {
  return (
    <ArticleLayout>
      <article>
        <header className="mb-16 rounded-2xl border border-accent-100 bg-hero-glow px-6 py-8 sm:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent-700">
            Guide · {APP_NAME_EN}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[2rem]">
            기능 및 활용 가이드
          </h1>
          <p className="mt-6 text-[17px] leading-[1.85] tracking-wide text-zinc-600">
            {APP_NAME}을 200% 활용하는 전문가 팁
          </p>
        </header>

        <div className="article-body space-y-16">
          <section>
            <h2 className="article-heading">핵심 기능</h2>
            <ul className="mt-6 divide-y divide-zinc-200/80 border-y border-zinc-200/80">
              {coreFeatures.map((feature) => (
                <li key={feature.title} className="py-6">
                  <h3 className="text-[15px] font-semibold tracking-tight text-zinc-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="article-heading">
              인스타그램 카드뉴스 제작 완벽 가이드
            </h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                카드뉴스는 정보 전달력과 저장률이 높아 브랜드 마케팅에
                필수적인 형식입니다. Canva나 포토샵에서 10장을 하나씩
                제작하면 2~3시간이 걸리지만, 본 툴을 사용하면 10분
                이내로 단축할 수 있습니다.
              </p>
            </div>

            <Callout title="배경 이미지 권장 사양" variant="tip">
              <p>
                1080×1080px(정사각형) 또는 1080×1350px(세로형) 해상도를
                권장합니다. 브랜드 컬러의 단색 배경이나 심플한 이미지를
                사용하면 텍스트 가독성이 높아집니다.
              </p>
            </Callout>

            <Callout title="텍스트 입력 예시" variant="example">
              <pre className="overflow-x-auto whitespace-pre font-sans text-[14px] leading-relaxed text-zinc-800">
{`[표지] 2024 마케팅 트렌드 TOP 5
[1] ① 숏폼 비디오의 압도적 성장
[2] ② AI 기반 콘텐츠 개인화
[3] ③ 커뮤니티 커머스의 부상
[4] ④ 지속가능성 마케팅
[5] ⑤ 마이크로 인플루언서 전략
[CTA] 저장하고 나중에 다시 보세요!`}
              </pre>
              <p className="mt-3 text-zinc-600">
                각 줄이 하나의 카드가 됩니다. 위 예시를 입력하면 7장의
                카드뉴스가 한 번에 완성됩니다.
              </p>
            </Callout>

            <Callout title="스타일 권장 설정">
              <ul className="list-inside list-disc space-y-1.5 text-zinc-700">
                <li>글자 크기: 48~64px (표지는 72px 이상)</li>
                <li>텍스트 색상: 흰색 또는 밝은 색상</li>
                <li>그림자 효과: 활성화 권장</li>
                <li>정렬: 가운데 / CTA 카드는 하단 위치</li>
              </ul>
            </Callout>
          </section>

          <section>
            <h2 className="article-heading">블로그 썸네일 양산법</h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                시리즈 콘텐츠나 정기 발행 블로그에서 썸네일은 클릭률에
                직접적인 영향을 미칩니다. 통일된 디자인 시스템을 적용한
                썸네일을 대량 생성하면 브랜드 일관성과 작업 효율을
                동시에 확보할 수 있습니다.
              </p>
            </div>

            <Callout title="배경 이미지 전략" variant="tip">
              <p>
                브랜드 대표 색상의 단색 배경이나 카테고리별 그라데이션을
                사용하세요. 권장 해상도는 1200×630px(OG 이미지 규격)입니다.
              </p>
            </Callout>

            <Callout title="워크플로우">
              <ol className="list-inside list-decimal space-y-2 text-zinc-700">
                <li>발행 예정 글 제목 목록을 미리 작성합니다.</li>
                <li>제목 목록을 텍스트 입력란에 한 번에 붙여넣습니다.</li>
                <li>대량 생성 후 ZIP으로 다운로드합니다.</li>
                <li>각 블로그 글의 대표 이미지로 설정합니다.</li>
              </ol>
              <p className="mt-3 text-zinc-600">
                30개의 제목이 있다면 1분 안에 30개의 통일된 썸네일을
                완성할 수 있습니다.
              </p>
            </Callout>
          </section>

          <section>
            <h2 className="article-heading">마케팅 배너 A/B 테스트 활용법</h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                효과적인 디지털 광고는 크리에이티브 변형의 A/B 테스트에서
                시작됩니다. 동일한 배경에 다른 헤드라인과 CTA를 적용한
                배너를 빠르게 생성하고, 성과 데이터로 최적 문구를
                선별하세요.
              </p>
            </div>

            <Callout title="A/B 테스트 문구 예시" variant="example">
              <ul className="space-y-1.5 text-zinc-800">
                <li>지금 50% 할인</li>
                <li>오늘만 무료 배송</li>
                <li>한정 수량 마감 임박</li>
                <li>신규 가입 시 10,000원 쿠폰</li>
                <li>베스트셀러 1위 제품</li>
              </ul>
              <p className="mt-3 text-zinc-600">
                위 다섯 가지 문구를 입력하면 다섯 가지 배너 변형이 즉시
                생성됩니다.
              </p>
            </Callout>
          </section>

          <section>
            <h2 className="article-heading">고급 활용 팁</h2>
            <ul className="mt-6 space-y-4">
              {advancedTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[15px] leading-[1.85] tracking-wide text-zinc-600"
                >
                  <span className="mt-0.5 shrink-0 text-xs font-medium text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </ArticleLayout>
  );
}
