import { useState } from 'react';
import { albumsData } from '@/data/albums';
import AlbumCard from './AlbumCard';
import ModalShell from './ModalShell';
import AlbumModalFactory from './AlbumModalFactory';

export default function AlbumsGrid() {
  const [openId, setOpenId] = useState<number | null>(null);
  const active = albumsData.find(a => a.id === openId) ?? null;

  return (
    <>
      <div className="mx-auto  px-6">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-24">
          {albumsData.map(a => (
            <AlbumCard key={a.id} item={a} onViewMore={setOpenId} />
          ))}
        </div>
      </div>

      {active && (
        <ModalShell onClose={() => setOpenId(null)} lockBody={true}>
          <AlbumModalFactory album={active} />
        </ModalShell>
      )}
    </>
  );
}
