import type { Metadata } from "next";
import { Alegreya_Sans, Piazzolla } from "next/font/google";
import "./globals.css";
import "./hamburguer.css";
import Header from "@/components/header";
import { LanguageProvider } from "@/context/LanguageContext";

const font = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-alegreya",
});

const font2 = Piazzolla({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-piazzolla",
});

export const metadata: Metadata = {
  title: "Oriana Favaro Artista",
  description:
    "Nací en la provincia de Buenos Aires en el seno de una familia de inmigrantes italianos y españoles. No había artistas en ella, pero sí aficionados y admiración por el arte.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://oriana.dev",
    siteName: "Oriana Favaro Artista",
    images: [
      {
        url: "https://oriana.dev/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oriana Favaro Artista",
      },
    ],
    title: "Oriana Favaro Artista",
    description:
      "Nací en la provincia de Buenos Aires en el seno de una familia de inmigrantes italianos y españoles. No había artistas en ella, pero sí aficionados y admiración por el arte.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-secondary ${font.variable} ${font2.variable}`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
