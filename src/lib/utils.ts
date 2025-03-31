import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function readingTime(html: string): string {
  const textOnly = html.replace(/<[^>]+>/g, '');
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function sortByDateDesc<T extends { date: Date }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function groupByYear<T extends { date: Date }>(items: T[]): Map<number, T[]> {
  return items.reduce((acc, item) => {
    const year = item.date.getFullYear();
    const existing = acc.get(year) || [];
    acc.set(year, [...existing, item]);
    return acc;
  }, new Map<number, T[]>());
}
