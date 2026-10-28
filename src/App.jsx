const appSections = [
  {
    title: 'Career discovery',
    body: 'Explore tech paths, understand what each role does, and learn which skills map to real-world careers.'
  },
  {
    title: 'Concept learning',
    body: 'Follow guided walkthroughs and friendly explanations that turn technical ideas into approachable lessons.'
  },
  {
    title: 'Competition',
    body: 'Challenge classmates, climb the leaderboard, and sharpen your skills with tech quizzes and learning streaks.'
  }
]

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Tech career pathways</p>
          <h1>Leshdevs</h1>
          <p className="subtitle">
            A student-first learning hub for discovering career paths in tech, mastering core concepts,
            and competing through skills-based quizzes.
          </p>
          <div className="cta-row">
            <button className="primary">Explore roadmaps</button>
            <button className="secondary">Start a quiz</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-label">Career snapshot</div>
          <div className="roadmap-box">
            <span>Frontend</span>
            <span>Backend</span>
            <span>Cloud</span>
            <span>AI</span>
          </div>
          <div className="score-box">
            <strong>Leaderboard</strong>
            <div className="leader-row"><span>#1 Ava</span><span>9,420</span></div>
            <div className="leader-row"><span>#2 Sam</span><span>8,980</span></div>
            <div className="leader-row"><span>#3 Leo</span><span>8,440</span></div>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        {appSections.map((section) => (
          <article key={section.title} className="feature-card">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
