import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <AnimatePresence>
        {!loading && (
          <div key="app">
            <Navbar />
            <main>
              <Home />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
