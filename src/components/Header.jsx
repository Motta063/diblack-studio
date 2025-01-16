import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-black/95 backdrop-blur-sm py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-amber-500">DiBlack Studio 24</h1>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/diblack_studio24/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-2xl hover:text-amber-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5594991095133" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-2xl hover:text-amber-500 transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  )
}
