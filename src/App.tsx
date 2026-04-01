import { useMemo, useState } from 'react'
import './App.css'
import { content, type Locale } from './data'

function App() {
  const [locale, setLocale] = useState<Locale>('zh')
  const t = useMemo(() => content[locale], [locale])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="badge">{t.meta.badge}</p>
          <p className="eyebrow">{t.hero.eyebrow}</p>
        </div>
        <div className="topbar-actions">
          <nav className="nav" aria-label="Primary navigation">
            {t.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="lang-switch"
            onClick={() => setLocale((prev) => (prev === 'zh' ? 'en' : 'zh'))}
            aria-label={t.meta.switchLabel}
          >
            {t.meta.languageName}
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero panel panel-hero">
          <div className="hero-copy">
            <p className="section-overline">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-summary">{t.hero.summary}</p>
            <div className="cta-row">
              <a className="button primary" href="#positioning">
                {t.hero.primaryCta}
              </a>
              <a className="button secondary" href="#walkthrough">
                {t.hero.secondaryCta}
              </a>
            </div>
            <div className="hero-repo-note">
              <span>{t.meta.repoLabel}</span>
              <strong>{t.hero.repoNote}</strong>
            </div>
          </div>

          <div className="hero-visual" aria-label="Claude Code loop illustration">
            <div className="visual-orbit visual-orbit-a"></div>
            <div className="visual-orbit visual-orbit-b"></div>
            <div className="hero-core-card">
              <span className="mono-label">ENGINE</span>
              <strong>Query Loop</strong>
              <p>context → decide → tool_use → result → continue</p>
            </div>
            <div className="floating-card card-entry">
              <span className="mono-label">INPUT</span>
              <strong>Task + Context</strong>
              <p>prompt, repo, git, memory, rules</p>
            </div>
            <div className="floating-card card-tools">
              <span className="mono-label">TOOLS</span>
              <strong>Files / Shell / Web</strong>
              <p>execution surfaces that make work real</p>
            </div>
            <div className="floating-card card-guardrails">
              <span className="mono-label">GUARDRAILS</span>
              <strong>Modes + Recovery</strong>
              <p>permissions, compact, resume, stop hooks</p>
            </div>
          </div>
        </section>

        <section className="metrics-grid">
          {t.hero.metrics.map((metric) => (
            <article key={metric.label} className="metric-card panel">
              <p className="metric-value">{metric.value}</p>
              <h2>{metric.label}</h2>
              <p>{metric.note}</p>
            </article>
          ))}
        </section>

        <section id="positioning" className="panel section-block">
          <p className="section-overline">{t.positioning.overline}</p>
          <h2>{t.positioning.title}</h2>
          <p className="section-intro">{t.positioning.intro}</p>
          <div className="card-grid three-up">
            {t.positioning.cards.map((card) => (
              <article key={card.title} className="info-card emphasis-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="panel section-block workflow-block">
          <div className="section-head split-head">
            <div>
              <p className="section-overline">{t.workflow.overline}</p>
              <h2>{t.workflow.title}</h2>
            </div>
            <p className="section-intro narrow">{t.workflow.intro}</p>
          </div>
          <div className="workflow-list">
            {t.workflow.steps.map((step) => (
              <article key={step.step} className="workflow-step">
                <div className="workflow-index">{step.step}</div>
                <div className="workflow-body">
                  <h3>{step.title}</h3>
                  <p className="workflow-summary">{step.summary}</p>
                  <ul>
                    {step.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-grid balanced-grid">
          <article className="panel section-block compact-block">
            <p className="section-overline">{t.system.overline}</p>
            <h2>{t.system.title}</h2>
            <p className="section-intro">{t.system.intro}</p>
            <div className="system-grid">
              {t.system.cards.map((card) => (
                <article key={card.title} className="system-card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <ul>
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>

          <article className="panel section-block compact-block audience-block">
            <p className="section-overline">{t.audience.overline}</p>
            <h2>{t.audience.title}</h2>
            <p className="section-intro">{t.audience.intro}</p>
            <div className="audience-list">
              {t.audience.cards.map((card) => (
                <div key={card.title} className="audience-item">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="walkthrough" className="panel section-block walkthrough-block">
          <div className="section-head split-head walkthrough-head">
            <div>
              <p className="section-overline">{t.walkthrough.overline}</p>
              <h2>{t.walkthrough.title}</h2>
            </div>
            <p className="section-intro narrow">{t.walkthrough.intro}</p>
          </div>

          <div className="scenario-card">
            <span className="mono-label">{t.walkthrough.scenarioLabel}</span>
            <h3>{t.walkthrough.scenarioTitle}</h3>
            <p>{t.walkthrough.scenarioSummary}</p>
          </div>

          <div className="timeline">
            {t.walkthrough.stages.map((stage, index) => (
              <article key={stage.title} className="timeline-item">
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="timeline-content">
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                  <div className="timeline-output">
                    <strong>Output</strong>
                    <span>{stage.output}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="panel section-block architecture-block">
          <p className="section-overline">{t.architecture.overline}</p>
          <h2>{t.architecture.title}</h2>
          <p className="section-intro">{t.architecture.intro}</p>
          <div className="architecture-grid">
            <div className="arch-column">
              <p className="arch-label">{t.architecture.leftTitle}</p>
              {t.architecture.leftNodes.map((node) => (
                <article key={node.title} className="arch-node">
                  <h3>{node.title}</h3>
                  <p>{node.note}</p>
                </article>
              ))}
            </div>
            <div className="arch-center">
              <div className="arch-heart">
                <span className="mono-label">CORE</span>
                <strong>{t.architecture.centerTitle}</strong>
                <p>{t.architecture.centerBody}</p>
              </div>
            </div>
            <div className="arch-column">
              <p className="arch-label">{t.architecture.rightTitle}</p>
              {t.architecture.rightNodes.map((node) => (
                <article key={node.title} className="arch-node">
                  <h3>{node.title}</h3>
                  <p>{node.note}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="architecture-footer">{t.architecture.footer}</p>
        </section>

        <section id="roadmap" className="panel section-block">
          <p className="section-overline">{t.roadmap.overline}</p>
          <h2>{t.roadmap.title}</h2>
          <p className="section-intro">{t.roadmap.intro}</p>
          <div className="roadmap-grid">
            {t.roadmap.items.map((item) => (
              <article key={item.phase} className="roadmap-card">
                <div className="roadmap-head">
                  <span>{item.phase}</span>
                  <strong>{item.status}</strong>
                </div>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer panel">
        <p>{t.footer.note}</p>
        <div className="footer-meta">
          <span>{t.footer.sourceLabel}</span>
          <strong>{t.footer.sourceText}</strong>
        </div>
      </footer>
    </div>
  )
}

export default App
