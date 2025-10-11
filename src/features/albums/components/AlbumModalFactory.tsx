import { JSX, lazy, Suspense } from 'react';
import type { AlbumBase } from '@/types/album';

// Đăng ký modal per id (code-splitting)
const MODALS: Record<number, React.LazyExoticComponent<(p:{album:AlbumBase})=>JSX.Element>> = {
  1: lazy(() => import('../modals/Modal_1')),
  2: lazy(() => import('../modals/Modal_2')),
  3: lazy(() => import('../modals/Modal_3')),
};

// Fallback (nếu chưa có file riêng)
const Fallback = ({ album }: { album: AlbumBase }) => (
  <div className="mx-auto max-w-[980px] px-6 py-12">
    <h2 className="text-center font-display text-[36px] md:text-[52px]">{album.title}</h2>
    <p className="mt-6 text-center text-gray-600">Trang chi tiết đang được cập nhật.</p>
  </div>
);

export default function AlbumModalFactory({ album }: { album: AlbumBase }) {
  const Impl = MODALS[album.id] ?? (Fallback as any);
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading…</div>}>
      <Impl album={album} />
    </Suspense>
  );
}
