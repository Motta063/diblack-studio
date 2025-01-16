import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl mb-4">DiBlack Studio 24</h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-300">Estilo e Precisão em Cada Corte</p>
        <a href="https://wa.me/5594991095133" 
           className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center gap-2"
           target="_blank" 
           rel="noopener noreferrer">
          <FaWhatsapp /> Agende seu Horário
        </a>
      </div>
    </div>
  )
}
