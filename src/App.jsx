import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import QRCode from './components/QRCode'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <QRCode />
      </main>
      <footer className="bg-black py-6 text-center text-zinc-500">
        <div className="container mx-auto px-4">
          <p>© 2023 DiBlack Studio 24. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}
