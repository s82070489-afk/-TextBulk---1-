import type { Metadata } from "next";
import ImageTextComposer from "@/components/ImageTextComposer";
import { APP_NAME, APP_NAME_EN, APP_TAGLINE } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${APP_NAME} (${APP_NAME_EN}) | 무료 브라우저 기반 이미지 제작`,
  description:
    "배경 이미지 위에 텍스트를 대량으로 합성하는 무료 온라인 도구. 드래그 앤 드롭으로 이미지를 업로드하고, 텍스트 목록을 입력하면 브라우저에서 즉시 수십 장의 이미지를 생성합니다.",
  alternates: {
    canonical: "/",
  },
};

const featurePills = [
  "서버 업로드 없음",
  "ZIP 일괄 다운로드",
  "Canvas 기반 합성",
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="page-surface page-surface--wide">
        <article>
          <header className="relative mb-12 overflow-hidden rounded-2xl border border-accent-100 bg-hero-glow px-6 py-8 sm:px-8 sm:py-10">
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge">브라우저 전용 · 무료</span>
                {featurePills.map((pill) => (
                  <span key={pill} className="feature-pill">
                    <span className="feature-pill-dot" />
                    {pill}
                  </span>
                ))}
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-[2.1rem]">
                {APP_NAME}
                <span className="ml-2 text-lg font-medium text-accent-700 sm:text-xl">
                  {APP_NAME_EN}
                </span>
              </h1>
              <p className="mt-3 text-[17px] font-medium leading-snug tracking-wide text-accent-800">
                {APP_TAGLINE}
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] tracking-wide text-zinc-600">
                하나의 배경 이미지에 다양한 텍스트를 입혀 수십, 수백 장의 마케팅
                이미지를 한 번에 제작하세요. 포토샵이나 일러스트레이터 없이도
                브라우저만으로 인스타그램 카드뉴스, 블로그 썸네일, 프로모션 배너를
                대량 생산할 수 있습니다. 모든 처리는 사용자의 컴퓨터에서만 이루어지며,
                이미지와 텍스트가 서버로 전송되지 않습니다.
              </p>
            </div>
          </header>

          <ImageTextComposer />

          <section className="prose-content mt-16 space-y-6">
            <h2>왜 대량 이미지 텍스트 합성이 필요한가?</h2>
            <p>
              디지털 마케팅과 콘텐츠 제작 환경이 빠르게 변화하면서, 크리에이터와
              마케터에게 가장 큰 병목은 &apos;아이디어&apos;가 아니라
              &apos;실행 속도&apos;가 되었습니다. 인스타그램 피드, 블로그 글, 이메일
              뉴스레터, 유튜브 썸네일, 쇼핑몰 상세 페이지까지 — 각 채널마다
              최적화된 비주얼 콘텐츠가 필요하지만, 매번 디자인 툴을 열어 하나씩
              제작하는 것은 비효율적입니다. 특히 시즌 세일, 이벤트 프로모션, 시리즈
              콘텐츠처럼 동일한 디자인 틀에 텍스트만 바꿔야 하는 경우, 반복
              작업에 소요되는 시간은 상상 이상입니다.
            </p>
            <p>
              대량 이미지 텍스트 합성 툴은 이러한 반복 작업을 자동화합니다. 배경
              이미지 하나와 텍스트 목록만 준비하면, HTML5 Canvas API를 활용하여
              브라우저 메모리 상에서 각 텍스트가 입혀진 이미지를 즉시 생성합니다.
              서버 업로드가 필요 없기 때문에 개인정보 걱정 없이 기업 내부 자료,
              미공개 제품 이미지, 고객 정보가 포함된 프로모션 배너까지 안전하게
              처리할 수 있습니다. 생성된 이미지는 ZIP 파일로 일괄 다운로드하거나
              개별적으로 저장할 수 있어, 바로 SNS 업로드나 광고 캠페인에 활용할 수
              있습니다.
            </p>

            <h2>이렇게 활용해 보세요</h2>
            <ul>
              <li>
                <strong>인스타그램 카드뉴스:</strong> 동일한 배경에 10장 분량의
                카드뉴스 텍스트를 입력하면 한 번에 전체 시리즈를 완성할 수
                있습니다.
              </li>
              <li>
                <strong>블로그 썸네일:</strong> 시리즈 글의 제목 목록을 입력하여
                통일된 디자인의 썸네일을 대량 생성하세요.
              </li>
              <li>
                <strong>이커머스 프로모션:</strong> 시즌별, 카테고리별 할인 문구를
                일괄 적용한 배너 이미지를 빠르게 제작합니다.
              </li>
              <li>
                <strong>SNS 인용구 이미지:</strong> 명언, 팁, 하이라이트 문구
                목록을 입력하여 감성적인 인용 이미지를 대량 제작합니다.
              </li>
              <li>
                <strong>교육 자료:</strong> 강의 슬라이드, 학습 카드, 퀴즈 이미지를
                텍스트 목록 기반으로 효율적으로 생성합니다.
              </li>
            </ul>

            <h2>안전하고 프라이버시를 보장하는 처리 방식</h2>
            <p>
              많은 온라인 이미지 편집 도구는 사용자의 파일을 서버로 업로드하여
              처리합니다. 이는 처리 속도가 빠를 수 있지만, 민감한 이미지나
              미공개 콘텐츠를 다루는 경우 보안 우려가 따릅니다. 본 도구는
              클라이언트 사이드(Client-side) 아키텍처를 채택하여, 이미지 로드부터
              텍스트 합성, 파일 다운로드까지 모든 과정이 사용자의 웹 브라우저
              내에서만 수행됩니다. 네트워크를 통해 이미지 데이터가 외부 서버로
              전송되는 일은 절대 없으며, 브라우저를 닫으면 메모리에 있던 모든
              데이터는 자동으로 해제됩니다.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
