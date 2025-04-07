// src/lib/astra-content/index.ts

import { getCollection, getEntry, type CollectionEntry } from "astro:content";

// Define collection names as a type-safe union
export type ContentCollectionName = "blog" | "projects";

/**
 * Type definitions for content and fetching operations
 */
export interface Pagination {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

export interface ContentOptions<T = Record<string, unknown>> {
  limit?: number;
  skip?: number;
  sortBy?: keyof T & string;
  sortOrder?: "asc" | "desc";
  filter?: Partial<T>;
}

export interface PaginatedContent<T> {
  items: T[];
  pagination: Pagination;
}

/**
 * Core content fetching functions
 */

/**
 * Fetch all items from a specific collection with sorting and filtering options
 */
export async function getContentItems<T extends CollectionEntry<ContentCollectionName>>(
  collectionName: ContentCollectionName,
  options: ContentOptions = {}
): Promise<T[]> {
  const { limit, skip = 0, sortBy = "date", sortOrder = "desc", filter = {} } = options;

  let items = await getCollection(collectionName);

  // Apply filters
  items = items.filter((item) => {
    return Object.entries(filter).every(([key, value]) => {
      // Handle array filters (e.g., tags)
      if (Array.isArray(item.data[key])) {
        return Array.isArray(value)
          ? value.every((v) => item.data[key].includes(v))
          : item.data[key].includes(value);
      }

      // Handle string/number/boolean fields
      return item.data[key] === value;
    });
  });

  // Apply sorting
  items = items.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.data[sortBy] < b.data[sortBy] ? -1 : 1;
    } else {
      return a.data[sortBy] > b.data[sortBy] ? -1 : 1;
    }
  });

  // Apply pagination
  if (skip > 0) {
    items = items.slice(skip);
  }

  if (limit) {
    items = items.slice(0, limit);
  }

  return items as T[];
}

/**
 * Get paginated content from a collection
 */
export async function getPaginatedContent<T extends CollectionEntry<ContentCollectionName>>(
  collectionName: ContentCollectionName,
  page: number = 1,
  pageSize: number = 10,
  options: Omit<ContentOptions, "limit" | "skip"> = {}
): Promise<PaginatedContent<T>> {
  const allItems = await getContentItems<T>(collectionName, options);
  const totalItems = allItems.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const skip = (page - 1) * pageSize;
  const items = allItems.slice(skip, skip + pageSize);

  return {
    items,
    pagination: {
      page,
      pageSize,
      totalPages,
      totalItems,
    },
  };
}

/**
 * Get a single content item by slug
 */
export async function getContentItem<T extends CollectionEntry<ContentCollectionName>>(
  collectionName: ContentCollectionName,
  slug: string
): Promise<T | null> {
  try {
    const item = await getEntry(collectionName, slug);
    return item as T;
  } catch (error) {
    console.error(`Failed to fetch content item: ${collectionName}/${slug}`, error);
    return null;
  }
}

/**
 * Get related content items based on tags or categories
 */
export async function getRelatedContent<T extends CollectionEntry<ContentCollectionName>>(
  collectionName: ContentCollectionName,
  currentSlug: string,
  relatedField: string = "tags",
  limit: number = 3
): Promise<T[]> {
  const currentItem = await getContentItem<T>(collectionName, currentSlug);
  if (!currentItem) return [];

  const currentTags = currentItem.data[relatedField] || [];
  if (!Array.isArray(currentTags) || currentTags.length === 0) return [];

  const allItems = await getContentItems<T>(collectionName);

  return allItems
    .filter((item) => item.slug !== currentSlug)
    .map((item) => {
      const itemTags = item.data[relatedField] || [];
      const matchCount = Array.isArray(itemTags)
        ? itemTags.filter((tag) => currentTags.includes(tag)).length
        : 0;

      return {
        item,
        matchCount,
      };
    })
    .sort((a, b) => b.matchCount - a.matchCount)
    .filter(({ matchCount }) => matchCount > 0)
    .map(({ item }) => item)
    .slice(0, limit);
}

/**
 * Specialized functions for common content types
 */

/**
 * Get blog posts with pagination and filtering options
 */
export async function getBlogPosts(
  options: ContentOptions = {}
): Promise<CollectionEntry<"blog">[]> {
  return getContentItems("blog", options);
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<CollectionEntry<"blog"> | null> {
  return getContentItem("blog", slug);
}

/**
 * Get paginated blog posts
 */
export async function getPaginatedBlogPosts(
  page: number = 1,
  pageSize: number = 10,
  options: Omit<ContentOptions, "limit" | "skip"> = {}
): Promise<PaginatedContent<CollectionEntry<"blog">>> {
  return getPaginatedContent("blog", page, pageSize, options);
}

/**
 * Get projects with filtering options
 */
export async function getProjects(
  options: ContentOptions = {}
): Promise<CollectionEntry<"projects">[]> {
  return getContentItems("projects", options);
}

/**
 * Get a single project by slug
 */
export async function getProject(slug: string): Promise<CollectionEntry<"projects"> | null> {
  return getContentItem("projects", slug);
}
