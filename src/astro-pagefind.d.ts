declare module 'astro-pagefind/components/Search' {
  interface SearchProps {
    id?: string;
    className?: string;
    uiOptions?: {
      showImages?: boolean;
      excerptLength?: number;
      resetStyles?: boolean;
      [key: string]: any;
    };
  }

  const Search: (props: SearchProps) => any;
  export default Search;
}