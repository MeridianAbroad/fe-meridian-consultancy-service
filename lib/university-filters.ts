export function parseTuitionLow(tuitionRange: string): number {
  const match = tuitionRange.match(/[\d,]+/);
  if (!match) return 0;
  return Number(match[0].replace(/,/g, ""));
}
