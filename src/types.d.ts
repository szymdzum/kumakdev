declare module "clsx" {
	export type ClassValue =
		| string
		| number
		| boolean
		| undefined
		| null
		| { [key: string]: string | number | boolean | undefined | null }
		| ClassValue[];
	export function clsx(...inputs: ClassValue[]): string;
	export default clsx;
}

declare module "tailwind-merge" {
	export function twMerge(...inputs: string[]): string;
}

declare namespace astroHTML.JSX {
	interface HTMLAttributes {
		"transition:persist"?: boolean;
		"transition:animate"?: string;
		"transition:name"?: string;
	}
}

declare module "astro:transitions" {
	interface ViewTransitionsOptions {
		fallback?: "animate" | "swap" | "none";
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
