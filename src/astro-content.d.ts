declare module 'astro:content' {
  export function getCollection(collection: string): Promise<any[]>;
  export function getEntry(collection: string, slug: string): Promise<any>;
}