import { useMemo, useState } from 'react'
import './App.css'
import { content, type Locale, type ModuleKey, type PageKey } from './data'

function App() {
  const [locale, setLocale] = useState<Locale>('zh')
  const [page, setPage] = useState<PageKey>('home')
  const [activeModule, setActiveModule] = useState<ModuleKey>('agent')
  const t = useMemo(() => content[locale], [locale])
  const module = t.map.modules.find((item) => item.key === activeModule) ?? t.map.modules[0]

  return (
    <div className="app-shell">
      <header className="topbar panel-soft">
        <div>
          <p className="badge">{t.meta.badge}</p>
          <p className="eyebrow">{t.home.overline}</p>
        </div>
        <div className="topbar-actions">
          <nav className="nav" aria-label="Primary navigation">
            {t.nav.map((item) => (
              <button
                key={item.key}
                className={`nav-tab ${page === item.key ? 'active' : ''}`}
                onClick={() => setPage(item.key)}
              >
                {item.label}
              </button>
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
        {page === 'home' && (
          <section className="page page-home">
            <section className="hero panel panel-hero">
              <div className="hero-copy">
                <p className="section-overline">{t.home.overline}</p>
                <h1>{t.home.title}</h1>
                <p className="hero-subtitle">{t.home.subtitle}</p>
                <p className="hero-summary">{t.home.summary}</p>
                <div className="cta-row">
                  <button className="button primary" onClick={() => setPage('map')}>
                    {t.home.primaryCta}
                  </button>
                  <button className="button secondary" onClick={() => setPage('build')}>
                    {t.home.secondaryCta}
                  </button>
                </div>
              </div>

              <div className="hero-system-map" aria-label={t.common.interactiveLabel}>
                <div className="system-core">Infra Core</div>
                <button className="map-node node-agent" onClick={() => { setPage('map'); setActiveModule('agent') }}>
                  Agent
                </button>
                <button className="map-node node-router" onClick={() => { setPage('map'); setActiveModule('router') }}>
                  Router
                </button>
                <button className="map-node node-context" onClick={() => { setPage('map'); setActiveModule('context') }}>
                  Context
                </button>
                <button className="map-node node-tools" onClick={() => { setPage('map'); setActiveModule('tools') }}>
                  Tools
                </button>
                <button className="map-node node-runtime" onClick={() => { setPage('map'); setActiveModule('runtime') }}>
                  Runtime
                </button>
                <button className="map-node node-delivery" onClick={() => { setPage('map'); setActiveModule('delivery') }}>
                  Delivery
                </button>
                <button className="map-node node-guardrails" onClick={() => { setPage('map'); setActiveModule('guardrails') }}>
                  Guardrails
                </button>
              </div>
            </section>

            <section className="metrics-grid">
              {t.home.metrics.map((metric) => (
                <article key={metric.label} className="metric-card panel">
                  <p className="metric-value">{metric.value}</p>
                  <h2>{metric.label}</h2>
                  <p>{metric.note}</p>
                </article>
              ))}
            </section>

            <section className="panel section-block">
              <h2>{t.home.conceptTitle}</h2>
              <div className="card-grid three-up">
                {t.home.conceptCards.map((card) => (
                  <article key={card.title} className="info-card">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel section-block flow-panel">
              <div className="section-head">
                <h2>{t.home.flowTitle}</h2>
                <p className="section-intro">{t.home.flowIntro}</p>
              </div>
              <div className="flow-stepper">
                {t.home.flowSteps.map((step, index) => (
                  <article key={step.title} className="flow-step-card">
                    <div className="flow-step-index">{index + 1}</div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel section-block">
              <h2>{t.home.outcomeTitle}</h2>
              <div className="card-grid three-up">
                {t.home.outcomeCards.map((card) => (
                  <article key={card.title} className="info-card emphasis-card">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </section>
          </section>
        )}

        {page === 'map' && (
          <section className="page page-map">
            <section className="panel section-block">
              <p className="section-overline">{t.map.overline}</p>
              <h2>{t.map.title}</h2>
              <p className="section-intro">{t.map.intro}</p>

              <div className="interactive-layout">
                <aside className="module-sidebar">
                  {t.map.modules.map((item) => (
                    <button
                      key={item.key}
                      className={`module-tab ${item.key === activeModule ? 'active' : ''}`}
                      onClick={() => setActiveModule(item.key)}
                    >
                      <span>{item.shortLabel}</span>
                      <strong>{item.title.replace(/：.*$/, '').replace(/:.*$/, '')}</strong>
                    </button>
                  ))}
                </aside>

                <div className="module-panel panel-soft">
                  <div className="module-panel-head">
                    <div>
                      <p className="section-overline">{t.map.panelTitle}</p>
                      <h3>{module.title}</h3>
                    </div>
                    <p>{t.map.panelHint}</p>
                  </div>

                  <p className="module-summary">{module.summary}</p>

                  <div className="module-grid">
                    <article className="module-card">
                      <h4>Why it exists</h4>
                      <p>{module.why}</p>
                    </article>
                    <article className="module-card">
                      <h4>{t.common.examplesLabel}</h4>
                      <ul>
                        {module.examples.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                    <article className="module-card">
                      <h4>{t.common.risksLabel}</h4>
                      <ul>
                        {module.risks.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </section>
        )}

        {page === 'build' && (
          <section className="page page-build">
            <section className="panel section-block">
              <p className="section-overline">{t.build.overline}</p>
              <h2>{t.build.title}</h2>
              <p className="section-intro">{t.build.intro}</p>

              <div className="checklist-grid">
                {t.build.sections.map((section) => (
                  <article key={section.title} className="checklist-card">
                    <h3>{section.title}</h3>
                    <p>{section.intro}</p>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel section-block">
              <h2>{t.build.principleTitle}</h2>
              <div className="card-grid three-up">
                {t.build.principles.map((item) => (
                  <article key={item.title} className="info-card warning-card">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </section>
          </section>
        )}
      </main>

      <footer className="footer panel-soft">
        <p>{t.footer.note}</p>
      </footer>
    </div>
  )
}

export default App
