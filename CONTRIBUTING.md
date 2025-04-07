# Contributing to kumak.dev Portfolio Blog

Thank you for considering contributing to this Astro-based portfolio blog. This document outlines specific rules and guidelines to maintain consistency across the codebase and content.

## Project Structure

```
📁 /src
├── 📁 components     # Reusable UI components
├── 📁 content        # Blog posts and projects content
│   ├── 📁 blog       # Blog post content (markdown/mdx)
│   └── 📁 projects   # Projects content (markdown/mdx)
├── 📁 layouts        # Page layouts
├── 📁 lib            # Utility functions
├── 📁 pages          # Page components/routes
└── 📁 styles         # Global styles
```

## Code Style Rules

The project uses ESLint and Prettier for code formatting. Run these before submitting changes:

```bash
# Check formatting issues
npx prettier --check .

# Fix formatting issues
npx prettier --write .

# Run linting
npx eslint .
```

### TypeScript Guidelines

1. Always use proper TypeScript types; avoid using `any`
2. Create interfaces or types for all component props
3. Use named exports rather than default exports
4. Use descriptive variable and function names

### Component Rules

1. Each component should be in its own file
2. Use PascalCase for component filenames and definitions
3. Keep components small and focused on a single responsibility
4. Use Tailwind classes for styling, following the project's styling approach
5. Document complex components with comments at the top of the file

## Content Guidelines

### Blog Posts

1. Each blog post must be in its own directory inside `src/content/blog/`
2. The main content file should be named `index.md` or `index.mdx`
3. Required frontmatter fields:
   - `title`: Post title
   - `description`: Brief summary (used for SEO and previews)
   - `date`: ISO format date (YYYY-MM-DD)
4. Optional frontmatter fields:
   - `draft`: Set to `true` to prevent publishing
   - `tags`: Array of related tags

### Projects

1. Each project must be in its own directory inside `src/content/projects/`
2. Required frontmatter fields:
   - `title`: Project title
   - `description`: Brief project description
   - `date`: ISO format date (YYYY-MM-DD)
3. Optional frontmatter fields:
   - `draft`: Set to `true` to prevent publishing
   - `demoURL`: Link to live project demo
   - `repoURL`: Link to project repository

## Pull Request Process

1. Create a new branch for your changes
2. Make your changes following the guidelines above
3. Run formatting and linting checks
4. Submit a pull request with a clear description of changes
5. Ensure all checks pass before requesting review

## Best Practices

1. Keep blog posts focused on a single topic
2. Use images with descriptive alt text
3. Use semantic headings (h1, h2, etc.) in content
4. Optimize images before adding to the project
5. Test any interactive features on multiple devices
