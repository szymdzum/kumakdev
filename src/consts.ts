export const SITE = {
  TITLE: "kumak.dev",
  DESCRIPTION: "kumak.dev 🐸",
  EMAIL: "szymon@kumak.dev",
  URL: "https://example.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
} as const;

export const HOME = {
  TITLE: "Home",
  DESCRIPTION: "kumak does dev",
} as const;

export const BLOG = {
  TITLE: "Blog",
  DESCRIPTION: "kumak writes about dev",
} as const;

export const PROJECTS = {
  TITLE: "Projects",
  DESCRIPTION: "kumak makes dev",
} as const;

export const SOCIALS = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/szymdzum",
  },
] as const;
