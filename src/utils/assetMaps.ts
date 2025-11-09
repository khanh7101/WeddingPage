// src/utils/assetMaps.ts

export function toByName(modules: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(modules).map(([path, url]) => [path.split("/").pop()!, url])
  );
}

// Khai báo thư mục cần import — nhưng không loop bằng template string
export const homeByName = toByName(import.meta.glob(
  "/src/assets/images/home/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, as: "url" }
));

export const brandByName = toByName(import.meta.glob(
  "/src/assets/images/brand/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, as: "url" }
));

export const aboutByName = toByName(import.meta.glob(
  "/src/assets/images/about/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, as: "url" }
));

export const diaryByName = toByName(import.meta.glob(
  "/src/assets/images/diary/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, as: "url" }
));

export const bookingByName = toByName(import.meta.glob(
  "/src/assets/images/booking/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, as: "url" }
));

export function getImageUrl(
  byName: Record<string, string>,
  filename: string,
  fallback?: string
) {
  return byName[filename] ?? fallback ?? filename;
}
