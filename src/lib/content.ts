import { siteContent as enContent } from "../content/site-text/en";
import { siteContent as plContent } from "../content/site-text/pl";

export type Language = "en" | "pl";

// Content mapping for different languages
const contentMap = {
	en: enContent,
	pl: plContent,
};

// Default language
export const DEFAULT_LANGUAGE: Language = "en";

/**
 * Get the site content for the specified language
 * @param lang The language code
 * @returns The site content in the requested language
 */
export function getSiteContent(lang: Language = DEFAULT_LANGUAGE): SiteContent {
	return contentMap[lang];
}

/**
 * Type for the site content structure
 */
export type SiteContent = typeof enContent;
