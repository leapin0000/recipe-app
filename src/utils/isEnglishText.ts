export function isEnglishText(text: string): boolean {
  return /^[A-Za-z0-9\s.,-]*$/.test(text);
}
