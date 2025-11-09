import { homeByName } from "@/utils/assetMaps";

export const headerMap: Record<string, string | null> = {
  "/": homeByName["banner.avif"] ?? null,
  "/about": homeByName["hero-about.jpg"] ?? null,
  "/contact": null, // không hiển thị hình nền cho trang Contact
  "/product": homeByName["hero-product.jpg"] ?? null,
  // thêm route khác ở đây
};