'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Lightbulb, MessageSquare, Network } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from 'react'

export function CLevelTalks() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://embed.lu.ma/checkout-button.js"
    script.async = true
    script.id = "luma-checkout"
    
    script.onload = () => {
      if (window.luma) {
        window.luma.initCheckout()
      }
    }
    
    document.body.appendChild(script)

    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 2000)

    return () => {
      const existingScript = document.getElementById("luma-checkout")
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
      clearInterval(testimonialInterval)
    }
  }, [])

  const testimonials = [
    "Una experiencia única para conectar con líderes de la industria y aprender de sus experiencias.",
    "El evento superó mis expectativas. Obtuve insights valiosos para mi negocio.",
    "La calidad de los speakers y la organización fueron excepcionales.",
    "Una oportunidad increíble para hacer networking y crecer profesionalmente."
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#230052] to-[#A31F6B]" style={{ backgroundImage: 'linear-gradient(12deg, #000000, #230052, #A31F6B)' }}>
      {/* Hero Section */}
      <section className="bg-[#230052] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-start mb-12">
            <Image
              src="/images/logos/Xplora.png"
              alt="Xplora Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <Image
              src="/images/logos/UCEMA.png"
              alt="UCEMA Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </div>
          
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/images/logos/clevel.png"
                alt="C-Level Talks"
                width={484}
                height={212}
                className="mx-auto w-full max-w-xl"
                priority
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Charlas con líderes de las empresas más grandes e innovadoras de Argentina
            </p>
          
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="text-[#cdff43]" />
                <span>26 de Noviembre</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-[#cdff43]" />
                <span>18:00 hs</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#cdff43]" />
                <span>UCEMA Av. Córdoba 374</span>
              </div>
            </div>

            <a
              href="https://lu.ma/event/evt-VSCJbfpUm2dlqCo"
              className="luma-checkout--button inline-block bg-[#cdff43] text-[#000000] hover:bg-[#b8e63b] font-bold px-8 py-3 rounded-md"
              data-luma-action="checkout"
              data-luma-event-id="evt-VSCJbfpUm2dlqCo"
            >
              Inscribirse al evento
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#230052]">Lo que dicen nuestros participantes</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-[#230052] text-white h-40 flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <p className="text-gray-200 text-lg transition-opacity duration-500">
                  {testimonials[testimonialIndex]}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-white py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué hace ÚNICO este EVENTO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, text: "Conectate con los líderes más destacados de la industria" },
              { icon: Lightbulb, text: "Aprende estrategias de crecimiento probadas" },
              { icon: Network, text: "Networking con otros emprendedores" },
              { icon: MessageSquare, text: "Sesión de Q&A exclusiva" }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <feature.icon className="text-[#cdff43] h-8 w-8 flex-shrink-0 mt-1" />
                <p className="text-gray-200 text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="text-white py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Speakers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Waltuch",
                role: "Líder Comercial en Google Argentina",
                company: "Google",
                image: "/images/speakers/Foto-Alex.png",
                description: "Con más de 10 años de experiencia en el sector tecnológico, Alex lidera estrategias comerciales innovadoras en Google Argentina."
              },
              {
                name: "Valeria Abadi",
                role: "SVP Brand Global en Globant",
                company: "Globant",
                image: "/images/speakers/Foto-Valeria.png",
                description: "Valeria es una experta en branding global, impulsando la visión de Globant en mercados internacionales con estrategias creativas y efectivas."
              },
              {
                name: "Tomás Mindlin",
                role: "CEO y Co-Fundador de Tapi",
                company: "Tapi",
                image: "/images/speakers/Foto-Tomas.png",
                description: "Emprendedor serial, Tomás ha revolucionado la industria fintech con Tapi, ofreciendo soluciones innovadoras para pagos digitales."
              }
            ].map((speaker) => (
              <Card key={speaker.name} className="bg-[#230052]/50 border-[#cdff43] border p-4 flex flex-col items-center text-center">
                <CardContent className="p-0">
                  <div className="w-32 h-32 relative mb-4 mx-auto">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#cdff43]">{speaker.name}</h3>
                  <p className="text-gray-200 mb-2">{speaker.role}</p>
                  <p className="text-sm text-gray-300">{speaker.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-white py-16 px-4 bg-[#230052]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Estás preparado para conocer a los líderes de la industria?</h2>
          <p className="text-xl mb-8">Inscríbete ahora y no pierdas esta oportunidad única</p>
          <a
            href="https://lu.ma/event/evt-VSCJbfpUm2dlqCo"
            className="luma-checkout--button inline-block bg-[#cdff43] text-[#000000] hover:bg-[#b8e63b] font-bold px-8 py-4 rounded-md text-lg"
            data-luma-action="checkout"
            data-luma-event-id="evt-VSCJbfpUm2dlqCo"
          >
            Inscribirse al evento
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-200 py-8 px-4 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p>Organizado por Club de Emprendedores UCEMA - Xplora</p>
        </div>
      </footer>
    </div>
  )
}