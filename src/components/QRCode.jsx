import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function QRCode() {
  const currentUrl = window.location.href

  return (
    <section id="qrcode" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">Escaneie e Acesse</h2>
        <div className="inline-block bg-white p-4 rounded-xl shadow-lg">
          <QRCodeSVG 
            value={currentUrl} 
            size={200}
            level="H"
            includeMargin={true}
          />
        </div>
      </div>
    </section>
  )
}
