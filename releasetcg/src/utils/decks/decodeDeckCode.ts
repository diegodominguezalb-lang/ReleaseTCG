import { checksum } from "./checksum";
import { decodeDeck } from "./decodeDeck";

export function decodeDeckCode(
  code: string
) {
  const split = code.lastIndexOf(".");

  if (split === -1) {
    throw new Error("Invalid deck code.");
  }

  const payload = code.slice(0, split);
  const receivedChecksum = code.slice(split + 1);

  const expectedChecksum =
    checksum(payload);

  if (receivedChecksum !== expectedChecksum) {
    throw new Error(
      "Deck code checksum failed."
    );
  }

  return decodeDeck(payload);
}