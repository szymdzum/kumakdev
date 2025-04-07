import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";

export default [
  // Base recommended configuration
  eslint.configs.recommended,

  // Global ignores
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      "public/pagefind/**",
      "**/*.md",
      "**/*.mdx",
    ],
  },

  // JavaScript files configuration
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        require: "readonly",
        URL: "readonly",
      },
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    },
  },

  // TypeScript files configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        require: "readonly",
        URL: "readonly",
        Element: "readonly",
        HTMLElement: "readonly",
        JSX: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },

  // Astro files configuration
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsparser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "astro/no-unused-define-vars-in-style": "error",
      "astro/no-unused-css-selector": "warn",
      "astro/prefer-class-list-directive": "error",
      "astro/semi": ["error", "always"],
    },
  },

  // Special file types (MD, MDX, D.TS) - consolidated
  {
    files: ["**/*.mdx", "**/*.md", "**/*.d.ts"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
