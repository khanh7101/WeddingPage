import type { AlbumBase } from '@/types/album';
import TitleBlock from '../blocks/TitleBlock';
import Gallery3 from '../blocks/Gallery3';
// import ContactFormSection from '../blocks/ContactFormSection';

export default function Modal_3({ album }: { album: AlbumBase }) {
  const imgs = album.images ?? [album.cover];
  return (
    <>
      <TitleBlock text={album.title} />
      <Gallery3 images={imgs} />
      {/* <ContactFormSection /> */}
    </>
  );
}
