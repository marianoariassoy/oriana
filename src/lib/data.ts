import { Facebook, Instagram, TikTok } from "./icons";

export const nav = [
  {
    name: "Oriana",
    name_en: "Oriana",
    href: "/oriana",
    color: "rgb(183, 34, 112)",
    description: `Nací en la provincia de Buenos Aires en el seno de una familia de inmigrantes italianos y españoles. No había artistas en ella, pero sí aficionados y admiración por el arte.

Mi primer interés artístico declarado fue a corta edad cuando quise aprender a tocar el piano. Había escuchado “Para Elisa” y sentí la necesidad de poder tocar esa música. De producir esa música yo misma.`,
    description_en: `I was born in the province of Buenos Aires in the seno of a family of immigrants from Italy and Spain. I didn't have any artists in me, but I had admiration and love for the art.

My first artistic interest was declared when I was a child, I wanted to learn
to play the piano. I had heard “Para Elisa” and felt the need to be able to
play that music. I wanted to produce that music.`,
    submenu: [
      {
        name: "Cronología",
        name_en: "Chronology",
        href: "/oriana/cronologia",
      },
      {
        name: "Fotos",
        name_en: "Photos",
        href: "/oriana/fotos",
      },
      {
        name: "Mi mundo",
        name_en: "My world",
        href: "/oriana/mi-mundo",
      },
    ],
  },
  {
    name: "Música",
    name_en: "Music",
    href: "/musica",
    color: "rgb(82, 79, 161)",
    description: `No sería quien soy sin la música en mi vida...`,
    description_en: `I wouldn't be who I am without music in my life...`,
    submenu: [
      {
        name: "Ópera y más",
        name_en: "Opera and more",
        href: "/musica/opera-y-mas",
      },
      {
        name: "Popular",
        name_en: "Popular",
        href: "/musica/popular",
      },
    ],
  },
  {
    name: "Audiovisual",
    name_en: "Audiovisual",
    href: "/audiovisual",
    color: "rgb(239, 65, 54)",
    description: `Los productos de mis constantes inquietudes expresiva...`,
    description_en: `The products of my constant expressive needs...`,
    submenu: [
      {
        name: "Videos",
        name_en: "Videos",
        href: "/audiovisual/videos",
      },
      {
        name: "Fotografías",
        name_en: "Fotografías",
        href: "/audiovisual/fotografias",
      },
    ],
  },
  {
    name: "Escritos",
    name_en: "",
    href: "/escritos",
    color: "rgb(0, 167, 157)",
    description: `Del sonido al gesto, de lo dicho a lo escrito.
Hijos dispersos, mis palabras elegidas.
Aliento, fuego eterno, herida que sangra vida.`,
    description_en: `From sound to gesture, from what is said to what is written.
Distant children, my words chosen.
Alive, eternal fire, pain that kills life.`,
    submenu: [
      {
        name: "Poesía",
        name_en: "Poetry",
        href: "/escritos/poesia",
      },
      {
        name: "Cuentos",
        name_en: "Stories",
        href: "/escritos/cuentos",
      },
      {
        name: "Ensayos",
        name_en: "Essays",
        href: "/escritos/ensayos",
      },
    ],
  },
  {
    name: "Contacto",
    name_en: "Contact",
    href: "/contacto",
    color: "rgb(255, 255, 255)",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.`,
    description_en: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.`,
    submenu: [],
  },
];

export const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AlfajoresGuaymallen/",
    icon: Facebook,
    color: "rgb(106, 174, 231)",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/a_guaymallen/",
    icon: Instagram,
    color: "rgb(252, 165, 148)",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/discover/alfajores-guaymallen",
    icon: TikTok,
    color: "rgb(147, 216, 230)",
  },
];
