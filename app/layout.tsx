import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "../components/GoogleTagManager";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "C-Level Talks 26/11",
  description: "Xplora te invita este 26/11 a las 18:00 en UCEMA. Descubrí estrategias de crecimiento global con líderes como Alex Waltuch (Google), Valeria Abadi (Globant) y Tomás Mindlin (Tapi). ¡Registrate ahora y potenciá tu futuro!",
  icons: [
    { rel: 'icon', url: '/logos/Xplora_Favicon.png' },
    { rel: 'shortcut icon', url: '/logos/Xplora_Favicon.png' },
    { rel: 'apple-touch-icon', url: '/logos/Xplora_Favicon.png' }
  ],
  openGraph: {
    title: "C-Level Talks: con Google, Globant y Tapi",
    description: "Xplora te invita este 26/11 a las 18:00 en UCEMA. Descubrí estrategias de crecimiento global con líderes como Alex Waltuch (Google), Valeria Abadi (Globant) y Tomás Mindlin (Tapi). ¡Registrate ahora y potenciá tu futuro!",
    images: [
      {
        url: '/logos/OG-CLEVEL.PNG',
        width: 1200,
        height: 630,
        alt: 'C-Level Talks',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <GoogleTagManager />
        <link rel="icon" href="/logos/Xplora_Favicon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
