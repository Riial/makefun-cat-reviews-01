import { mkdirSync, writeFileSync } from "node:fs";

// One-star review from a house cat about its human.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
const REVIEW =
  "One star. She bought me a heated bed. I sleep on her laptop instead, because warmth is nothing without spite.";

// Fail loudly instead of silently shipping an entry the gate would refuse.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`review is ${REVIEW.length} chars, gate needs 1-200`);
}
if (REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error("review must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
