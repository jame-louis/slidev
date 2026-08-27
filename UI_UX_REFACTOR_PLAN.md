# UI/UX 重构计划 — Slidev 演示文稿站点

> 状态：已完成（2025-08-27，commit 待记录） · 目标文件：`index.html`（纯静态，无构建步骤，Bootstrap 5 + Bootstrap Icons CDN）

## 1. 目标

在不触碰任何课件构建产物（`assets/`、课件目录内生成的 `index.html`/`404.html`）的前提下，把首页从"一长串纵向卡片列表"改造成一个**结构清晰、易检索、观感现代**的课程导航页面。

## 2. 现状评估

### 当前结构
- 单列布局（`col-md-8`），所有课件纵向堆叠。
- Hero 渐变区 + `.lecture-card`（编号徽章 + 标题 + meta + 箭头）+ 页脚。
- 唯一"课程分组"是 cloud-dev 前的一个内联虚线 header 卡片；web 课程无分组标题。

### 发现的问题
| # | 问题 | 影响 |
|---|------|------|
| P1 | `network/`（2 个 deck）与 `ai/`（1 个 deck）在磁盘上存在但**首页完全没有入口** | 内容缺失 |
| P2 | web 15 讲在一个扁平列表里，无分组/搜索 | 可发现性差 |
| P3 | 单列布局纵向滚动过长 | 浏览效率低 |
| P4 | 课程 header 卡片与普通课件卡片视觉区分弱（仅虚线边框） | 分组语义不清 |
| P5 | 无暗色模式、无搜索、无导航锚点 | 体验一般 |
| P6 | 可访问性弱：无 `:focus-visible`、对比度偏低、卡片无 `aria-*` | 无障碍 |
| P7 | 无统一的"返回首页"导航（课件内部不可改，但可提供首页锚点/nav） | 导航 |

## 3. 设计原则

- **只改 `index.html`**：CSS 继续用内联 `<style>`；JS 用内联 `<script>`（不引入构建/框架）。
- **保持 URL 约定**：一律 `/slidev/<course>/<lectureNN>/index.html`。
- **保持双语风格**：UI 文案中文、注释英文。
- **保留现有视觉语言**：沿用主渐变 `#667eea → #764ba2`、`.lecture-card`、`.lecture-number` 徽章样式，做增强而非推翻。
- **不破坏"web 编号 06 → 08-09"的刻意设计**。

## 4. 分阶段实施

### Phase 0 — 内容补全（✅ 已完成）
**目标：让首页反映真实内容。**
- [ ] 为 `web` 课程组添加分组 header（如"Web 前端"）。
- [ ] 为 `cloud-dev` 已存在 header（保留）。
- [ ] 新增 `network` 课程组 header + 2 张课件卡片（`/slidev/network/lecture01|02/index.html`）。
- [ ] 新增 `ai` 课程组 header + 1 张课件卡片（`/slidev/ai/embrace-ai/index.html`）。
- [ ] 用 `server.py` 验证所有新链接可加载。

### Phase 1 — 布局与信息架构（✅ 已完成）
**目标：从"单列列表"改为"按课程分区的两列响应式卡片网格"。**
- [ ] 将每组课件从纵向堆叠改为 `row row-cols-1 row-cols-md-2` 卡片网格（保留 `.lecture-card` 内部结构）。
- [ ] 为每个课程组引入清晰的分组 header（区别于课件卡片：更大、带图标、课程主题色）。
- [ ] 课程主题色：web=紫 `#667eea→#764ba2`，cloud-dev=绿 `#11998e→#38ef7d`，network=蓝，ai=橙/粉。
- [ ] 页首添加 sticky 锚点导航（课程快速跳转），`<a href="#web">` 等 + `scroll-margin-top`。
- [ ] 移动端保持单列堆叠（`row-cols-1`），卡片内布局不变。

### Phase 2 — 交互与功能（✅ 已完成）
**目标：提升可发现性与可用性。**
- [ ] **实时搜索/过滤**：内联 JS 输入框，按标题/编号/topic 过滤卡片（大小写不敏感、中文匹配）。
- [ ] **课程筛选 chips**：点击"全部/Web/云平台/网络/AI"过滤对应组。
- [ ] 卡片 hover 效果增强（已有）保持一致；键盘导航时 `:focus-visible` 环形 outline。
- [ ] 顶部显示当前可见课件计数（如"共 18 讲"），搜索时实时更新。

### Phase 3 — 视觉打磨与无障碍（✅ 已完成）
**目标：观感现代、可访问。**
- [ ] **暗色模式**：`prefers-color-scheme: dark` 变量覆盖（`:root` 已用 CSS 变量，易于扩展）。
- [ ] 对比度检查：meta 文字 `#718096` 在暗色下需提亮；焦点环、hover 状态达标（WCAG AA）。
- [ ] 卡片与分组添加 `aria-labelledby` / `aria-label`，搜索框 `role="search"`。
- [ ] 页脚增强：站点说明、返回顶部按钮。
- [ ] 首屏加载优化：保持 CDN，考虑 `loading="lazy"`（无大图则跳过）。

## 5. 验收标准

- [ ] `python3 server.py` → `http://localhost:8090/slidev/` 正常，无 404。
- [ ] 所有课件入口在首页可达（含 network、ai）。
- [ ] 桌面端为两列网格、移动端单列，无横向溢出。
- [ ] 搜索/筛选即时生效且能回到"全部"。
- [ ] 暗色模式自动生效且文字可读。
- [ ] 未改动任何 `assets/`、课件目录内 `index.html`/`404.html`。

## 6. 风险与注意事项

- **仅允许编辑 `index.html`**（以及可能的 `server.py`）。课件构建产物一律不动。
- 若需改 URL 结构或课程命名，先与用户确认——`web` 编号 06→08-09 为刻意设计。
- 两列网格会改变布局节奏，需在桌面与移动端分别目测。
- 不引入任何框架/构建工具；所有 JS 保持内联与轻量。

## 7. 实施结果

已一次性完成 Phase 0-3 全部改造（见提交记录）。实现摘要：

- **Phase 0**：新增 `web` 分组 header；新增 `network`（2 讲）、`ai`（1 讲）分组与卡片，补齐此前缺失的入口。
- **Phase 1**：每课程组为两列响应式 `lecture-grid`（`repeat(2,1fr)` → 移动端单列）；四课程主题色（web 紫 / cloud 绿 / network 蓝 / ai 橙）；sticky 控制栏含锚点导航。
- **Phase 2**：实时搜索（按标题/主题，大小写不敏感）、课程筛选 chips、Hero 总数、无结果空状态。
- **Phase 3**：暗色模式（`prefers-color-scheme`）、`:focus-visible` 焦点环、ARIA 标注（`role=searchbox`、`aria-label`）、返回顶部按钮、页脚返回首页链接。

## 8. 建议实施顺序

（已按此顺序完成）

```
Phase 0（补内容） → Phase 1（布局/分组） → Phase 2（搜索/筛选） → Phase 3（暗色/无障碍/打磨）
```
每完成一阶段即提交一次 commit，便于回滚与评审。
