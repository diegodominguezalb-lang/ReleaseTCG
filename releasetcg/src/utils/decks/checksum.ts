/**
 * Produces a small checksum for a deck string.
 * Used to detect accidental edits.
 */
export function checksum(
  value: string
): string {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash =
      (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash
    .toString(36)
    .toUpperCase()
    .padStart(6, "0");
}