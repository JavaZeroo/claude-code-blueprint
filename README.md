# Claude Code Blueprint

一个独立的静态网页项目，用来帮助**不熟悉 Claude Code 的读者**快速理解它的软件设计、核心工作流与关键 mental model。

This is a standalone static site that helps readers **quickly understand Claude Code's software design, workflow, and mental model**.

## 为什么这样做 / Why this stack

本项目使用：
- **Vite**：启动和构建都快，静态部署友好
- **React**：适合组织信息密集型页面与后续模块扩展
- **TypeScript**：让中英双语内容结构、页面模块结构更稳定可维护

This project uses:
- **Vite** for fast local development and static-friendly builds
- **React** for modular UI composition and future expansion
- **TypeScript** for maintainable bilingual content structures and UI contracts

## 目录结构 / Structure

```text
claude-code-blueprint/
├── src/
│   ├── App.tsx        # 页面结构 / page composition
│   ├── App.css        # 主要样式 / primary visual system
│   ├── data.ts        # 中英双语内容数据 / bilingual structured content
│   ├── index.css      # 全局主题 / global theme
│   └── main.tsx       # 入口 / entry
├── public/
├── package.json
└── README.md
```

## 多语言组织方式 / How bilingual content is organized

核心内容统一放在 `src/data.ts`：
- 使用 `Locale = 'zh' | 'en'`
- 用结构化对象存放每个 section 的中英文文案
- 页面组件只负责渲染，不直接硬编码长文案

All core content lives in `src/data.ts`:
- locale-based structured data (`zh` / `en`)
- each section owns its bilingual text in one schema
- the UI layer renders content instead of hardcoding large text blocks

这意味着后续你可以很方便地：
- 新增语言
- 新增页面 section
- 把 `data.ts` 拆成 `src/content/hero.ts`、`src/content/workflow.ts` 等模块

That makes it easy to:
- add more languages
- add new sections or future pages
- split content into multiple files later (`src/content/*`)

## 当前包含的模块 / Current modules

- Hero：一句话解释 Claude Code 是什么
- Blueprint：系统分层理解
- Problems：它解决什么问题
- Core Roles：核心对象 / 核心角色
- Workflow：核心工作流
- Principles：关键设计原则 / mental model
- Beginner Lens：适合新手的理解方式
- Architecture Blueprint：系统设计可视化示意
- Roadmap：当前范围与未来规划

## 本地运行 / Local development

```bash
cd claude-code-blueprint
npm install
npm run dev
```

默认本地地址通常是：
Default local URL is usually:

```text
http://localhost:5173
```

## 构建静态站 / Build static site

```bash
npm run build
```

构建结果在：
Build output:

```text
dist/
```

本项目是纯静态前端，可直接部署到静态托管平台。
This project is a pure static frontend and can be deployed on common static hosting platforms.

## 后续扩展建议 / Suggested next extensions

1. 增加更细的工具系统拆解页
2. 加入真实任务 walkthrough（例如修 bug、读 repo、改文件）
3. 增加 MCP / 插件 / 子代理专题页
4. 加入 timeline，展示 Claude Code 设计层是如何演进的
5. 增加交互式流程图和 hover explanations

1. Add a deeper tools-system page
2. Add real task walkthroughs (bug fixing, repo reading, file editing)
3. Add MCP / plugins / sub-agents topic pages
4. Add a timeline for design evolution
5. Add interactive diagrams with hover explanations

## 参考来源 / Reference basis

本页面内容基于以下参考仓库中的结构信息提炼：
This page is distilled from structural information in the reference repo:

- `README.md`
- `src/main.tsx`
- `src/query.ts`
- `src/tools.ts`
- `src/context.ts`
- `src/Task.ts`
- `src/tasks.ts`

参考仓库：
Reference repo:

- https://github.com/JavaZeroo/claude-code
