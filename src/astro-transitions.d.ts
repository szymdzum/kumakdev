declare module 'astro:transitions' {
  interface ViewTransitionsOptions {
    fallback?: 'animate' | 'swap' | 'none';
    persist?: string[];
    handleForms?: boolean;
  }

  interface ViewTransitionsProps extends ViewTransitionsOptions {
    [key: string]: unknown;
  }

  interface ViewTransitionsComponent {
    new (props?: ViewTransitionsProps): Element;
  }

  export const ViewTransitions: ViewTransitionsComponent;
}