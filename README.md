# Introducing [Astro Micro 🔬](https://astro-micro.vercel.app/)

Astro Micro is an accessible theme for Astro. It's a fork of [Mark Horn's](https://github.com/markhorn-dev) popular theme [Astro Nano](https://astro-nano-demo.vercel.app/). Like Nano, Micro comes with zero frameworks installed.

Micro adds features like [Pagefind](https://pagefind.app) for search, [Giscus](https://giscus.app) for comments, and more. For a full list of changes, see this [blog post](https://astro-micro.vercel.app/blog/00-micro-changelog).

Micro still comes with everything great about Nano — full type safety, a sitemap, an RSS feed, and Markdown + MDX support. Styled with TailwindCSS and preconfigured with system, light, and dark themes.

## Using PNPM

This project uses [PNPM](https://pnpm.io/) as the package manager. PNPM is fast and efficient, saving disk space by using a content-addressable store.

### Getting Started

1. Make sure you have PNPM installed:

   ```bash
   npm install -g pnpm
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run development server:
   ```bash
   pnpm dev
   ```

### Common Commands

- **Start dev server**: `pnpm dev`
- **Build for production**: `pnpm build`
- **Preview production build**: `pnpm preview`
- **Format code**: `pnpm format`
- **Lint code**: `pnpm lint`

### Adding Dependencies

- **Add a dependency**: `pnpm add package-name`
- **Add a dev dependency**: `pnpm add -D package-name`

---

![astro-micro](https://github.com/user-attachments/assets/fc9b55b9-53e5-4933-9d23-936e1c61e6c2)
