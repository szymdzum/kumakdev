declare module "astro-pagefind/components/Search" {
  interface SearchProps {
    id?: string;
    className?: string;
    uiOptions?: {
      showImages?: boolean;
      excerptLength?: number;
      resetStyles?: boolean;
      [key: string]: boolean | number | string | undefined;
    };
  }

  const Search: (props: SearchProps) => JSX.Element;
  export default Search;
}
