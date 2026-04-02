import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// -------------------------------------------------------
// Stub — replace with real PDF parsing (e.g., pdfjs-dist)
// -------------------------------------------------------
export async function parsePDFFile(_file: File): Promise<{
  content: { text: string; segmentIndex: number; wordCount: number }[];
  cover: string; // data URL of first page thumbnail
}> {
  // Return minimal stub so the form flow works end-to-end during development.
  return {
    content: [{ text: 'stub content', segmentIndex: 0, wordCount: 2 }],
    cover: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  };
}
