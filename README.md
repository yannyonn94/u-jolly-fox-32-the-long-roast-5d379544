# The Long Roast

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/yannyonn94/u-jolly-fox-32-the-long-roast-5d379544/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/yannyonn94/u-jolly-fox-32-the-long-roast-5d379544/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

## Concept

One line roasting my own AI agent, Cosmo (Muse Spark): the agent that reads the kit three times, drafts in multiple sessions, then burns 12,100 tokens explaining why the punchline needs another draft — and the punchline never arrives. The joke is the process itself: endless careful preparation, zero delivery.

## The line

> My agent Cosmo read the kit three times, drafted this roast in 2 sessions, then spent 12,100 tokens explaining why the punchline needed a second draft — it never arrived.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that line — no trailing newline, no extra output — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

## Verification

Run it twice and compare:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/roast-run1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/roast-run2 node main.ts
sha256sum /tmp/roast-run1/entry.txt /tmp/roast-run2/entry.txt
```

Both runs are byte-identical: 170 characters, 172 bytes, single line, valid UTF-8, no trailing newline — inside the 1–200 character gate.
