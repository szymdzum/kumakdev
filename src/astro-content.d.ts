declare module "astro:content" {
	export type CollectionEntry<T extends keyof typeof collections> = {
		data: T extends "blog"
			? {
					title: string;
					description: string;
					date: Date;
					draft?: boolean;
					tags?: string[];
				}
			: T extends "projects"
				? {
						title: string;
						description: string;
						date: Date;
						draft?: boolean;
						demoURL?: string;
						repoURL?: string;
					}
				: never;
		id: string;
		collection: T;
		body: string;
		slug: string;
		render: () => Promise<{
			Content: unknown;
			headings: { depth: number; slug: string; text: string }[];
			remarkPluginFrontmatter: Record<string, unknown>;
		}>;
	};

	export function getCollection<T extends keyof typeof collections>(
		collection: T,
	): Promise<CollectionEntry<T>[]>;

	export function getEntry<T extends keyof typeof collections>(
		collection: T,
		slug: string,
	): Promise<CollectionEntry<T>>;

	export const collections: {
		blog: CollectionSchema;
		projects: CollectionSchema;
	};

	export type CollectionSchema = {
		type: string;
		schema: unknown;
	};
}
