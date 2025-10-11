import type { AlbumBase } from '@/types/album'
import { Hero, TitleBlock, InfoCard, ImageText, Gallery3, Gallery2, ImageBlock } from '../blocks'
import { pickByIndex } from '@/utils/pickByIndex'

export default function Modal_1({ album }: { album: AlbumBase }) {
  // Dữ liệu luôn tồn tại theo type => không cần fallback
  const imgs = album.images

  return (
    <>
      <Hero src={album.hero} />

      <TitleBlock text={album.title} />

      <InfoCard rows={[
        { label: 'Client', value: album.couple },
        { label: 'Location', value: album.location },
        { label: 'Project', value: album.title },
      ]} />

      <ImageText
        src={pickByIndex(imgs, [1])[0]}
        title="A luxurious ballroom wedding in Sai Gon"
        body={`From the deepest threads of love and timeless elegance,
               this celebration was crafted to capture the essence
               of the couple’s new chapter.`}
        align="left"
      />

      <Gallery2 images={pickByIndex(imgs, [1, 2, 3])} />

      <ImageBlock src={pickByIndex(imgs, [4])[0]} ratio="4/5" />

      <Gallery3 images={pickByIndex(imgs, [1, 2, 3])} />

      <div className="mx-auto max-w-[1180px] px-6 pb-12 md:pb-20">
        <ImageText
          src={imgs[0]}
          title={`A luxurious ballroom wedding in ${album.location}`}
          body={`From the deepest threads of love and timeless elegance,
                 this celebration was crafted to capture the essence
                 of the couple’s new chapter.`}
          align="right"
        />
      </div>

      <Gallery3 images={imgs.slice(0, 9)} />
    </>
  )
}
