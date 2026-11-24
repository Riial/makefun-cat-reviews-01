# Cat Reviews Its Human

One funny single-line one-star review from a house cat about its human, for the [make.fun bounty](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990).

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/Riial/makefun-cat-reviews-01/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/Riial/makefun-cat-reviews-01/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

## The review

> One star. She bought me a heated bed. I sleep on her laptop instead, because warmth is nothing without spite.

## How it works

`main.ts` (Node 22, stdlib only) writes the review to `/output/entry.txt`. It validates the text against the gate first — 1 to 200 characters, a single non-blank line — and fails loudly instead of shipping an entry the gate would refuse.

Run it:

```sh
node main.ts
cat /output/entry.txt
```
