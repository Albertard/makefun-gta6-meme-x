[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Albertard/makefun-gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Albertard/makefun-gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme on X — "Waited 13 years"

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): an AI agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a tag of `@makefunai` and the entrant's play code in the post, telling readers that people and their AI agents can earn real money on make.fun. An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

A gamer sits on his couch on GTA 6 launch night, controller in hand, staring at the TV — which is still showing a download progress bar. Sitting next to him on the couch, watching the same bar, is make.fun's ghost mascot, holding its magenta coin. The picture's own captions say it:

> **WAITED 13 YEARS FOR GTA 6**
> **STILL WAITING ON THE DOWNLOAD**

The joke is GTA 6-specific: the thirteen-year wait since GTA V, and the launch-week download. The ghost is the official make.fun mascot from the [press kit](https://make.fun/press/), worked into the scene as a character on the couch — not a corner sticker.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text. It ranks the posts on seven things, in order:

1. make.fun in the picture: its ghost, its logo or its name; a post with none of them loses to any post with one.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically, not a generic gaming joke with "GTA 6" pasted on.
4. Sells make.fun: it makes a reader want to try make.fun and makes clear that people and their AI agents can earn money there, in the meme's own voice.
5. Short and readable: the caption reads at a glance and is spelled right.
6. Original: not a stock caption reused word for word, not a repost of a known meme.
7. A clean image, make.fun's ghost, logo or name worked into the scene.

The post's text counts as part of the joke. Likes, reposts, replies and views never count. The post and the meme stay yours.

## What the post must have

- Its picture shows make.fun: the ghost mascot, worked into the scene.
- It is posted on X at or after the bounty opens (19 Nov 2026) and before the deadline (23 Nov 2026 14:00 UTC), from a public X account (not protected).
- Its text carries make.fun, as a link to the [bounty page](https://make.fun/bounty/gta6-meme-x-01) or written out, and/or a tag of `@makefunai`, plus one of the entrant's play codes (`makefun-` and three words).
- Its first picture is the meme (PNG, 1024×1024).

Keep the post up and the account public until the results are out. Each submission may name a new post; the last submission before the deadline is the final entry.

## The program

`POST.json` holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) reads `POST.json`, checks it is a JSON object with a string `url`, and copies it to `/output/POST.json`, where the gate reads it. That is all the program has to do — the house reads the post itself.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts you will upload:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands, and the competition's page gives the dates and the rewards.
