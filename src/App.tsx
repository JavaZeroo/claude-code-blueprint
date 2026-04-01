import { useMemo, useState } from 'react'
import './App.css'
import { content, type Locale, type ModuleKey } from './data'

function App() {
  const [locale, setLocale] = useState<Locale>('zh')
  const [activeModule, setActiveModule] = useState<ModuleKey>('agent')
  const t = useMemo(() => content[locale], [locale])
  const active = t.graph.nodes.find((node) => node.key === activeModule) ?? t.graph.nodes[0]

  return (
    <div className="app-shell">
      <header className="topbar panel-soft">
        <div>
          <p className="badge">{t.meta.badge}</p>
          <p className="eyebrow">{t.hero.overline}</p>
        </div>
        <div className="topbar-actions">
          <nav className="nav" aria-label="Section navigation">
            <a href="#graph">{t.nav.overview}</a>
            <a href="#flow">{t.nav.flow}</a>
            <a href="#mindmap">{t.nav.mindmap}</a>
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
        <section className="hero panel panel-hero">
          <div className="hero-copy">
            <p className="section-overline">{t.hero.overline}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-summary">{t.hero.summary}</p>
          </div>

          <div className="hero-pulse-map" aria-label="Animated system preview">
            <div className="pulse-core">Infra</div>
            {t.graph.nodes.map((node, index) => (
              <div key={node.key} className={`pulse-node pulse-${index + 1}`}>
                {node.label}
              </div>
            ))}
          </div>
        </section>

        <section id="graph" className="panel section-block">
          <p className="section-overline">{t.graph.overline}</p>
          <h2>{t.graph.title}</h2>
          <p className="section-intro">{t.graph.intro}</p>

          <div className="graph-layout">
            <div className="system-graph" aria-label={t.graph.title}>
              <div className="graph-center">{t.graph.centerLabel}</div>
              {t.graph.nodes.map((node, index) => (
                <button
                  key={node.key}
                  className={`graph-node graph-node-${index + 1} ${activeModule === node.key ? 'active' : ''}`}
                  onClick={() => setActiveModule(node.key)}
                >
                  {node.label}
                </button>
              ))}
            </div>

            <article className="graph-detail panel-soft">
              <p className="section-overline">{t.graph.detailTitle}</p>
              <h3>{active.title}</h3>
              <p>{active.blurb}</p>
              <small>{t.graph.detailHint}</small>
            </article>
          </div>
        </section>

        <section id="flow" className="panel section-block">
          <p className="section-overline">{t.flow.overline}</p>
          <h2>{t.flow.title}</h2>
          <p className="section-intro">{t.flow.intro}</p>

          <div className="flow-diagram">
            {t.flow.nodes.map((node, index) => (
              <div key={node.id} className="flow-node-wrap">
                <article className="flow-node">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{node.title}</h3>
                  <p>{node.body}</p>
                </article>
                {index < t.flow.nodes.length - 1 && <div className="flow-arrow" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </section>

        <section id="mindmap" className="panel section-block">
          <p className="section-overline">{t.mindmap.overline}</p>
          <h2>{t.mindmap.title}</h2>
          <p className="section-intro">{t.mindmap.intro}</p>

          <div className="mindmap-stage">
            <div className="mindmap-center">{t.mindmap.center}</div>
            <div className="mindmap-grid">
              {t.mindmap.branches.map((branch, index) => (
                <article key={branch.title} className={`mindmap-branch branch-${index + 1}`}>
                  <h3>{branch.title}</h3>
                  <ul>
                    {branch.children.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer panel-soft">
        <p>{t.footer.note}</p>
      </footer>
    </div>
  )
}

export default App
