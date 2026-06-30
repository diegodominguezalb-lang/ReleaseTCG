import { toPng } from "html-to-image";

export async function exportDeckImage(
    element: HTMLElement,
    filename: string
) {
    const dataUrl = await toPng(element);

    const link = document.createElement("a");

    link.download = filename;
    link.href = dataUrl;

    link.click();
}