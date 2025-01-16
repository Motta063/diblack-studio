import React from 'react';

export default function Gallery() {
  const images = [
    { id: 1, url: '/1.jpg.jpg', alt: 'Corte Masculino' },
    { id: 2, url: '/2.jpg.jpg', alt: 'Barba' },
    { id: 3, url: '/3.jpg.jpg', alt: 'Corte Moderno' },
    { id: 4, url: '/4.jpg.jpg', alt: 'Fade' },
    { id: 5, url: '/5.jpg.jpg', alt: 'Acabamento' },
    { id: 6, url: '/6.jpg.jpg', alt: 'Barba Feita' },
    { id: 7, url: '/7.jpg.jpg', alt: 'Corte Social' },
    { id: 8, url: '/8.jpg.jpg', alt: 'Estilo' },
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-white">Nossa Galeria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl aspect-square bg-zinc-800"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  console.error(`Erro ao carregar imagem ${image.id}:`, e);
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
