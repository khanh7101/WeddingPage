import type { AlbumBase } from '@/types/album'
import { Hero, TitleBlock, InfoCard, ImageText, Gallery3, Gallery2, ImageBlock } from '../blocks'
import { pickByIndex } from '@/utils/pickByIndex'

export default function Modal_2({ album }: { album: AlbumBase })  {
  const imgs = album.images
  return (
    <>
      <Hero src={album.hero} />
      <TitleBlock text={album.title} />
      <InfoCard rows={[
        { label: 'Client', value: album.couple },
        { label: 'Nationality', value: album.national ?? 'N/A' },
        { label: 'Concept', value: album.concept ?? 'N/A' },
        { label: 'Guest Number', value: album.guestNumber?.toString() ?? 'N/A' },
        { label: 'Location', value: album.location },
      ]} />
      <ImageText
        src={pickByIndex(imgs, [1])[0]}
        title="A vibrant wedding in Yen Tu, Vietnam"
        body={`Our journey with Zaklina and Dominik concluded almost 2 years of planning and preparation with a vibrant wedding, leaving us with a sweet aftertaste and numerous memories to reminisce on.`}
        align="left"
      />
      <Gallery3 images={pickByIndex(imgs, [1, 2, 3])} />
      <Gallery2 images={pickByIndex(imgs, [4, 5])} />
      <Gallery3 images={pickByIndex(imgs, [1, 2, 3])} />
      <div className="mx-auto max-w-[1180px] px-6 my-1 md:my-6"> 
        <p className="px-1 md:px-7 text-[17px] leading-7">Although the bride Zaklina has spent most of her life in Poland, she never forgets her Vietnamese roots. Therefore, for their wedding in Yen Tu, the couple decided to put Vietnamese charms into display, spreading Vietnam’s beautiful traditions to the worldwide audition.</p>
      </div>
      <Gallery2 images={pickByIndex(imgs, [1, 2, 3, 4])} />
      <ImageBlock src={pickByIndex(imgs, [9])[0]} ratio="4/5" />
      <Gallery2 images={pickByIndex(imgs, [9, 5])} />
      <Gallery3 images={pickByIndex(imgs, [1, 2, 3])} />
      <ImageText
        src={pickByIndex(imgs, [1])[0]}
        title=""
        body={`Under the enchanting embrace of Yen Tu, Vietnam, a wedding rich in culture and heritage unfolded. The bride, half Polish and half Vietnamese, chose this ethereal venue to honor her Vietnamese roots, blending the charm of tradition with her vibrant personality.`}
        align="right"
      />
      <Gallery2 images={pickByIndex(imgs, [3, 4])} />
      <div className="mx-auto max-w-[1180px] px-6 my-1 md:my-6"> 
        <p className="px-1 md:px-7 text-[17px] leading-7">One of the most heart-melting moments in their wedding in Yen Tu was definitely Zaklina’s entrance to the wedding ceremony. It was regal, powerful, and sacred at the same time, as the bride’s father walked her down the isle.</p>
      </div>
      <Gallery2 images={pickByIndex(imgs, [1, 2, 3, 4])} />
      <Gallery3 images={pickByIndex(imgs, [1, 2, 3])} />
      <div className="mx-auto max-w-[1180px] px-6 my-1 md:my-6"> 
        <p className="px-1 md:px-7 text-[17px] leading-7">Every detail reflected authenticity and elegance, from the striking red ao dai worn by the couple to the bamboo elements that adorned the celebration, creating an atmosphere brimming with Vietnamese allure.</p>
      </div>
      <Gallery2 images={pickByIndex(imgs, [6, 7])} />
      <Gallery3 images={pickByIndex(imgs, [1, 2, 3])} />
      <Gallery2 images={pickByIndex(imgs, [7, 8])} />
      <div className="mx-auto max-w-[1180px] px-6 my-1 md:my-6"> 
        <p className="px-1 md:px-7 text-[17px] leading-7">Radiant and unapologetically bold, the bride brought unmatched energy to every moment of the day. Whether exchanging vows or tearing up the dance floor, she slayed every second with grace and flair.</p>
      </div>
      <Gallery2 images={pickByIndex(imgs, [6, 7])} />
      <div className="mx-auto max-w-[1180px] px-6 my-1 md:my-6"> 
        <p className="px-1 md:px-7 text-[17px] leading-7">Watch how this wedding in Yen Tu came to be in this behind-the-scenes video.</p>
        <p className="px-1 md:px-7 text-[17px] leading-7">If you are planning to have a wedding in Vietnam, this blog will definitely help!</p>
      </div>





    </>
  )
}