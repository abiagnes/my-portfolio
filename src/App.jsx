import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigationType } from 'react-router-dom'
import Home from './pages/Home.jsx'
import InfoPage from './pages/InfoPage.jsx'

const Elara = lazy(() => import('./pages/elara/ElaraPage.jsx'))
const WattCare = lazy(() => import('./pages/wattcare/WattCarePage.jsx'))
const Amora = lazy(() => import('./pages/amora/AmoraPage.jsx'))
const Verdant = lazy(() => import('./pages/verdant/VerdantPage.jsx'))

// Router navigation doesn't scroll by itself: go to the #hash target, or to the top of a new page.
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') return
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) {
      target.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key, navigationType])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Suspense fallback={<div className="page-loading" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/elara" element={<Elara />} />
          <Route path="/work/wattcare" element={<WattCare />} />
          <Route path="/work/amora" element={<Amora />} />
          <Route path="/work/verdant" element={<Verdant />} />
          <Route
            path="*"
            element={<InfoPage eyebrow="404" title="Page not found" text="This page doesn't exist." />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
