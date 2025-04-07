// Polish site text content

export const siteContent = {
  meta: {
    title: "Jane Doe | Projektant & Programista",
    description:
      "Portfolio osobiste i blog prezentujący projekty, prace programistyczne i artykuły na temat dostępności i doświadczenia użytkownika.",
  },

  navigation: {
    logo: "Jane Doe",
    links: {
      blog: "Blog",
      projects: "Projekty",
      about: "O mnie",
      contact: "Kontakt",
    },
    resume: "CV",
    menuButton: "Menu",
  },

  hero: {
    mainTitle: "ROZWIĄZYWANIE PROBLEMÓW",
    secondaryTitle: "Z KODEM",
    subtitle: "Projektant, Autor & Programista",
    description:
      "Projektuję i tworzę cyfrowe doświadczenia z naciskiem na dostępność i design skoncentrowany na użytkowniku.",
    cta: {
      primary: "Zobacz moje prace",
      secondary: "Skontaktuj się",
    },
  },

  blog: {
    sectionTitle: "Wybrane Artykuły",
    description:
      "Odkryj moje najnowsze teksty na temat designu, programowania i doświadczenia użytkownika.",
    viewAll: "Zobacz wszystkie artykuły",
    posts: [
      {
        date: "14 Sty 2024",
        readTime: "5 min czytania",
        title: "Projektowanie z myślą o dostępności: Kompletny przewodnik",
        description:
          "Dowiedz się, jak tworzyć dostępne projekty, które działają dla wszystkich, niezależnie od ich możliwości.",
        link: "/blog/accessibility-guide",
      },
      {
        date: "22 Lut 2024",
        readTime: "8 min czytania",
        title: "Przyszłość minimalistycznego designu w sieci",
        description:
          "Odkryj, jak minimalizm nadal ewoluuje w cyfrowym krajobrazie i co nas czeka w przyszłości.",
        link: "/blog/minimalist-design",
      },
      {
        date: "10 Mar 2024",
        readTime: "6 min czytania",
        title: "Wskazówki typograficzne dla lepszej czytelności",
        description:
          "Proste dostosowania typograficzne, które mogą znacząco poprawić czytelność Twojej treści.",
        link: "/blog/typography-tips",
      },
    ],
  },

  projects: {
    sectionTitle: "Wybrane Projekty",
    description: "Wybór moich ostatnich prac z zakresu projektowania i programowania.",
    viewAll: "Zobacz wszystkie projekty",
    items: [
      {
        title: "Minimalistyczna Platforma E-commerce",
        description:
          "Czyste, dostępne doświadczenie zakupowe skupione na typografii i użyteczności.",
        tags: ["React", "Next.js", "Tailwind"],
        link: "/projects/ecommerce",
        imageUrl:
          "https://placehold.co/800x400/111827/FFFFFF/png?text=E-commerce+Platform&font=montserrat",
      },
      {
        title: "Panel Finansów Osobistych",
        description:
          "Dostępny dashboard z wizualizacjami o wysokim kontraście do śledzenia danych finansowych.",
        tags: ["TypeScript", "D3.js", "Tailwind"],
        link: "/projects/finance-dashboard",
        imageUrl:
          "https://placehold.co/800x400/111827/FFFFFF/png?text=Finance+Dashboard&font=montserrat",
      },
    ],
  },

  about: {
    sectionTitle: "O Mnie",
    profileImage: "https://placehold.co/400x400/111827/FFFFFF/png?text=JD&font=montserrat",
    imageAlt: "Jane Doe",
    paragraphs: [
      "Jestem projektantem i programistą z ponad 8-letnim doświadczeniem w tworzeniu produktów cyfrowych. Specjalizuję się w tworzeniu minimalnych, dostępnych interfejsów, które priorytetowo traktują doświadczenie użytkownika.",
      "Moje podejście łączy czystą estetykę z funkcjonalnymi zasadami projektowania. Wierzę, że najlepsze projekty to te, które są niewidoczne dla użytkownika, pozwalając im osiągnąć swoje cele bez przeszkód.",
      "Kiedy nie projektuję ani nie koduję, możesz znaleźć mnie piszącego o designie, dostępności i przecięciu technologii z ludzkim doświadczeniem.",
    ],
    moreButton: "Więcej o mnie",
  },

  newsletter: {
    sectionTitle: "Bądź na bieżąco",
    description:
      "Zapisz się do mojego newslettera, aby otrzymywać artykuły o projektowaniu, dostępności i programowaniu.",
    inputPlaceholder: "Wprowadź swój email",
    inputAriaLabel: "Adres email",
    buttonText: "Zapisz się",
    privacyNote: "Szanuję Twoją prywatność. Możesz zrezygnować w każdej chwili.",
  },

  footer: {
    logo: "Jane Doe",
    tagline: "Projektant & Programista",
    copyright: (year: number) => `© ${year} Jane Doe. Wszelkie prawa zastrzeżone.`,
    links: {
      privacy: "Polityka prywatności",
      terms: "Warunki korzystania",
    },
    socialAriaLabels: {
      twitter: "Twitter",
      github: "GitHub",
    },
  },
};
