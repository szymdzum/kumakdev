export interface Metadata {
	TITLE: string;
	DESCRIPTION: string;
}

export interface Site extends Metadata {
	EMAIL?: string;
	URL: string;
	NUM_POSTS_ON_HOMEPAGE?: number;
	NUM_PROJECTS_ON_HOMEPAGE?: number;
}

export type Social = {
	NAME: string;
	HREF: string;
};

export type Socials = Social[];
