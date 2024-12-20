'use client'

import { Card, CardContent } from "./ui/card"
import { Calendar, Clock, MapPin, Users, Lightbulb, MessageSquare, Network } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from 'react'

// Definir una sola vez los testimonios
const TESTIMONIALS = [
  "Una experiencia única para conectar con líderes de la industria y aprender de sus experiencias.",
  "El evento superó mis expectativas. Obtuve insights valiosos para mi negocio.",
  "La calidad de los speakers y la organización fueron excepcionales.",
  "Una oportunidad increíble para hacer networking y crecer profesionalmente."
];

// Definir la interfaz para la ventana de Luma
interface LumaWindow extends Window {
  luma?: {
    initCheckout: () => void;
  };
}

// Definir las rutas de las imágenes
const IMAGES = {
  logos: {
    xplora: "/logos/Xplora.png",
    ucema: "/logos/UCEMA.png",
    clevel: "/logos/clevel.png",
    google: "/logos/google.png",
    globant: "/logos/globant.png",
    tapi: "/logos/tapi.png"
  },
  speakers: {
    alex: "/Speakers/Foto-Alex.png",
    valeria: "/Speakers/Foto-Valeria.png",
    tomas: "/Speakers/Foto-Tomas.png"
  }
};

// Array de speakers actualizado
const SPEAKERS = [
  {
    name: "Alex Waltuch",
    role: "Sector Lead Finance, Travel & Government",
    company: "Google",
    image: IMAGES.speakers.alex,
    description: "Con más de 10 años de experiencia en el sector tecnológico, Alex lidera estrategias comerciales innovadoras en Google Argentina."
  },
  {
    name: "Tomás Mindlin",
    role: "CEO y Co-Fundador",
    company: "Tapi",
    image: IMAGES.speakers.tomas,
    description: "Emprendedor serial, Tomás ha revolucionado la industria fintech con Tapi, ofreciendo soluciones innovadoras para pagos digitales."
  }
];

export function CLevelTalks() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    // Manejar el script de Luma
    const loadLumaScript = () => {
      const script = document.createElement('script');
      script.src = "https://embed.lu.ma/checkout-button.js";
      script.async = true;
      script.id = "luma-checkout";
      
      script.onload = () => {
        const lumaWindow = window as LumaWindow;
        if (lumaWindow.luma?.initCheckout) {
          lumaWindow.luma.initCheckout();
        }
      };
      
      document.body.appendChild(script);
    };

    // Manejar el intervalo de testimonios
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 2000);

    // Cargar el script de Luma
    loadLumaScript();

    // Cleanup
    return () => {
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#230052] to-[#A31F6B]" style={{ backgroundImage: 'linear-gradient(12deg, #000000, #230052, #A31F6B)' }}>
      {/* Hero Section */}
      <section className="bg-[#230052] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-start mb-12">
            <Image
              src={IMAGES.logos.xplora}
              alt="Xplora Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
              quality={100}
            />
            <Image
              src={IMAGES.logos.ucema}
              alt="UCEMA Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </div>
          
          <div className="text-center">
            <div className="mb-6">
              <Image
                src={IMAGES.logos.clevel}
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
                  {TESTIMONIALS[testimonialIndex]}
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SPEAKERS.map((speaker) => (
              <Card key={speaker.name} className="bg-[#230052]/50 border-[#cdff43] border p-6 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="w-48 h-48 relative mb-6 mx-auto">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#cdff43]">{speaker.name}</h3>
                  <p className="text-lg text-gray-200 mb-2">{speaker.role}</p>
                  <div className="h-12 w-32 relative mx-auto mb-4">
                    <Image
                      src={speaker.name === "Alex Waltuch" ? IMAGES.logos.google : IMAGES.logos.tapi}
                      alt={speaker.company}
                      fill
                      className="object-contain"
                      sizes="128px"
                      quality={100}
                    />
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">{speaker.description}</p>
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

export function GoogleTagManager() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KF9SCBK6');`
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KF9SCBK6"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}