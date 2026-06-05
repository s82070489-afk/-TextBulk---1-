import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { APP_NAME, APP_NAME_EN } from "@/lib/brand";

export const metadata: Metadata = {
  title: "서비스 소개",
  description:
    "텍스트벌크(TextBulk)의 개발 배경과 비전. 마케터와 1인 크리에이터의 콘텐츠 생산성을 극대화하는 브라우저 기반 무료 이미지 제작 도구를 소개합니다.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <ArticleLayout>
      <article>
        <header className="mb-16 rounded-2xl border border-accent-100 bg-hero-glow px-6 py-8 sm:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent-700">
            About · {APP_NAME_EN}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[2rem]">
            {APP_NAME} 소개
          </h1>
          <p className="mt-6 text-[17px] leading-[1.85] tracking-wide text-zinc-600">
            콘텐츠 제작의 속도와 품질, 두 마리 토끼를 잡기 위한 무료 도구
          </p>
        </header>

        <div className="article-body space-y-16">
          <section>
            <h2 className="article-heading">이 도구가 탄생한 이유</h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                디지털 콘텐츠 시장이 성장하면서 1인 크리에이터와 소규모
                마케터의 비주얼 콘텐츠 수요가 폭발적으로 늘어나고 있습니다.
                인스타그램, 블로그, 뉴스레터, 쇼핑몰 등 여러 채널을 동시에
                운영하려면 끊임없는 이미지 제작이 필요하지만, 현실적인
                장벽도 분명합니다.
              </p>
              <p>
                Adobe Creative Cloud와 같은 전문 디자인 툴의 월 구독료는
                부담스럽고, Canva에서도 동일한 템플릿에 텍스트만 바꾸는
                반복 작업은 여전히 시간이 많이 듭니다. 포토샵 일괄 처리나
                자동화 스크립트는 진입 장벽이 높아, 코딩에 익숙하지 않은
                마케터에게는 쉽게 다가가기 어렵습니다.
              </p>
              <p>
                이 문제를 해결하기 위해 본 툴을 시작했습니다. 하나의 배경
                이미지와 텍스트 목록만 있으면 클릭 한 번으로 수십 장의
                이미지를 만들 수 있어야 한다는 단순한 목표를 세웠고, 서버
                비용 없이 브라우저 내 HTML5 Canvas API만으로 모든 처리를
                완료하는 구조를 선택했습니다. 이를 통해 누구에게나 무료로
                제공할 수 있는 지속 가능한 서비스 모델을 구축했습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="article-heading">마케터를 위한 생산성 혁신</h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                A/B 테스트 배너, 시즌별 프로모션 이미지, 리타겟팅 캠페인용
                크리에이티브 변형 — 마케팅 현장의 많은 작업은 동일한 디자인
                틀 안에서 텍스트와 CTA만 바꾸는 반복 패턴을 따릅니다.
                기존 워크플로우에서는 시안 요청, 피드백, 리사이징만으로도
                캠페인 일정의 상당 부분이 소모됩니다.
              </p>
              <p>
                본 툴을 사용하면 배경 이미지를 업로드하고 테스트할 문구
                목록을 입력하는 것만으로 수 초 내에 모든 변형 이미지를
                생성할 수 있습니다. ZIP으로 다운로드한 뒤 광고 플랫폼에
                바로 업로드하면 되므로, 캠페인 실행 속도를 10배 이상
                향상시킬 수 있습니다.
              </p>
              <p>
                외부 서버로 데이터를 전송하지 않기 때문에, 금융·의료·법률
                등 민감한 정보를 다루는 마케터도 미공개 제품 이미지나
                내부 프로모션 자료를 안심하고 처리할 수 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="article-heading">
              1인 크리에이터의 콘텐츠 파이프라인
            </h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                1인 크리에이터에게 가장 큰 도전은 꾸준한 발행입니다.
                인스타그램 카드뉴스, 블로그 시리즈, Pinterest 핀처럼
                텍스트 중심 비주얼 콘텐츠를 반복 제작할 때, 디자인 작업이
                창작과 소통을 가로막는 경우가 많습니다.
              </p>
              <p>
                본 툴은 그 반복 작업을 자동화합니다. 카드뉴스 각 장의
                핵심 메시지, 블로그 시리즈 제목, 인용구 목록을 입력란에
                붙여넣기만 하면, 브랜드 톤에 맞는 배경 이미지 하나로
                전체 시리즈의 비주얼 에셋을 몇 분 만에 완성할 수 있습니다.
                절약된 시간은 콘텐츠 기획, 오디언스 소통, 수익화 전략에
                투자할 수 있습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="article-heading">
              기술 철학 — 프라이버시 우선, 서버리스 아키텍처
            </h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                사용자의 데이터는 사용자의 기기에만 존재해야 한다는
                원칙을 기술 설계의 핵심으로 삼았습니다. Canvas API,
                FileReader API, Blob API 등 브라우저 표준 기술만을
                사용하여 이미지 로드, 텍스트 렌더링, 파일 생성, ZIP
                압축까지 전 과정을 클라이언트에서 처리합니다.
              </p>
              <p>
                로컬 메모리에서 즉시 처리되므로 네트워크 지연 없이
                빠르게 동작하며, 브라우저 탭을 닫으면 모든 임시 데이터가
                자동으로 소멸됩니다. 서버 운영 비용은 최소화하면서
                사용자에게 완전한 데이터 통제권을 제공합니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="article-heading">앞으로의 비전</h2>
            <div className="mt-6 space-y-6 text-[15px] leading-[1.85] tracking-wide text-zinc-600">
              <p>
                폰트 확장, 텍스트 효과 프리셋, 소셜 미디어 플랫폼별 최적
                해상도 지원 등 사용자 피드백을 반영한 기능 업데이트를
                계획하고 있습니다. 단순한 유틸리티를 넘어, 1인 크리에이터와
                소규모 팀이 대기업 수준의 콘텐츠 생산 속도를 달성할 수
                있도록 돕는 생산성 플랫폼으로 성장하는 것이 목표입니다.
              </p>
            </div>
          </section>
        </div>
      </article>
    </ArticleLayout>
  );
}
