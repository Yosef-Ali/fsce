import { generateHTML } from "@tiptap/html";
import { defaultExtensions } from "@/lib/default-extensions";

export const renderContent = (content: string): string => {
  try {
    const jsonContent = JSON.parse(content);
    return generateHTML(jsonContent, defaultExtensions);
  } catch (error) {
    console.error("Error rendering content:", error);
    return "Error rendering content";
  }
};