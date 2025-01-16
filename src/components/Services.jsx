import React from 'react'
import { FaCut } from 'react-icons/fa'
import { GiRazor, GiBeard, GiScissors } from 'react-icons/gi'

export default function Services() {
  const services = [
    { 
      name: 'Corte de Cabelo', 
      price: 20,
      icon: GiScissors,
      description: 'Corte moderno personalizado'
    },
    { 
      name: 'Barba', 
      price: 15,
      icon: GiBeard,
      description: 'Acabamento perfeito'
    },
    { 
      name: 'Cabelo + Barba', 
      price: 35,
      icon: FaCut,
      description: 'Combo completo'
    },
    { 
      name: 'Cabelo + Barba + Sobrancelha', 
      price: 50,
      icon: FaCut,
      description: 'Pacote premium'
    },
    { 
      name: 'Platinado', 
      price: 100,
      icon: GiScissors,
      description: 'Transformação completa'
    },
    { 
      name: 'Sobrancelha', 
      price: 10,
      icon: GiRazor,
      description: 'Design personalizado'
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} 
                 className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-zinc-800 transition-all duration-300">
              <service.icon className="text-amber-500 text-3xl mb-4" />
              <h3 className="text-2xl mb-2">{service.name}</h3>
              <p className="text-zinc-400 mb-4">{service.description}</p>
              <p className="text-xl text-amber-500 font-bold">R$ {service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
