// English site text content

export const siteContent = {
  meta: {
    title: "Jane Doe | Designer & Developer",
    description:
      "Personal portfolio and blog showcasing design work, development projects, and articles on accessibility and user experience.",
  },

  navigation: {
    logo: "Jane Doe",
    links: {
      blog: "Blog",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    resume: "Resume",
    menuButton: "Menu",
  },

  hero: {
    mainTitle: "SOLVING PROBLEMS",
    secondaryTitle: "WITH CODE",
    subtitle: "Designer, Writer & Developer",
    description:
      "I design and build digital experiences with a focus on accessibility and user-centered design.",
    cta: {
      primary: "View My Work",
      secondary: "Contact Me",
    },
  },

  blog: {
    sectionTitle: "Featured Articles",
    description: "Explore my latest writings on design, development, and user experience.",
    viewAll: "View all articles",
    posts: [
      {
        date: "Jan 14, 2024",
        readTime: "5 min read",
        title: "Designing for Accessibility: A Comprehensive Guide",
        description:
          "Learn how to create accessible designs that work for everyone, regardless of their abilities.",
        link: "/blog/accessibility-guide",
      },
      {
        date: "Feb 22, 2024",
        readTime: "8 min read",
        title: "The Future of Minimalist Web Design",
        description:
          "Exploring how minimalism continues to evolve in the digital landscape and what's next.",
        link: "/blog/minimalist-design",
      },
      {
        date: "Mar 10, 2024",
        readTime: "6 min read",
        title: "Typography Tips for Better Readability",
        description:
          "Simple typography adjustments that can dramatically improve the readability of your content.",
        link: "/blog/typography-tips",
      },
    ],
  },

  projects: {
    sectionTitle: "Selected Projects",
    description: "A selection of my recent work in design and development.",
    viewAll: "View all projects",
    items: [
      {
        title: "Minimalist E-commerce Platform",
        description: "A clean, accessible shopping experience focused on typography and usability.",
        tags: ["React", "Next.js", "Tailwind"],
        link: "/projects/ecommerce",
        imageUrl:
          "https://placehold.co/800x400/111827/FFFFFF/png?text=E-commerce+Platform&font=montserrat",
      },
      {
        title: "Personal Finance Dashboard",
        description:
          "An accessible dashboard with high contrast visuals for financial data tracking.",
        tags: ["TypeScript", "D3.js", "Tailwind"],
        link: "/projects/finance-dashboard",
        imageUrl:
          "https://placehold.co/800x400/111827/FFFFFF/png?text=Finance+Dashboard&font=montserrat",
      },
    ],
  },

  about: {
    sectionTitle: "About Me",
    profileImage: "https://placehold.co/400x400/111827/FFFFFF/png?text=JD&font=montserrat",
    imageAlt: "Jane Doe",
    paragraphs: [
      "I'm a designer and developer with over 8 years of experience creating digital products. I specialize in creating minimal, accessible interfaces that prioritize user experience.",
      "My approach combines clean aesthetics with functional design principles. I believe that the best designs are those that feel invisible to the user, allowing them to accomplish their goals without friction.",
      "When I'm not designing or coding, you can find me writing about design, accessibility, and the intersection of technology and human experience.",
    ],
    moreButton: "More About Me",
  },

  newsletter: {
    sectionTitle: "Stay Updated",
    description:
      "Subscribe to my newsletter for articles on design, accessibility, and development.",
    inputPlaceholder: "Enter your email",
    inputAriaLabel: "Email address",
    buttonText: "Subscribe",
    privacyNote: "I respect your privacy. Unsubscribe at any time.",
  },

  footer: {
    logo: "Jane Doe",
    tagline: "Designer & Developer",
    copyright: (year: number) => `© ${year} Jane Doe. All rights reserved.`,
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    socialAriaLabels: {
      twitter: "Twitter",
      github: "GitHub",
    },
  },
};
