---
name: website-maintenance
description: Maintain and update this static Slidev website (landing page index.html, course/lecture deck folders, local serving with server.py). Use for adding or removing lecture links, adding course groups, verifying /slidev/ URLs, and anything related to editing this site's structure or landing page.
---

# Website Maintenance

This is a **pure static HTML/CSS/JS** site hosting Slidev-built lecture decks,
served under the `/slidev/` URL prefix.

## Read this first

- The project conventions are in `AGENTS.md` (site structure, naming, rules).
  Follow them.
- `server.py` serves the site at `http://localhost:8090/slidev/`.
- Course dirs: `web/`, `cloud-dev/`, `network/`, `ai/`. Each contains `lectureNN/`
  (or named deck folders like `ai/embrace-ai/`).

## Common workflows

### 1. Add a lecture link to the landing page

1. Confirm the deck folder exists, e.g. `web/lectureNN/` with an `index.html`.
2. Open `index.html` and find the correct course group (web / cloud-dev / network / ai).
3. Insert a new `.lecture-card` anchor after the previous lecture in that group:
   ```html
   <a href="/slidev/<course>/lectureNN/index.html" class="lecture-card">
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
4. Verify with the server:
   ```bash
   python3 server.py   # then open http://localhost:8090/slidev/
   ```

### 2. Remove a lecture link

- Remove the matching `.lecture-card` anchor block from `index.html`.
- Do NOT delete the deck folder unless asked.
- Ensure no leftover gaps in numbering.

### 3. Add a new course group

1. Create the course folder and deck subfolders (e.g. `new-course/lecture01/`).
2. In `index.html`, add a group header card (dashed-border, non-link card like the
   "云平台开发" group) followed by the group's lecture cards.
3. Link to `/slidev/new-course/lectureNN/index.html`.

### 4. Check a deck's content

- Read `index.html` inside the lecture folder: the `<meta name="description">`
  contains the deck's slide source text (readable, not obfuscated).
- The real app code is in `assets/` — do not edit or read deeply.

### 5. Regenerate a deck

- Slidev sources are not in this repo. If a source exists elsewhere, build it,
  then replace the whole `lectureNN/` folder with the new `dist` output, keeping
  `_redirects` and `404.html`.

## Rules

- Never edit `assets/`, generated `index.html`, or `404.html` inside lecture folders.
- Keep all URLs prefixed with `/slidev/`.
- Keep the Bootstrap markup / visual style of the landing page consistent.
- Lecture numbering in `web/` intentionally skips 07 (06 → 08-09). Don't "fix" it.
