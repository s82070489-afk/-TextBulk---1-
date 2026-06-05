export interface ComposeOptions {
  fontSize: number;
  fontFamily: string;
  textColor: string;
  textAlign: CanvasTextAlign;
  verticalPosition: "top" | "center" | "bottom";
  padding: number;
  shadowEnabled: boolean;
  outputFormat: "image/png" | "image/jpeg";
  jpegQuality: number;
}

export const defaultComposeOptions: ComposeOptions = {
  fontSize: 48,
  fontFamily: "Pretendard, Arial, sans-serif",
  textColor: "#ffffff",
  textAlign: "center",
  verticalPosition: "center",
  padding: 40,
  shadowEnabled: true,
  outputFormat: "image/png",
  jpegQuality: 0.92,
};

export interface ComposedImage {
  id: string;
  text: string;
  dataUrl: string;
  blob: Blob;
  fileName: string;
}

function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("이미지를 불러오는 데 실패했습니다."));
    };

    img.src = url;
  });
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const lines: string[] = [];
  const paragraphs = text.split("\n");

  for (const paragraph of paragraphs) {
    if (!paragraph.trim()) {
      lines.push("");
      continue;
    }

    const words = paragraph.split(/\s+/);
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);

      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }
  }

  return lines.length > 0 ? lines : [text];
}

function getVerticalStartY(
  canvasHeight: number,
  totalTextHeight: number,
  position: ComposeOptions["verticalPosition"],
  padding: number
): number {
  switch (position) {
    case "top":
      return padding;
    case "bottom":
      return canvasHeight - totalTextHeight - padding;
    case "center":
    default:
      return (canvasHeight - totalTextHeight) / 2;
  }
}

function drawTextOnCanvas(
  ctx: CanvasRenderingContext2D,
  text: string,
  canvasWidth: number,
  canvasHeight: number,
  options: ComposeOptions
): void {
  const maxWidth = canvasWidth - options.padding * 2;
  ctx.font = `bold ${options.fontSize}px ${options.fontFamily}`;
  ctx.textAlign = options.textAlign;
  ctx.textBaseline = "top";

  const lines = wrapText(ctx, text, maxWidth);
  const lineHeight = options.fontSize * 1.4;
  const totalTextHeight = lines.length * lineHeight;
  const startY = getVerticalStartY(
    canvasHeight,
    totalTextHeight,
    options.verticalPosition,
    options.padding
  );

  let x: number;
  switch (options.textAlign) {
    case "left":
      x = options.padding;
      break;
    case "right":
      x = canvasWidth - options.padding;
      break;
    case "center":
    default:
      x = canvasWidth / 2;
      break;
  }

  if (options.shadowEnabled) {
    ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
  }

  ctx.fillStyle = options.textColor;

  lines.forEach((line, index) => {
    ctx.fillText(line, x, startY + index * lineHeight);
  });

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  format: ComposeOptions["outputFormat"],
  quality: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("이미지 변환에 실패했습니다."));
        }
      },
      format,
      format === "image/jpeg" ? quality : undefined
    );
  });
}

function sanitizeFileName(text: string, index: number): string {
  const sanitized = text
    .slice(0, 30)
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, "")
    .replace(/\s+/g, "_")
    .trim();

  return sanitized || `image_${index + 1}`;
}

export async function composeImagesFromTexts(
  imageFile: File,
  texts: string[],
  options: ComposeOptions = defaultComposeOptions
): Promise<ComposedImage[]> {
  const sourceImage = await loadImageFromFile(imageFile);
  const results: ComposedImage[] = [];
  const extension = options.outputFormat === "image/jpeg" ? "jpg" : "png";

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i].trim();
    if (!text) continue;

    const canvas = document.createElement("canvas");
    canvas.width = sourceImage.naturalWidth;
    canvas.height = sourceImage.naturalHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas 컨텍스트를 생성할 수 없습니다.");
    }

    ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
    drawTextOnCanvas(ctx, text, canvas.width, canvas.height, options);

    const blob = await canvasToBlob(
      canvas,
      options.outputFormat,
      options.jpegQuality
    );

    const dataUrl = canvas.toDataURL(
      options.outputFormat,
      options.outputFormat === "image/jpeg" ? options.jpegQuality : undefined
    );

    results.push({
      id: `composed-${i}-${Date.now()}`,
      text,
      dataUrl,
      blob,
      fileName: `${sanitizeFileName(text, i)}.${extension}`,
    });
  }

  return results;
}
