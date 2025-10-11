export type AlbumBase = {
  id: number;            // bạn yêu cầu id = number
  title: string;
  couple: string;
  national?: string;
  concept?: string;
  guestNumber?: number;
  location: string;
  cover: string;
  hero: string;
  images: string[];
};