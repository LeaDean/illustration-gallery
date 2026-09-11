import { useState } from 'react'
import { Gallery } from './components/Gallery'
import { Lightbox } from './components/Lightbox'
import { illustrations, type Illustration } from './data/illustrations'
import './App.css'

/** Change the site title here (also update index.html <title>). */
export const SITE_TITLE = 'Illustrations'

function App() {
  const [active, setActive] = useState<Illustration | null>(null)

  return (
    <div className="page">
      <header className="site-header">
        <h1>{SITE_TITLE}</h1>
        <p className="intro">
          by Katy Rana Dean
        </p>
      </header>

      <main>
        <Gallery items={illustrations} onSelect={setActive} />
      </main>

      <footer className="site-footer">
        <p>Illustration gallery · built with Vite &amp; React</p>
      </footer>

      {active && (
        <Lightbox item={active} onClose={() => setActive(null)} />
      )}
    </div>
  )
}

export default App
