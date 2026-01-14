import { Facebook, Instagram } from "./icons";

export const nav = [
  {
    name: "Oriana",
    name_en: "Oriana",
    href: "/oriana",
    color: "rgb(183, 34, 112)",
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
    submenu: [],
  },
];

export const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
];
