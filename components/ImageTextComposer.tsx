"use client";

import { useCallback, useRef, useState } from "react";
import {
  composeImagesFromTexts,
  defaultComposeOptions,
  type ComposedImage,
  type ComposeOptions,
} from "@/lib/canvas";
import { downloadAllSequentially, downloadAsZip, downloadSingleImage } from "@/lib/download";

export default function ImageTextComposer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);
  const [backgroundPreview, setBackgroundPreview] = useState<string | null>(null);
  const [textList, setTextList] = useState("");
  const [composedImages, setComposedImages] = useState<ComposedImage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [options, setOptions] = useState<ComposeOptions>(defaultComposeOptions);

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("이미지 파일만 업로드할 수 있습니다. (PNG, JPG, WEBP 등)");
      return;
    }

    setError(null);
    setBackgroundFile(file);
    setComposedImages([]);

    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileSelect(file);
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleGenerate = async () => {
    if (!backgroundFile) {
      setError("배경 이미지를 먼저 업로드해 주세요.");
      return;
    }

    const texts = textList
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (texts.length === 0) {
      setError("합성할 텍스트를 한 줄 이상 입력해 주세요.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const results = await composeImagesFromTexts(backgroundFile, texts, options);
      setComposedImages(results);

      if (results.length === 0) {
        setError("생성된 이미지가 없습니다. 텍스트 입력을 확인해 주세요.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "이미지 생성 중 오류가 발생했습니다."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadZip = async () => {
    if (composedImages.length === 0) return;
    await downloadAsZip(composedImages);
  };

  const handleDownloadAll = async () => {
    if (composedImages.length === 0) return;
    await downloadAllSequentially(composedImages);
  };

  const textCount = textList
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0).length;

  return (
    <div className="space-y-8">
      <section aria-labelledby="upload-heading" className="card">
        <div className="flex items-center gap-3">
          <span className="card-step">01</span>
          <h2 id="upload-heading" className="text-xl font-semibold tracking-tight text-zinc-900">
            배경 이미지 업로드
          </h2>
        </div>
        <p className="mt-2 text-sm text-zinc-600">
          합성에 사용할 배경 이미지를 드래그 앤 드롭하거나 클릭하여 선택하세요.
          이미지는 브라우저 내에서만 처리되며 서버로 전송되지 않습니다.
        </p>

        <div
          className={`mt-4 flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition ${
            isDragging
              ? "border-accent-400 bg-accent-50"
              : "border-zinc-300 bg-zinc-50/80 hover:border-accent-300 hover:bg-accent-50/40"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              fileInputRef.current?.click();
            }
          }}
          aria-label="배경 이미지 업로드 영역"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileSelect(file);
            }}
          />

          {backgroundPreview ? (
            <div className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={backgroundPreview}
                alt="업로드된 배경 이미지 미리보기"
                className="mx-auto max-h-40 rounded-lg object-contain shadow-sm"
              />
              <p className="mt-3 text-sm font-medium text-zinc-800">
                {backgroundFile?.name}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                클릭하여 다른 이미지로 변경
              </p>
            </div>
          ) : (
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-3 text-sm font-medium text-zinc-700">
                이미지를 여기에 드래그 앤 드롭
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                또는 클릭하여 파일 선택 (PNG, JPG, WEBP)
              </p>
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="text-heading" className="card">
        <div className="flex items-center gap-3">
          <span className="card-step">02</span>
          <h2 id="text-heading" className="text-xl font-semibold tracking-tight text-zinc-900">
            텍스트 목록 입력
          </h2>
        </div>
        <p className="mt-2 text-sm text-zinc-600">
          합성할 텍스트를 한 줄에 하나씩 입력하세요. 각 줄이 개별 이미지로
          생성됩니다. 현재{" "}
          <strong className="text-zinc-900">{textCount}개</strong>의 텍스트가
          입력되었습니다.
        </p>

        <textarea
          value={textList}
          onChange={(e) => setTextList(e.target.value)}
          placeholder={`예시:\n봄맞이 특가 세일 50% OFF\n여름 휴가 필수템 추천\n가을 신상 컬렉션 출시\n겨울 따뜻한 니트 모음`}
          rows={8}
          className="mt-4 w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm tracking-wide text-zinc-800 transition focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100"
          aria-label="합성할 텍스트 목록"
        />
      </section>

      <section aria-labelledby="options-heading" className="card">
        <div className="flex items-center gap-3">
          <span className="card-step">03</span>
          <h2 id="options-heading" className="text-xl font-semibold tracking-tight text-zinc-900">
            텍스트 스타일 설정
          </h2>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <label className="block">
            <span className="text-sm font-medium text-zinc-700">글자 크기</span>
            <input
              type="number"
              min={12}
              max={200}
              value={options.fontSize}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  fontSize: Number(e.target.value),
                }))
              }
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">글자 색상</span>
            <input
              type="color"
              value={options.textColor}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  textColor: e.target.value,
                }))
              }
              className="mt-1 h-10 w-full cursor-pointer rounded-lg border border-zinc-300"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">정렬</span>
            <select
              value={options.textAlign}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  textAlign: e.target.value as CanvasTextAlign,
                }))
              }
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            >
              <option value="center">가운데</option>
              <option value="left">왼쪽</option>
              <option value="right">오른쪽</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">세로 위치</span>
            <select
              value={options.verticalPosition}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  verticalPosition: e.target.value as ComposeOptions["verticalPosition"],
                }))
              }
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            >
              <option value="center">가운데</option>
              <option value="top">상단</option>
              <option value="bottom">하단</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">출력 형식</span>
            <select
              value={options.outputFormat}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  outputFormat: e.target.value as ComposeOptions["outputFormat"],
                }))
              }
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
            >
              <option value="image/png">PNG (고품질)</option>
              <option value="image/jpeg">JPEG (용량 절약)</option>
            </select>
          </label>

          <label className="flex items-center gap-2 pt-6">
            <input
              type="checkbox"
              checked={options.shadowEnabled}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  shadowEnabled: e.target.checked,
                }))
              }
              className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-400"
            />
            <span className="text-sm font-medium text-zinc-700">
              텍스트 그림자 효과
            </span>
          </label>
        </div>
      </section>

      {error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isProcessing}
          className="btn-primary"
        >
          {isProcessing ? (
            <>
              <svg
                className="mr-2 h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              생성 중...
            </>
          ) : (
            `대량 생성 (${textCount}장)`
          )}
        </button>
      </div>

      {composedImages.length > 0 && (
        <section aria-labelledby="results-heading" className="card">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 id="results-heading" className="text-xl font-semibold tracking-tight text-zinc-900">
                생성 결과
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                총 {composedImages.length}장의 이미지가 생성되었습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleDownloadZip}
                className="btn-primary"
              >
                ZIP 일괄 다운로드
              </button>
              <button
                type="button"
                onClick={handleDownloadAll}
                className="btn-secondary"
              >
                순차 다운로드
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {composedImages.map((image) => (
              <article
                key={image.id}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-card transition hover:border-accent-200 hover:shadow-elevated"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.dataUrl}
                  alt={`합성된 이미지: ${image.text}`}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-3">
                  <p className="truncate text-xs font-medium text-zinc-700">
                    {image.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => downloadSingleImage(image)}
                    className="mt-2 w-full rounded-md bg-zinc-100 px-2 py-1.5 text-xs font-medium tracking-wide text-zinc-600 transition hover:bg-zinc-200 hover:text-zinc-900"
                  >
                    개별 다운로드
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
