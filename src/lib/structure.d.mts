export type LayoutEntry = {
  path: string; group: string; owner: string; sources: string[];
  title?: string; desc?: string; lead?: string; toc?: boolean;
};
export const layout: LayoutEntry[];
export const legacy: Record<string, string>;
export function slug(s: string): string;
export function oldToNew(): Record<string, string>;
export function redirects(): { source: string; destination: string; permanent: boolean }[];
