import type { Metadata, Site, Socials } from "@/types";

export const SITE: Site = {
	TITLE: "kumak.dev",
	DESCRIPTION: "kumak.dev 🐸",
	EMAIL: "szymon@kumak.dev",
	URL: "https://example.com",
	NUM_POSTS_ON_HOMEPAGE: 5,
	NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION: "kumak does dev",
};

export const BLOG: Metadata = {
	TITLE: "Blog",
	DESCRIPTION: "kumak writes about dev",
};

export const PROJECTS: Metadata = {
	TITLE: "Projects",
	DESCRIPTION: "kumak makes dev",
};

export const SOCIALS: Socials = [
	{
		NAME: "GitHub",
		HREF: "https://github.com/szymdzum",
	},
];
