/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    "transition:persist"?: boolean | string;
    "transition:animate"?: string;
    "transition:name"?: string;
  }
}

/// <reference types="astro/content" />

declare module "astro-icon" {
  interface Props {
    name: string;
    class?: string;
  }
  const Icon: (props: Props) => JSX.Element;
  export { Icon };
}
