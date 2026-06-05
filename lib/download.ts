import JSZip from "jszip";
import type { ComposedImage } from "./canvas";

export async function downloadAsZip(
  images: ComposedImage[],
  zipFileName = "composed-images.zip"
): Promise<void> {
  const zip = new JSZip();

  images.forEach((image) => {
    zip.file(image.fileName, image.blob);
  });

  const content = await zip.generateAsync({ type: "blob" });
  triggerDownload(content, zipFileName);
}

export function downloadSingleImage(image: ComposedImage): void {
  triggerDownload(image.blob, image.fileName);
}

export async function downloadAllSequentially(
  images: ComposedImage[],
  delayMs = 300
): Promise<void> {
  for (const image of images) {
    downloadSingleImage(image);
    if (delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
