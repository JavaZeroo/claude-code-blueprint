export type Locale = 'zh' | 'en'
export type PageKey = 'home' | 'map' | 'build'
export type ModuleKey = 'agent' | 'router' | 'context' | 'tools' | 'runtime' | 'delivery' | 'guardrails'

export type NavItem = {
  key: PageKey
  label: string
}

export type Metric = {
  value: string
  label: string
  note: string
}

export type Card = {
  title: string
  body: string
}

export type FlowStep = {
  title: string
  body: string
}

export type InfraModule = {
  key: ModuleKey
  shortLabel: string
  title: string
  summary: string
  why: string
  examples: string[]
  risks: string[]
}

export type ChecklistSection = {
  title: string
  intro: string
  items: string[]
}

export type SiteCopy = {
  meta: {
    badge: string
    languageName: string
    switchLabel: string
  }
  nav: NavItem[]
  common: {
    interactiveLabel: string
    examplesLabel: string
    risksLabel: string
    nextLabel: string
  }
  home: {
    overline: string
    title: string
    subtitle: string
    summary: string
    primaryCta: string
    secondaryCta: string
    metrics: Metric[]
    conceptTitle: string
    conceptCards: Card[]
    flowTitle: string
    flowIntro: string
    flowSteps: FlowStep[]
    outcomeTitle: string
    outcomeCards: Card[]
  }
  map: {
    overline: string
    title: string
    intro: string
    panelTitle: string
    panelHint: string
    modules: InfraModule[]
  }
  build: {
    overline: string
    title: string
    intro: string
    sections: ChecklistSection[]
    principleTitle: string
    principles: Card[]
  }
  footer: {
    note: string
  }
}

export const content: Record<Locale, SiteCopy> = {
  zh: {
    meta: {
      badge: 'Vibe Coding Infra Blueprint',
      languageName: '中文',
      switchLabel: 'Switch to English',
    },
    nav: [
      { key: 'home', label: '首页' },
      { key: 'map', label: '系统地图' },
      { key: 'build', label: '搭建清单' },
    ],
    common: {
      interactiveLabel: '交互式系统图',
      examplesLabel: '典型实现',
      risksLabel: '如果没有这一层会怎样',
      nextLabel: '下一步建议',
    },
    home: {
      overline: '从聊天式 AI 到可执行工程代理',
      title: 'Vibe coding 的关键，不是“AI 会写代码”，而是你有没有把它接进一套能工作的基建。',
      subtitle:
        '真正的 vibe coding infra，是让 agent 能读上下文、调工具、走流程、被约束、能恢复、能交付的一整套系统。',
      summary:
        '如果只把 AI 当聊天窗口，它最多给建议；如果给它接上 router、context、tools、runtime 和 delivery，它才会变成一个能持续推进任务的工程代理。',
      primaryCta: '看系统地图',
      secondaryCta: '看怎么搭',
      metrics: [
        {
          value: 'Agent + Infra',
          label: '核心认识',
          note: '不是单个模型，而是模型加上运行环境。',
        },
        {
          value: 'Controlled Execution',
          label: '真正价值',
          note: '让 AI 在可控边界内持续执行工程任务。',
        },
        {
          value: 'Composable Stack',
          label: '搭建方式',
          note: '每一层都可替换，但职责要清楚。',
        },
      ],
      conceptTitle: '先把概念掰直：这套基建到底在做什么？',
      conceptCards: [
        {
          title: '它在把“会说”变成“会做”',
          body: '模型本身只负责生成判断；真正让任务发生的是工具、流程和运行约束。',
        },
        {
          title: '它在把一次性回答变成可持续工作流',
          body: '一个真实任务往往要读代码、跑命令、修一次不够、继续迭代，这就需要 loop 和恢复机制。',
        },
        {
          title: '它在给 AI 接上工程世界',
          body: 'repo、git、命令行、浏览器、GitHub、部署，这些都属于“工程世界”的接口层。',
        },
      ],
      flowTitle: '一个 vibe coding 任务通常怎么流动',
      flowIntro: '这不是源码细节，而是一张帮助理解整套基建职责分工的流程图。',
      flowSteps: [
        {
          title: '1. 用户提出任务',
          body: '例如：修 bug、做页面、改配置、部署一个静态站。',
        },
        {
          title: '2. Router 判断怎么处理',
          body: '直接回答？交给 Claude Code？失败后要不要 fallback 到 Codex？',
        },
        {
          title: '3. Agent 读取上下文',
          body: '读取 repo、git 状态、规则文件、memory、会话历史。',
        },
        {
          title: '4. Tools 执行动作',
          body: '读写文件、跑命令、搜索资料、开浏览器、调 API。',
        },
        {
          title: '5. Runtime 管理循环',
          body: '继续下一轮、处理报错、压缩上下文、等待结果、决定停止。',
        },
        {
          title: '6. Delivery 交付结果',
          body: '提交 git、发 PR、部署 Pages、发消息通知。',
        },
      ],
      outcomeTitle: '所以你真正要学的，不只是某个 agent，而是这套系统分层',
      outcomeCards: [
        {
          title: 'Claude Code 只是其中一个 agent',
          body: '它很重要，但它不是整套系统本身。系统可以换 agent，基建逻辑依然成立。',
        },
        {
          title: 'Router 决定“谁来做”',
          body: '比如 Claude 优先，失败后 Codex 兜底，这本身就是一层基础设施。',
        },
        {
          title: '如果没有 delivery，任务就停在“本地做完了”',
          body: '真实工作里，你最终还是要把结果送到 GitHub、Pages、消息系统或部署环境。',
        },
      ],
    },
    map: {
      overline: '系统地图',
      title: '点开每一层，你会看到 vibe coding infra 真正由哪些模块组成。',
      intro:
        '这里不是按某个工具的源码目录来讲，而是按系统职责来拆。对新手来说，这样更容易看懂“整套东西到底在干嘛”。',
      panelTitle: '当前模块说明',
      panelHint: '点击左侧模块切换内容。',
      modules: [
        {
          key: 'agent',
          shortLabel: 'Agent',
          title: 'Agent：真正负责“做任务”的执行器',
          summary: 'Claude Code、Codex、OpenCode 这类工具，本质上都是执行器。它们负责读任务、做判断、调工具、推进具体工作。',
          why: '如果没有 agent，这套系统只有静态规则，没有真正干活的人。',
          examples: ['Claude Code', 'Codex', 'OpenCode', 'Pi / Gemini / Cursor 等 ACP harness'],
          risks: ['只能聊天，不能持续推进任务', '无法把工程动作真正落地'],
        },
        {
          key: 'router',
          shortLabel: 'Router',
          title: 'Router：决定任务该怎么分发',
          summary: 'Router 负责判断这次任务该直接处理、交给哪个 agent、还是在失败后切备用执行器。',
          why: '它把“策略”从 agent 本身分离出来，后面换模型或换 provider 时就更稳。',
          examples: ['Claude 优先 / Codex fallback', '按任务类型路由', '按权限或成本路由'],
          risks: ['任务全靠人工判断', '同样的任务每次处理路径都不一致'],
        },
        {
          key: 'context',
          shortLabel: 'Context',
          title: 'Context：把工程现场喂给 agent',
          summary: '一个真正能工作的 agent 不能只看到 prompt，还要看到 repo、git、规则文件、memory 和当前会话状态。',
          why: '上下文质量直接决定 agent 判断是否靠谱。',
          examples: ['git status', 'CLAUDE.md / AGENTS.md', 'memory files', '当前工作目录与项目结构'],
          risks: ['agent 不知道自己在哪', '建议可能看着对，实际完全脱离现场'],
        },
        {
          key: 'tools',
          shortLabel: 'Tools',
          title: 'Tools：让 agent 真正拥有“手和脚”',
          summary: '文件读写、Shell、Web、浏览器、GitHub、日历、消息系统……这些能力让 agent 不只是在说话。',
          why: '没有 tool layer，AI 再聪明也只是解释器，不是执行器。',
          examples: ['read / edit / write', 'exec / browser', 'gh / pages / messaging', '外部 API 与插件'],
          risks: ['只能给建议，不能验证', '做不了真实工程动作'],
        },
        {
          key: 'runtime',
          shortLabel: 'Runtime',
          title: 'Runtime：让任务变成可以持续运行的流程',
          summary: '任务不是只跑一轮。Runtime 管理 session、后台执行、等待、继续、停止、失败重试这些生命周期。',
          why: '复杂任务的价值，通常来自多轮推进，而不是第一轮回答。',
          examples: ['session / sub-session', 'background jobs', 'cron / heartbeat', 'turn-based loops'],
          risks: ['一旦任务变长就散掉', '无法管理中途等待、恢复和继续'],
        },
        {
          key: 'delivery',
          shortLabel: 'Delivery',
          title: 'Delivery：把结果送回工程系统',
          summary: '做完只是中途状态，真正闭环还需要提交代码、部署站点、发通知、开 PR。',
          why: '如果没有交付层，任务就停留在“本地做过了”，没有进入团队协作流程。',
          examples: ['git push', 'GitHub PR', 'GitHub Pages', '消息通知 / webhook'],
          risks: ['成果不落地', '人要手工补最后一公里'],
        },
        {
          key: 'guardrails',
          shortLabel: 'Guardrails',
          title: 'Guardrails：给 agent 加边界、预算和恢复规则',
          summary: '权限、审批、预算、stop conditions、fallback、日志，这一层决定系统是不是可控。',
          why: '越能执行的 agent，越需要边界。没有 guardrails，系统会很快变得不可信。',
          examples: ['审批机制', 'allowlist', '成本预算', 'fallback / stop hooks / audit trail'],
          risks: ['容易越界', '失败后没有恢复路径', '系统难以长期使用'],
        },
      ],
    },
    build: {
      overline: '搭建清单',
      title: '如果你想自己搭一套 vibe coding infra，最少要把这些基础设施补齐。',
      intro:
        '不是每一项都要一开始做到最强，但至少要知道自己缺哪一层。下面这份清单更像“基建 checklist”，不是某个框架的安装说明。',
      sections: [
        {
          title: '1. 选执行器',
          intro: '先明确谁来真正做任务。',
          items: ['选一个主 agent：Claude Code / Codex / 其他', '决定是否需要备用 agent', '明确哪些任务你自己做，哪些交给 agent'],
        },
        {
          title: '2. 做路由策略',
          intro: '不要让任务分发逻辑散在各处。',
          items: ['定义什么任务走哪个 agent', '定义失败后的 fallback 规则', '决定何时需要人工确认'],
        },
        {
          title: '3. 接工程上下文',
          intro: '让 agent 知道它正在处理什么现场。',
          items: ['提供 repo / cwd', '接入 git 状态', '提供项目规则文件与长期 memory', '保留会话历史'],
        },
        {
          title: '4. 接可执行工具',
          intro: '把真正干活的能力接上。',
          items: ['文件读写', 'Shell / 构建 / 测试', 'Web / 浏览器', 'GitHub / 部署 / 通知'],
        },
        {
          title: '5. 管任务生命周期',
          intro: '任务一旦变长，就必须有 runtime。',
          items: ['支持后台任务', '支持恢复与继续', '支持等待外部结果', '支持定时与心跳'],
        },
        {
          title: '6. 做交付闭环',
          intro: '最后一公里不要靠记忆。',
          items: ['自动 git 管理', 'PR / issue / pages 部署', '消息通知', '保留变更记录与输出摘要'],
        },
      ],
      principleTitle: '搭这类系统时最容易踩的 3 个坑',
      principles: [
        {
          title: '只盯着模型，不搭基建',
          body: '这样最后只会得到一个更贵的聊天窗口。',
        },
        {
          title: '全都堆进一个 agent 里',
          body: '路由、上下文、执行、交付不分层，后面会越来越难维护。',
        },
        {
          title: '只管执行，不管恢复和边界',
          body: '短期看很爽，长期一定出问题。真正能用久的系统都很重视 guardrails。',
        },
      ],
    },
    footer: {
      note: '这一版不再把 Claude Code 当主角，而是把它放回“执行器”这一层。重点是帮你理解整套 vibe coding 基建在做什么，以及如果自己要搭，需要补哪些层。',
    },
  },
  en: {
    meta: {
      badge: 'Vibe Coding Infra Blueprint',
      languageName: 'English',
      switchLabel: '切换到中文',
    },
    nav: [
      { key: 'home', label: 'Home' },
      { key: 'map', label: 'System Map' },
      { key: 'build', label: 'Build Checklist' },
    ],
    common: {
      interactiveLabel: 'Interactive system map',
      examplesLabel: 'Typical implementations',
      risksLabel: 'What breaks without this layer',
      nextLabel: 'Suggested next step',
    },
    home: {
      overline: 'From chat AI to executable engineering agents',
      title: 'The key to vibe coding is not that “AI can write code” — it is whether you connect that AI to infrastructure that can actually work.',
      subtitle:
        'Real vibe coding infra gives an agent context, tools, routing, runtime, delivery, and guardrails so it can operate inside the engineering world.',
      summary:
        'If AI is only a chat box, it can suggest. If you connect router, context, tools, runtime, and delivery, it becomes an agent that can keep a task moving forward.',
      primaryCta: 'Open system map',
      secondaryCta: 'See build checklist',
      metrics: [
        {
          value: 'Agent + Infra',
          label: 'Core idea',
          note: 'The system is not the model alone, but the model plus its operating environment.',
        },
        {
          value: 'Controlled Execution',
          label: 'Real value',
          note: 'Let AI execute engineering work within controlled boundaries.',
        },
        {
          value: 'Composable Stack',
          label: 'How it is built',
          note: 'Each layer can be swapped, but the responsibilities must stay clear.',
        },
      ],
      conceptTitle: 'First fix the mental model: what is this infrastructure actually doing?',
      conceptCards: [
        {
          title: 'It turns “can talk” into “can act”',
          body: 'The model generates judgments, but tools, workflows, and runtime constraints are what make work happen.',
        },
        {
          title: 'It turns single answers into ongoing workflows',
          body: 'Real tasks require reading code, running commands, failing once, trying again, and finishing through loops.',
        },
        {
          title: 'It connects AI to the engineering world',
          body: 'Repo state, git, shell, browser, GitHub, and deployment are all interfaces into that world.',
        },
      ],
      flowTitle: 'How a vibe coding task usually flows',
      flowIntro: 'This is not source-level detail. It is a role map for understanding how the infrastructure cooperates.',
      flowSteps: [
        {
          title: '1. A user gives a task',
          body: 'For example: fix a bug, build a page, change config, or deploy a static site.',
        },
        {
          title: '2. The router decides how to handle it',
          body: 'Answer directly? Hand it to Claude Code? Fallback to Codex on failure?',
        },
        {
          title: '3. The agent reads context',
          body: 'Repo, git state, rules files, memory, and conversation state.',
        },
        {
          title: '4. Tools execute actions',
          body: 'Read/write files, run commands, search the web, open browsers, call APIs.',
        },
        {
          title: '5. Runtime manages the loop',
          body: 'Continue, recover from errors, compact context, wait for results, decide when to stop.',
        },
        {
          title: '6. Delivery closes the loop',
          body: 'Commit to git, open a PR, deploy Pages, or send a message.',
        },
      ],
      outcomeTitle: 'So the real thing to learn is not one agent, but the stack around it',
      outcomeCards: [
        {
          title: 'Claude Code is only one possible agent',
          body: 'It matters, but it is not the whole system. The infrastructure logic still exists when the agent changes.',
        },
        {
          title: 'The router decides who should do the work',
          body: 'For example, Claude first and Codex fallback is already an infrastructure layer, not just a prompt habit.',
        },
        {
          title: 'Without delivery, work stops at “it was done locally”',
          body: 'In real workflows, results still need to reach GitHub, Pages, messaging systems, or deployment targets.',
        },
      ],
    },
    map: {
      overline: 'System map',
      title: 'Click through the layers to see what vibe coding infra is actually made of.',
      intro:
        'This is not organized by one tool’s repo structure. It is organized by system responsibility, which is far easier for newcomers to understand.',
      panelTitle: 'Current module',
      panelHint: 'Click modules on the left to switch panels.',
      modules: [
        {
          key: 'agent',
          shortLabel: 'Agent',
          title: 'Agent: the executor that actually performs work',
          summary: 'Tools like Claude Code, Codex, and OpenCode are executors. They interpret a task, make judgments, call tools, and move work forward.',
          why: 'Without an agent, the system only has rules and no worker.',
          examples: ['Claude Code', 'Codex', 'OpenCode', 'Pi / Gemini / Cursor and other ACP harnesses'],
          risks: ['You only get chat, not sustained task execution', 'No actual engineering action gets completed'],
        },
        {
          key: 'router',
          shortLabel: 'Router',
          title: 'Router: decides where each task should go',
          summary: 'The router determines whether to answer directly, use a specific agent, or fall back to another executor if the first one fails.',
          why: 'It separates strategy from the agent itself, which makes later swaps much more stable.',
          examples: ['Claude first / Codex fallback', 'Route by task type', 'Route by budget or permission boundary'],
          risks: ['Humans must decide manually every time', 'Task handling becomes inconsistent'],
        },
        {
          key: 'context',
          shortLabel: 'Context',
          title: 'Context: feeds the engineering scene into the agent',
          summary: 'A capable agent needs more than a prompt. It needs repo state, git, rules files, memory, and current session state.',
          why: 'Context quality directly shapes the quality of the agent’s judgment.',
          examples: ['git status', 'CLAUDE.md / AGENTS.md', 'memory files', 'current working directory and project structure'],
          risks: ['The agent does not know where it is', 'Suggestions look plausible but are detached from reality'],
        },
        {
          key: 'tools',
          shortLabel: 'Tools',
          title: 'Tools: what gives the agent hands and feet',
          summary: 'File I/O, shell, web, browser, GitHub, calendars, messaging systems: these are what make the agent more than a speaker.',
          why: 'Without tools, even a strong model is still an interpreter rather than an executor.',
          examples: ['read / edit / write', 'exec / browser', 'gh / pages / messaging', 'external APIs and plugins'],
          risks: ['It can only suggest, not verify', 'Real engineering actions cannot happen'],
        },
        {
          key: 'runtime',
          shortLabel: 'Runtime',
          title: 'Runtime: turns a task into a living process',
          summary: 'Tasks do not end in one turn. Runtime manages sessions, background work, waiting, continuation, stopping, and retries.',
          why: 'The value of complex task execution usually appears across multiple turns, not the first one.',
          examples: ['session / sub-session', 'background jobs', 'cron / heartbeat', 'turn-based loops'],
          risks: ['Long tasks fall apart', 'No clean way to wait, recover, or continue'],
        },
        {
          key: 'delivery',
          shortLabel: 'Delivery',
          title: 'Delivery: sends results back into real engineering systems',
          summary: 'Finishing locally is not enough. Delivery is what closes the loop by pushing code, opening PRs, deploying sites, and notifying people.',
          why: 'Without delivery, the task never fully enters collaboration or production systems.',
          examples: ['git push', 'GitHub PR', 'GitHub Pages', 'messages and webhooks'],
          risks: ['Results do not land', 'Humans must manually do the last mile'],
        },
        {
          key: 'guardrails',
          shortLabel: 'Guardrails',
          title: 'Guardrails: boundaries, budgets, and recovery logic',
          summary: 'Permissions, approvals, budgets, stop conditions, fallbacks, and logs determine whether the system stays trustworthy over time.',
          why: 'The more execution power an agent has, the more it needs boundaries.',
          examples: ['approval flow', 'allowlists', 'cost budgets', 'fallback / stop hooks / audit trail'],
          risks: ['The system can overreach', 'Failures have no structured recovery path', 'Long-term trust collapses'],
        },
      ],
    },
    build: {
      overline: 'Build checklist',
      title: 'If you want to build your own vibe coding infra, these are the layers you need to cover.',
      intro:
        'You do not need the strongest version of every layer on day one. But you do need to know which layers exist and which ones are still missing.',
      sections: [
        {
          title: '1. Choose an executor',
          intro: 'First decide who actually performs work.',
          items: ['Choose a primary agent: Claude Code / Codex / others', 'Decide whether a backup agent is needed', 'Define which tasks you still handle yourself'],
        },
        {
          title: '2. Design routing strategy',
          intro: 'Do not scatter routing logic everywhere.',
          items: ['Define which tasks go to which agent', 'Define fallback rules', 'Decide when human confirmation is required'],
        },
        {
          title: '3. Connect engineering context',
          intro: 'Let the agent see the scene it is operating in.',
          items: ['Provide repo / cwd', 'Connect git state', 'Provide rules files and long-term memory', 'Preserve conversation history'],
        },
        {
          title: '4. Connect executable tools',
          intro: 'Attach the capabilities that let real work happen.',
          items: ['File I/O', 'Shell / build / test', 'Web / browser', 'GitHub / deployment / notifications'],
        },
        {
          title: '5. Manage task lifecycle',
          intro: 'Once tasks become long-running, runtime becomes mandatory.',
          items: ['Support background tasks', 'Support resume and continue', 'Support waiting for external results', 'Support schedules and heartbeat'],
        },
        {
          title: '6. Close the delivery loop',
          intro: 'Do not rely on memory for the last mile.',
          items: ['Automated git handling', 'PR / issue / Pages deployment', 'Notifications', 'Keep change logs and concise summaries'],
        },
      ],
      principleTitle: 'Three common failure modes when building this kind of system',
      principles: [
        {
          title: 'Obsessing over the model while skipping infrastructure',
          body: 'That usually gives you a more expensive chat box instead of an engineering system.',
        },
        {
          title: 'Stuffing everything into one agent',
          body: 'If routing, context, execution, and delivery are not separated, the system becomes hard to evolve.',
        },
        {
          title: 'Caring about execution but not recovery or boundaries',
          body: 'That feels powerful in the short term and unstable in the long term. Durable systems always invest in guardrails.',
        },
      ],
    },
    footer: {
      note: 'This version no longer treats Claude Code as the main character. It places Claude Code back into the executor layer and focuses on what the full vibe coding infrastructure is actually doing.',
    },
  },
}
