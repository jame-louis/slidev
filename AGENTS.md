# AGENTS.md — Slidev Website Project Context

## What this project is

A **pure static website** (HTML + CSS + JS, no build step, no framework code in the
repo itself) that hosts **Slidev-generated slide decks** (lecture presentations).
The site is served as a static bundle under the URL prefix `/slidev/`.

It contains a landing page (`index.html`) that links to individual lecture decks
grouped by course.

## Site structure

```
.
├── index.html              # Landing page (Bootstrap 5) linking to all decks
├── server.py               # Local static server (serves under /slidev/)
├── web/                    # "Web 前端" course decks
│   └── lectureNN/          # One folder per lecture (e.g. lecture01 … lecture15)
├── cloud-dev/              # "云平台开发" course decks
│   └── lectureNN/
├── network/                # "网络" course decks
│   └── lectureNN/
├── ai/                     # "AI" course decks
│   └── embrace-ai/
└── public/                 # Static public assets (currently just .nojekyll)
```

Each lecture folder is a **built Slidev output** containing:
- `index.html` — the deck entry (references assets via absolute `/slidev/...` paths)
- `404.html` — same as index (for SPA fallback)
- `_redirects` — Netlify-style redirect rule: `/slidev/<course>/lectureNN/*` → `index.html` (200)
- `assets/` — built JS/CSS/image chunks (do NOT hand-edit)

These lecture folders are **generated build output**. Do not hand-edit the
contents; if a deck needs changes, regenerate it from its Slidev source, then
replace the whole folder.

## Key conventions

- **URL base:** everything is served under `/slidev/` (see `server.py` and the
  absolute asset paths in lecture `index.html` files).
- **Landing page** (`index.html`) uses Bootstrap 5 + Bootstrap Icons from CDN.
  It groups decks by course (web, cloud-dev, network, ai). Links are
  `/slidev/<course>/<lectureNN>/index.html`.
- **Content is bilingual**: UI copy and lecture titles are in Chinese, structural
  comments/terms in English. Preserve the existing language style.
- Lecture numbering in `web/` skips 07 (goes 06 → 08-09), so don't "fix" the
  numbering without being asked.

## Common commands

### Serve the site locally

```bash
python3 server.py
# → http://localhost:8090/slidev/
```

### Preview / check files

```bash
python3 -m http.server 8090          # plain serving (no /slidev base)
```

## Common tasks

### Add a new lecture deck link to the landing page

1. Place the built deck folder under the right course dir (e.g. `web/lectureNN/`).
2. In `index.html`, add a new `.lecture-card` anchor after the previous lecture
   in the matching course group:
   ```html
   <a href="/slidev/web/lectureNN/index.html" class="lecture-card">
       <div class="d-flex align-items-center">
           <span class="lecture-number">NN</span>
           <div class="lecture-info">
               <div class="lecture-title">第NN讲</div>
               <div class="lecture-meta">
                   <i class="bi bi-calendar3"></i> <topic>
               </div>
           </div>
           <i class="bi bi-chevron-right lecture-arrow"></i>
       </div>
   </a>
   ```
3. Verify the link resolves and the deck loads (run `server.py`, open
   `http://localhost:8090/slidev/`).

### Add a brand-new course group

Add a course folder (e.g. `web/`) with `lectureNN/` subfolders, then add a group
header card + lecture cards in `index.html`, following the existing pattern
(e.g. the "云平台开发" group).

### Regenerate a deck from Slidev source

The Slidev sources are **not** in this repo (only build output is). If a source
is available elsewhere, build with Slidev, copy the `dist` output into the
target `lectureNN/` folder, keeping `_redirects` and `404.html`.

## Rules for the agent

- **Never hand-edit files inside `assets/`** or the generated `index.html`/`404.html`
  inside lecture folders — they are build artifacts.
- Always keep URLs prefixed with `/slidev/`.
- When editing the landing page, keep Bootstrap markup and the existing visual
  style (gradients, `.lecture-card`, `.lecture-number` badges) consistent.
- If asked to "fix" layout/numbering, confirm intent before large changes —
  much of the structure is intentional.
- If you need to inspect a deck's content, prefer reading the `index.html` meta
  description or the built JS; do not rewrite it.
