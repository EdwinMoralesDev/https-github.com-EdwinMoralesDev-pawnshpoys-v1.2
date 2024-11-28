export const getCategoryFromName = (name: string) => {
  if (name.toLowerCase().includes("gold")) return "jewelry";
  if (name.toLowerCase().includes("luxury")) return "luxury";
  return "premium";
};