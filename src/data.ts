export type Locale = 'zh' | 'en'

export type NavItem = {
  id: string
  label: string
}

export type HeroMetric = {
  value: string
  label: string
  note: string
}

export type ComparisonCard = {
  title: string
  body: string
}

export type WorkflowStep = {
  step: string
  title: string
  summary: string
  details: string[]
}

export type SystemCard = {
  title: string
  body: string
  bullets: string[]
}

export type WalkthroughStage = {
  title: string
  body: string
  output: string
}

export type AudienceCard = {
  title: string
  body: string
}

export type ArchitectureNode = {
  title: string
  note: string
}

export type RoadmapItem = {
  phase: string
  status: string
  items: string[]
}

export type SiteContent = {
  meta: {
    languageName: string
    switchLabel: string
    badge: string
    repoLabel: string
  }
  nav: NavItem[]
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    summary: string
    primaryCta: string
    secondaryCta: string
    repoNote: string
    metrics: HeroMetric[]
  }
  positioning: {
    overline: string
    title: string
    intro: string
    cards: ComparisonCard[]
  }
  workflow: {
    overline: string
    title: string
    intro: string
    steps: WorkflowStep[]
  }
  system: {
    overline: string
    title: string
    intro: string
    cards: SystemCard[]
  }
  walkthrough: {
    overline: string
    title: string
    intro: string
    scenarioLabel: string
    scenarioTitle: string
    scenarioSummary: string
    stages: WalkthroughStage[]
  }
  audience: {
    overline: string
    title: string
    intro: string
    cards: AudienceCard[]
  }
  architecture: {
    overline: string
    title: string
    intro: string
    leftTitle: string
    rightTitle: string
    leftNodes: ArchitectureNode[]
    rightNodes: ArchitectureNode[]
    centerTitle: string
    centerBody: string
    footer: string
  }
  roadmap: {
    overline: string
    title: string
    intro: string
    items: RoadmapItem[]
  }
  footer: {
    note: string
    sourceLabel: string
    sourceText: string
  }
}

export const content: Record<Locale, SiteContent> = {
  zh: {
    meta: {
      languageName: '中文',
      switchLabel: '切换到 English',
      badge: 'Claude Code 导览站 v2',
      repoLabel: '参考仓库',
    },
    nav: [
      { id: 'hero', label: '首页' },
      { id: 'positioning', label: '先搞懂它是什么' },
      { id: 'workflow', label: '它怎么工作' },
      { id: 'walkthrough', label: '真实案例' },
      { id: 'architecture', label: '系统蓝图' },
      { id: 'roadmap', label: '下一步' },
    ],
    hero: {
      eyebrow: 'Claude Code / 面向新手的软件设计与工作流导览',
      title: 'Claude Code 不是“聊天机器人进终端”，而是一个会持续推进任务的工程代理。',
      subtitle:
        '它会读取项目上下文、决定下一步、调用工具、检查结果、继续迭代，所以它更像一个会工作的 CLI 系统，而不是只会回答问题的窗口。',
      summary:
        '这版导览站的目标很直接：让第一次接触 Claude Code 的人，先建立正确直觉，再理解它的核心回路、关键对象和为什么它适合复杂工程任务。',
      primaryCta: '先看它到底是什么',
      secondaryCta: '直接看真实案例',
      repoNote: '基于 JavaZeroo/claude-code 仓库结构与行为线索整理',
      metrics: [
        {
          value: 'Loop-based',
          label: '核心机制',
          note: '不是问一次答一次，而是持续判断、行动、回看结果。',
        },
        {
          value: 'Tool-native',
          label: '真正能力来源',
          note: '能读文件、改文件、跑命令、搜资料，才构成“代理”。',
        },
        {
          value: 'Stateful',
          label: '运行方式',
          note: '上下文、权限、历史与工具结果会持续改变它的决策。',
        },
      ],
    },
    positioning: {
      overline: '先搞懂它是什么',
      title: '如果一句话说清：Claude Code 是“能执行多轮工程任务的终端代理系统”',
      intro:
        '很多人第一次会把它理解成“更强的 AI 问答工具”。这个方向不算全错，但会低估它。真正更接近的理解是：它有模型脑子，也有工具手臂，还有一个负责持续推进任务的执行循环。',
      cards: [
        {
          title: '它不是只负责回答',
          body: '普通聊天式 AI 更擅长给解释、给建议；Claude Code 会在允许范围里直接去读、查、改、跑。',
        },
        {
          title: '它不是一次性动作',
          body: '重点不是吐出一条最终答案，而是把任务一轮轮往前推进，直到完成、卡住或被停止。',
        },
        {
          title: '它不是“加了壳的模型”',
          body: '从仓库结构看，命令系统、工具系统、上下文构建、恢复机制，都是第一层公民。',
        },
      ],
    },
    workflow: {
      overline: '它怎么工作',
      title: '把 Claude Code 想成一个会自循环的任务流水线',
      intro:
        '下面这 5 步，基本就是它一轮工程任务的骨架。真正的价值不在某一步多聪明，而在于这整条回路能连续运作。',
      steps: [
        {
          step: '01',
          title: '进入任务前先读现场',
          summary: '它先吸收 prompt、会话消息、项目状态、git 信息、CLAUDE.md、memory 等上下文。',
          details: ['目标不是“听到问题”，而是“知道自己正身处什么环境”。', '这一步决定后面是否会判断失真。'],
        },
        {
          step: '02',
          title: '先判断该答还是该动手',
          summary: '模型先判断：现在直接回答够不够，还是必须调用工具去看、去跑、去修改。',
          details: ['如果上下文已经足够，它可能直接解释。', '如果信息不足或任务需要执行，就进入 tool_use。'],
        },
        {
          step: '03',
          title: '把工具当作执行层',
          summary: '文件读写、搜索、Bash、Web、子代理、插件等能力在这里真正发生作用。',
          details: ['模型负责决策，工具负责把决策落地。', '没有这层，系统就只剩“会说”。'],
        },
        {
          step: '04',
          title: '读回结果，再决定下一轮',
          summary: '工具返回结果后，系统不会结束，而是继续判断：是否成功、是否还缺信息、是否需要补一刀。',
          details: ['这就是 agent loop 的核心。', '推进复杂任务时，真正的价值往往出现在第 2 到第 6 轮。'],
        },
        {
          step: '05',
          title: '靠恢复机制活过长任务',
          summary: '权限、预算、fallback、compact、stop hooks、任务恢复，这些机制让它不至于在长流程里散掉。',
          details: ['系统不是靠“永不犯错”稳定。', '而是靠“出错后还能继续工作”稳定。'],
        },
      ],
    },
    system: {
      overline: '系统由什么组成',
      title: '理解这 4 层，你就抓住了 Claude Code 的骨架',
      intro:
        '如果首页只留一张图，我会保留这 4 层：输入界面、上下文系统、工具执行层、循环内核。后面的很多设计都只是把这四层做得更稳。',
      cards: [
        {
          title: 'Interface Layer',
          body: 'CLI、TUI、命令入口、交互式选择器，负责把用户目标送进系统。',
          bullets: ['用户看见的是这里。', '“怎么开始一次任务”由这层决定。'],
        },
        {
          title: 'Context Layer',
          body: '把消息历史、git、CLAUDE.md、memory、项目路径这些状态整理成可用上下文。',
          bullets: ['上下文不是附加信息，而是运行时状态。', '决定模型判断时的视野宽度。'],
        },
        {
          title: 'Tool Layer',
          body: '文件、Shell、搜索、Web、MCP、任务系统、子代理等执行能力。',
          bullets: ['这层定义“它到底能做什么”。', '也是它和普通问答 AI 拉开差距的关键。'],
        },
        {
          title: 'Query Loop Core',
          body: '真正的心脏：读取上下文、发起响应、调用工具、读回结果、继续或停止。',
          bullets: ['系统价值主要出在这里。', '这决定它是不是一个真正的工程代理。'],
        },
      ],
    },
    walkthrough: {
      overline: '真实案例 walkthrough',
      title: '如果让 Claude Code 修一个 bug，它通常不是“想一下”，而是这样一路做下去',
      intro:
        '下面是一个更贴近新手理解的例子。不是抽象定义，而是你真的把一个任务交给它时，它大概率会怎么推进。',
      scenarioLabel: '场景',
      scenarioTitle: '修一个前端页面构建失败 / 显示异常的问题',
      scenarioSummary:
        '用户给出目标后，Claude Code 不会只猜原因，而是会逐步读代码、跑命令、看报错、改文件、再验证。',
      stages: [
        {
          title: '先定位问题范围',
          body: '它会先读相关文件、看项目结构、必要时跑构建或测试，确认到底是依赖问题、类型问题、样式问题还是逻辑问题。',
          output: '不是“我猜是这里”，而是先把问题边界收窄。',
        },
        {
          title: '再决定最小修复动作',
          body: '确认问题后，它通常会优先选择最小且可验证的修改，而不是上来大改一片。',
          output: '这一步体现的是工程判断，而不是文案生成。',
        },
        {
          title: '修改后立即验证',
          body: '改完会再跑 build、lint、测试或直接查看输出，确保修改不是“看起来合理”，而是真的成立。',
          output: '能验证的就验证，这是代理系统和纯建议系统的分界线。',
        },
        {
          title: '失败就继续下一轮',
          body: '如果第一次没修好，它不会天然结束，而是把新报错当成下一轮输入，继续排查。',
          output: '这就是 loop 的价值：失败不是终点，而是下一轮线索。',
        },
      ],
    },
    audience: {
      overline: '为什么这对新手重要',
      title: '你不需要先懂全部内部实现，但最好先建立正确直觉',
      intro:
        '很多人一开始用不好，不是因为不会提问，而是因为把它当成了错误类型的工具。',
      cards: [
        {
          title: '把它当搜索引擎，会低估它',
          body: '因为它真正强的不是“给定义”，而是“在任务里持续推进”。',
        },
        {
          title: '把它当万能自动机，也会失真',
          body: '它仍受上下文、权限、预算和工具边界约束，不是无条件全自动。',
        },
        {
          title: '最合适的理解是“受控的工程代理”',
          body: '它既比聊天工具更能执行，又比盲目自动化更强调可控与恢复。',
        },
      ],
    },
    architecture: {
      overline: '系统蓝图',
      title: '把 repo 的复杂结构压缩成一张更适合讲给人的图',
      intro:
        '左边是输入与约束，中间是循环内核，右边是执行与反馈。这张图不是源码逐行映射，而是帮助外行建立正确脑图。',
      leftTitle: '输入 / 约束',
      rightTitle: '执行 / 反馈',
      leftNodes: [
        { title: 'CLI / TUI / Commands', note: '任务从这里进入系统' },
        { title: 'Context Builder', note: '消息、git、CLAUDE.md、memory' },
        { title: 'Modes & Permissions', note: 'auto、plan、hooks、预算、边界' },
      ],
      rightNodes: [
        { title: 'Tool Pool', note: '文件、Shell、Web、MCP、任务、代理' },
        { title: 'Recovery Systems', note: 'fallback、compact、resume、stop logic' },
        { title: 'Result Stream', note: 'assistant 输出、tool_result、继续下一轮' },
      ],
      centerTitle: 'Query Loop Engine',
      centerBody: '决定下一步说什么、做什么、何时继续、何时停止。真正把模型变成工程代理的，就是这颗心脏。',
      footer: '如果只记一句：Claude Code 的价值不在“某一轮说得多聪明”，而在“它能否把整个任务连续推进下去”。',
    },
    roadmap: {
      overline: '下一步可以继续做什么',
      title: '这版已经更像产品页了，但还可以继续往“完整导览站”进化',
      intro: '如果继续往下做，我建议优先补强案例、模块专题和交互式图示。',
      items: [
        {
          phase: 'Now',
          status: '第二版已完成方向',
          items: ['更强的首页叙事', '案例驱动 section', '更清晰的认知分层', '双语统一数据结构'],
        },
        {
          phase: 'Next',
          status: '建议下一轮',
          items: ['加入真实 repo 任务拆解示例', '增加 Tools / Permissions 专题页', '补更细的 workflow 动画或 stepper'],
        },
        {
          phase: 'Later',
          status: '更完整文档站',
          items: ['支持多页面信息架构', '加入版本演进时间线', '扩展为面向新人的 Claude Code 学习站'],
        },
      ],
    },
    footer: {
      note: '本页不是源码镜像，而是基于参考仓库的结构、执行模式与关键文件信号，提炼出的新手导览版本。目标不是穷举实现细节，而是先帮读者建立正确 mental model。',
      sourceLabel: 'Reference',
      sourceText: 'JavaZeroo/claude-code repository structure and behavior notes',
    },
  },
  en: {
    meta: {
      languageName: 'English',
      switchLabel: '切换到中文',
      badge: 'Claude Code Guide v2',
      repoLabel: 'Reference Repo',
    },
    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'positioning', label: 'What it is' },
      { id: 'workflow', label: 'How it works' },
      { id: 'walkthrough', label: 'Walkthrough' },
      { id: 'architecture', label: 'Blueprint' },
      { id: 'roadmap', label: 'Next' },
    ],
    hero: {
      eyebrow: 'Claude Code / A beginner-friendly guide to its software design and workflow',
      title: 'Claude Code is not “a chatbot inside a terminal.” It is an engineering agent that keeps pushing tasks forward.',
      subtitle:
        'It reads project context, decides the next move, invokes tools, inspects outcomes, and iterates — which makes it feel closer to a working CLI system than a simple answer box.',
      summary:
        'This version is designed for first-time readers: build the right intuition first, then understand the core loop, the key system objects, and why the architecture matters for real engineering work.',
      primaryCta: 'Start with what it is',
      secondaryCta: 'Jump to a real scenario',
      repoNote: 'Distilled from the structure and behavioral signals in JavaZeroo/claude-code',
      metrics: [
        {
          value: 'Loop-based',
          label: 'Core mechanism',
          note: 'It does not simply answer once. It judges, acts, and re-checks repeatedly.',
        },
        {
          value: 'Tool-native',
          label: 'Real source of power',
          note: 'Reading files, editing files, running commands, and searching are what make it agentic.',
        },
        {
          value: 'Stateful',
          label: 'Operating model',
          note: 'Context, permissions, history, and tool outputs continuously reshape decisions.',
        },
      ],
    },
    positioning: {
      overline: 'What it really is',
      title: 'In one sentence: Claude Code is a terminal-native agent system for multi-step engineering execution',
      intro:
        'Many people first frame it as “a stronger coding chatbot.” That is understandable, but incomplete. A more accurate mental model is: a model brain, tool limbs, and an execution loop that keeps advancing the task.',
      cards: [
        {
          title: 'It is not only there to answer',
          body: 'A chat-style AI mainly explains or suggests. Claude Code can directly inspect, edit, run, and verify within allowed bounds.',
        },
        {
          title: 'It is not a one-shot action',
          body: 'The point is not a final paragraph of text. The point is moving the task forward turn after turn until it is done, blocked, or stopped.',
        },
        {
          title: 'It is not just a model with a shell wrapper',
          body: 'The repo structure shows that commands, tools, context assembly, and recovery systems are all first-class parts of the design.',
        },
      ],
    },
    workflow: {
      overline: 'How it works',
      title: 'Think of Claude Code as a self-looping task pipeline',
      intro:
        'These five steps are the skeleton of a typical engineering task. The value is not that one step is magical, but that the whole loop can keep operating.',
      steps: [
        {
          step: '01',
          title: 'Read the scene before acting',
          summary: 'It first ingests the prompt, conversation state, project state, git info, CLAUDE.md, memory, and other runtime context.',
          details: ['The goal is not merely to hear the request, but to know the environment in which the task exists.', 'That determines whether later judgments are grounded or distorted.'],
        },
        {
          step: '02',
          title: 'Decide whether to answer or act',
          summary: 'The model judges whether the task can be answered immediately or whether tools must be invoked to inspect, execute, or modify.',
          details: ['If current context is enough, it may explain directly.', 'If information or action is needed, it enters tool_use.'],
        },
        {
          step: '03',
          title: 'Use tools as the execution layer',
          summary: 'File I/O, search, Bash, web, sub-agents, and plugin-backed capabilities do the concrete work here.',
          details: ['The model handles decisions; the tools make those decisions real.', 'Without this layer, the system would only be articulate, not operative.'],
        },
        {
          step: '04',
          title: 'Read the result and run another turn',
          summary: 'After tools return results, the system decides whether the task is solved, still incomplete, or newly clarified by fresh evidence.',
          details: ['This is the heart of the agent loop.', 'In complex work, the real value often appears on turns two through six.'],
        },
        {
          step: '05',
          title: 'Stay alive with recovery systems',
          summary: 'Permissions, budgets, fallback paths, compaction, stop hooks, and resume logic are what keep long tasks from falling apart.',
          details: ['The system is not stable because it never fails.', 'It is stable because it can continue after failure.'],
        },
      ],
    },
    system: {
      overline: 'What the system is made of',
      title: 'Understand these four layers and you understand the backbone',
      intro:
        'If I had to reduce the homepage to one conceptual frame, I would keep these four layers: interface, context, tools, and the looping core. Most other design choices are there to make those layers hold up under pressure.',
      cards: [
        {
          title: 'Interface Layer',
          body: 'CLI, TUI, command entrypoints, and selectors that let the user start and shape work.',
          bullets: ['This is what the user sees first.', 'It defines how a task enters the system.'],
        },
        {
          title: 'Context Layer',
          body: 'The machinery that assembles message history, git state, CLAUDE.md, memory, and project facts into usable runtime context.',
          bullets: ['Context is not a side note; it is live state.', 'It determines how wide and grounded the model’s view is.'],
        },
        {
          title: 'Tool Layer',
          body: 'Files, shell, search, web, MCP, task systems, and sub-agents: the capability surface that turns intent into operations.',
          bullets: ['This layer defines what the system can actually do.', 'It is a major reason it differs from answer-only AI.'],
        },
        {
          title: 'Query Loop Core',
          body: 'The heart that reads context, responds, invokes tools, inspects results, and decides whether to continue.',
          bullets: ['Most of the system value is concentrated here.', 'This is what makes it an engineering agent rather than a shell skin.'],
        },
      ],
    },
    walkthrough: {
      overline: 'A real-world walkthrough',
      title: 'If you ask Claude Code to fix a bug, it usually does not just “think once” — it works through a sequence like this',
      intro:
        'This example is more intuitive for beginners than abstract definitions. It shows what the system tends to do when given a concrete engineering task.',
      scenarioLabel: 'Scenario',
      scenarioTitle: 'Fixing a broken frontend build or a rendering issue',
      scenarioSummary:
        'After receiving the goal, Claude Code typically inspects code, runs commands, reads errors, edits files, and verifies again rather than simply guessing.',
      stages: [
        {
          title: 'First narrow the problem boundary',
          body: 'It reads the relevant files, inspects the project layout, and often runs build or test commands to determine whether the issue is dependency-related, type-related, styling-related, or logical.',
          output: 'The first output is usually a narrowed problem space, not a dramatic guess.',
        },
        {
          title: 'Then choose the smallest repair that can be tested',
          body: 'Once the likely cause is known, it often prefers the smallest plausible fix rather than broad speculative rewrites.',
          output: 'That shows engineering judgment, not just language generation.',
        },
        {
          title: 'Verify immediately after the change',
          body: 'After editing, it tends to run build, lint, tests, or inspect output again so the change is validated rather than merely persuasive.',
          output: 'What can be checked gets checked. That is a major boundary between an agent system and a suggestion system.',
        },
        {
          title: 'If it fails, the next turn starts from that failure',
          body: 'A failed first attempt does not have to terminate the task. The new error becomes fresh evidence for the next loop iteration.',
          output: 'That is the power of the loop: failure becomes input, not just defeat.',
        },
      ],
    },
    audience: {
      overline: 'Why this matters for beginners',
      title: 'You do not need all the internals first, but you do want the right intuition early',
      intro:
        'Many people underuse or misuse the tool not because they cannot write prompts, but because they put it in the wrong mental category.',
      cards: [
        {
          title: 'Treat it like a search engine and you will underestimate it',
          body: 'Its real strength is not static definition lookup, but sustained task progression.',
        },
        {
          title: 'Treat it like a magical automaton and you will also get it wrong',
          body: 'It still operates under context limits, permissions, budgets, and explicit tool boundaries.',
        },
        {
          title: 'The best framing is “a controlled engineering agent”',
          body: 'It executes far more than a chat tool, but it is still built around guardrails, recovery, and bounded action.',
        },
      ],
    },
    architecture: {
      overline: 'System blueprint',
      title: 'Compressing a complex repo into a human-explainable map',
      intro:
        'Inputs and constraints on the left, the loop engine in the middle, execution and feedback on the right. This is not a line-by-line code map; it is a teaching map.',
      leftTitle: 'Input / Constraints',
      rightTitle: 'Execution / Feedback',
      leftNodes: [
        { title: 'CLI / TUI / Commands', note: 'Where tasks enter the system' },
        { title: 'Context Builder', note: 'Messages, git, CLAUDE.md, memory' },
        { title: 'Modes & Permissions', note: 'auto, plan, hooks, budgets, boundaries' },
      ],
      rightNodes: [
        { title: 'Tool Pool', note: 'Files, shell, web, MCP, tasks, agents' },
        { title: 'Recovery Systems', note: 'fallback, compact, resume, stop logic' },
        { title: 'Result Stream', note: 'assistant output, tool_result, next turn' },
      ],
      centerTitle: 'Query Loop Engine',
      centerBody: 'The heart that decides what to say next, what to do next, when to continue, and when to stop. This is what turns a model into an engineering agent.',
      footer: 'If you remember one line, remember this: the value of Claude Code is not whether one answer is clever, but whether the whole task can keep moving forward.',
    },
    roadmap: {
      overline: 'What could come next',
      title: 'This already feels more like a product page, but it can still evolve into a fuller learning site',
      intro: 'If we keep going, I would prioritize stronger case studies, module-specific chapters, and more interactive diagrams.',
      items: [
        {
          phase: 'Now',
          status: 'Direction completed in v2',
          items: ['Stronger homepage narrative', 'Case-driven section', 'Clearer conceptual hierarchy', 'Unified bilingual data structure'],
        },
        {
          phase: 'Next',
          status: 'Best next iteration',
          items: ['Add real repo task breakdowns', 'Create Tools / Permissions topic pages', 'Introduce richer workflow motion or steppers'],
        },
        {
          phase: 'Later',
          status: 'Toward a fuller doc site',
          items: ['Support multi-page information architecture', 'Add a design evolution timeline', 'Expand into a beginner-friendly Claude Code learning site'],
        },
      ],
    },
    footer: {
      note: 'This page is not a source-code mirror. It is a beginner-oriented interpretation distilled from the reference repo structure, execution patterns, and architectural signals. The purpose is not exhaustive implementation detail, but fast and accurate intuition.',
      sourceLabel: 'Reference',
      sourceText: 'JavaZeroo/claude-code repository structure and behavior notes',
    },
  },
}
