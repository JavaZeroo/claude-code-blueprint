export type Locale = 'zh' | 'en'
export type ModuleKey = 'agent' | 'router' | 'context' | 'tools' | 'runtime' | 'delivery' | 'guardrails'

export type ModuleNode = {
  key: ModuleKey
  label: string
  title: string
  blurb: string
}

export type FlowNode = {
  id: string
  title: string
  body: string
}

export type ChecklistBranch = {
  title: string
  children: string[]
}

export type SiteCopy = {
  meta: {
    badge: string
    languageName: string
    switchLabel: string
  }
  nav: {
    overview: string
    flow: string
    mindmap: string
  }
  hero: {
    overline: string
    title: string
    subtitle: string
    summary: string
  }
  graph: {
    overline: string
    title: string
    intro: string
    centerLabel: string
    nodes: ModuleNode[]
    detailTitle: string
    detailHint: string
  }
  flow: {
    overline: string
    title: string
    intro: string
    nodes: FlowNode[]
  }
  mindmap: {
    overline: string
    title: string
    intro: string
    center: string
    branches: ChecklistBranch[]
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
    nav: {
      overview: '系统关系图',
      flow: '任务流程图',
      mindmap: '搭建脑图',
    },
    hero: {
      overline: '不是文档站，而是可视化导览',
      title: 'Vibe coding 真正值得理解的，不是某个 agent 本身，而是它背后的整套基建关系。',
      subtitle:
        '这一版不再试图用一长页文字解释，而是用系统图、流程图、思维导图，把“整套基建在做什么”直接展示出来。',
      summary:
        '你可以把它理解成：让 AI 从“会说”变成“会做”的基础设施地图。Claude Code 只是其中一个执行器，不是整套系统本身。',
    },
    graph: {
      overline: '系统关系图',
      title: '先看整个系统的组成关系：哪些层在一起，哪些层彼此依赖。',
      intro:
        '中间是整个 vibe coding infra，周围每个节点代表一层基础设施。点击节点可以查看它的作用。',
      centerLabel: 'Vibe Coding Infra',
      detailTitle: '当前节点说明',
      detailHint: '点周围节点查看说明',
      nodes: [
        {
          key: 'agent',
          label: 'Agent',
          title: 'Agent = 真正执行任务的智能体',
          blurb: 'Claude Code、Codex、OpenCode 这些都是执行器。它们负责理解任务、调用工具、推进修改。',
        },
        {
          key: 'router',
          label: 'Router',
          title: 'Router = 决定任务该交给谁',
          blurb: '这一层处理路由策略，例如 Claude 优先、Codex fallback，或者按任务类型分发。',
        },
        {
          key: 'context',
          label: 'Context',
          title: 'Context = 把工程现场喂给 agent',
          blurb: 'repo、git、规则文件、memory、当前目录，这些都属于 agent 做判断时需要看到的上下文。',
        },
        {
          key: 'tools',
          label: 'Tools',
          title: 'Tools = 让 agent 有手有脚',
          blurb: '文件读写、Shell、Web、浏览器、GitHub、部署接口，这一层决定它能不能真正做事。',
        },
        {
          key: 'runtime',
          label: 'Runtime',
          title: 'Runtime = 管理任务生命周期',
          blurb: 'session、后台任务、等待、继续、恢复、停止，这些都属于 runtime 负责的部分。',
        },
        {
          key: 'delivery',
          label: 'Delivery',
          title: 'Delivery = 把结果送回工程系统',
          blurb: 'git push、PR、Pages、消息通知，交付层负责闭环。',
        },
        {
          key: 'guardrails',
          label: 'Guardrails',
          title: 'Guardrails = 边界、预算、审批和恢复规则',
          blurb: '没有 guardrails，agent 越能做事，就越不可信。它是长期可用性的保障。',
        },
      ],
    },
    flow: {
      overline: '任务流程图',
      title: '再看一条任务是怎么流过这套系统的。',
      intro:
        '从一个用户需求开始，到最终变成代码、部署或通知，中间每一层都扮演不同角色。',
      nodes: [
        {
          id: 'task',
          title: '用户任务',
          body: '“修 bug”、“改页面”、“部署站点” 这种真实工程目标。',
        },
        {
          id: 'route',
          title: 'Router 判断',
          body: '决定直接回答、交给哪个 agent、还是准备 fallback。',
        },
        {
          id: 'read',
          title: '读取上下文',
          body: '读 repo、git、规则文件、历史消息、memory。',
        },
        {
          id: 'act',
          title: 'Tools 执行',
          body: '读写文件、跑命令、搜资料、开浏览器、调外部服务。',
        },
        {
          id: 'loop',
          title: 'Runtime 循环',
          body: '失败就继续、等待就挂起、成功就收尾。',
        },
        {
          id: 'ship',
          title: 'Delivery 交付',
          body: 'push、PR、Pages、消息通知，真正把结果送出去。',
        },
      ],
    },
    mindmap: {
      overline: '搭建脑图',
      title: '如果你自己要搭一套，这些就是脑子里必须有的分支。',
      intro:
        '这不是安装教程，而是一张“思考地图”：搭 vibe coding infra 时，到底要想清哪些模块。',
      center: 'Build Your Own Vibe Coding Stack',
      branches: [
        {
          title: 'Agent 选择',
          children: ['主 agent 选谁', '是否要备用 agent', '不同任务是否分工'],
        },
        {
          title: 'Router 策略',
          children: ['Claude 优先 / Codex fallback', '按任务类型分流', '按成本或权限分流'],
        },
        {
          title: 'Context 来源',
          children: ['repo / cwd', 'git 状态', '规则文件', 'memory / 会话历史'],
        },
        {
          title: 'Tools 接入',
          children: ['文件读写', 'Shell / 构建测试', 'Web / Browser', 'GitHub / 外部 API'],
        },
        {
          title: 'Runtime 编排',
          children: ['session', '后台任务', '等待与恢复', 'heartbeat / cron'],
        },
        {
          title: 'Delivery 闭环',
          children: ['git push', 'PR / Pages', '通知与汇报', '日志与审计'],
        },
      ],
    },
    footer: {
      note: '这一版的目标不是把所有实现细节讲完，而是先用图形把“整套 vibe coding 基建的关系和流程”讲清。',
    },
  },
  en: {
    meta: {
      badge: 'Vibe Coding Infra Blueprint',
      languageName: 'English',
      switchLabel: '切换到中文',
    },
    nav: {
      overview: 'System Graph',
      flow: 'Task Flow',
      mindmap: 'Build Mindmap',
    },
    hero: {
      overline: 'Not a document wall, but a visual guide',
      title: 'What matters in vibe coding is not one agent by itself, but the infrastructure relationships around it.',
      subtitle:
        'This version stops trying to explain everything in long text. Instead, it uses a system graph, a task flow, and a build mindmap to show what the stack is actually doing.',
      summary:
        'You can think of it as a map of the infrastructure that turns AI from “can talk” into “can work.” Claude Code is one executor inside that map, not the whole system.',
    },
    graph: {
      overline: 'System graph',
      title: 'Start with the system relationships: which layers exist, and which ones depend on each other.',
      intro:
        'The center is the whole vibe coding infra. Each surrounding node is one infrastructure layer. Click nodes to inspect them.',
      centerLabel: 'Vibe Coding Infra',
      detailTitle: 'Current node',
      detailHint: 'Click the surrounding nodes to inspect',
      nodes: [
        {
          key: 'agent',
          label: 'Agent',
          title: 'Agent = the intelligence that executes work',
          blurb: 'Claude Code, Codex, and OpenCode are executors. They interpret work, call tools, and move changes forward.',
        },
        {
          key: 'router',
          label: 'Router',
          title: 'Router = decides where the task should go',
          blurb: 'This layer handles strategy such as Claude first, Codex fallback, or routing by task type.',
        },
        {
          key: 'context',
          label: 'Context',
          title: 'Context = feeds the engineering scene into the agent',
          blurb: 'Repo state, git, rules files, memory, and working directory all belong to the context layer.',
        },
        {
          key: 'tools',
          label: 'Tools',
          title: 'Tools = the agent’s hands and feet',
          blurb: 'File I/O, shell, web, browser, GitHub, and deployment APIs define whether the agent can truly act.',
        },
        {
          key: 'runtime',
          label: 'Runtime',
          title: 'Runtime = manages task lifecycle',
          blurb: 'Sessions, background jobs, waiting, continuation, resume, and stop behavior live here.',
        },
        {
          key: 'delivery',
          label: 'Delivery',
          title: 'Delivery = sends results back into engineering systems',
          blurb: 'git push, PRs, Pages, and notifications all belong to the closing loop of delivery.',
        },
        {
          key: 'guardrails',
          label: 'Guardrails',
          title: 'Guardrails = boundaries, budgets, approvals, and recovery',
          blurb: 'Without guardrails, the more power an agent has, the less trustworthy it becomes over time.',
        },
      ],
    },
    flow: {
      overline: 'Task flow',
      title: 'Now look at how a real task moves through the system.',
      intro:
        'A user request becomes code, deployment, or notification only because different layers play different roles along the way.',
      nodes: [
        {
          id: 'task',
          title: 'User Task',
          body: 'A real engineering goal like fixing a bug, changing a page, or deploying a site.',
        },
        {
          id: 'route',
          title: 'Router Decision',
          body: 'Decide whether to answer directly, use a given agent, or prepare fallback.',
        },
        {
          id: 'read',
          title: 'Read Context',
          body: 'Read repo state, git, rules files, history, and memory.',
        },
        {
          id: 'act',
          title: 'Tools Execute',
          body: 'Read/write files, run commands, search, open browsers, call services.',
        },
        {
          id: 'loop',
          title: 'Runtime Loop',
          body: 'If it fails, continue. If it waits, suspend. If it succeeds, wrap up.',
        },
        {
          id: 'ship',
          title: 'Delivery',
          body: 'push, PR, Pages, or notification: the result finally lands somewhere real.',
        },
      ],
    },
    mindmap: {
      overline: 'Build mindmap',
      title: 'If you want to build your own stack, these are the branches your brain needs to hold.',
      intro:
        'This is not an install guide. It is a thinking map for what must be considered when building vibe coding infrastructure.',
      center: 'Build Your Own Vibe Coding Stack',
      branches: [
        {
          title: 'Agent Choice',
          children: ['Which primary agent?', 'Need a backup executor?', 'Different agents for different tasks?'],
        },
        {
          title: 'Router Strategy',
          children: ['Claude first / Codex fallback', 'Route by task type', 'Route by budget or permissions'],
        },
        {
          title: 'Context Sources',
          children: ['repo / cwd', 'git state', 'rules files', 'memory / session history'],
        },
        {
          title: 'Tool Integration',
          children: ['file I/O', 'shell / build / test', 'web / browser', 'GitHub / external APIs'],
        },
        {
          title: 'Runtime Orchestration',
          children: ['session', 'background jobs', 'wait / resume', 'heartbeat / cron'],
        },
        {
          title: 'Delivery Loop',
          children: ['git push', 'PR / Pages', 'notifications', 'logs and audit'],
        },
      ],
    },
    footer: {
      note: 'The goal of this version is not to exhaust implementation detail, but to explain the full vibe coding infrastructure through relationships, flow, and visual structure.',
    },
  },
}
