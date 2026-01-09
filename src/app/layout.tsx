import type { Metadata } from "next";
import { Alegreya_Sans, Piazzolla } from "next/font/google";
import "./globals.css";
import "./hamburguer.css";
import Header from "@/components/header";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-secondary ${font.variable} ${font2.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
