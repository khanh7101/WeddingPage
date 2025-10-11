// src/components/AlbumCard.tsx
import SmartCropImage from '@/shared/SmartCropImage'
import type { AlbumBase as AlbumCardType } from '@/types/album'
import { CSSProperties } from 'react'

const BG_CARD = 'bg-[#F3F1E7]'

type FrameLayout = { w: number; h: number }
type CardLayout = {
  overlap: number   // card đè lên ảnh bao nhiêu px (bottom âm)
  reserve: number   // article chừa chỗ bên dưới
  marginX: number   // khoảng cách 2 bên khi center
  width?: number    // nếu muốn set cứng; bỏ qua sẽ tự tính theo frame
  align: 'left' | 'center' | 'right'
}

/** 👉 Chỉnh duy nhất tại đây để ảnh/card đổi đồng loạt */
const DEFAULT_LAYOUT: { frame: FrameLayout; card: CardLayout } = {
  frame: { w: 400, h: 550 },
  card:  { overlap: 56, reserve: 56, marginX: 24, align: 'center' }, 
}

type LayoutOverride = Partial<{
  frame: Partial<FrameLayout>
  card: Partial<CardLayout>
}>

// Tính style của card theo align; truyền thêm frameW để auto width khi center
function computeBoxStyle(card: CardLayout, frameW: number): CSSProperties {
  const bottom = -card.overlap
  if (card.align === 'center') {
    const w = card.width ?? (frameW - card.marginX * 2) // cách đều 2 bên
    return { left: '50%', transform: 'translateX(-50%)', bottom, width: w }
  }
  if (card.align === 'right') {
    const w = card.width ?? (frameW - card.marginX)
    return { right: card.marginX, bottom, width: w }
  }
  // left
  const w = card.width ?? (frameW - card.marginX)
  return { left: card.marginX, bottom, width: w }
}

export default function AlbumCard({
  item,
  onViewMore,
  layout,
}: {
  item: AlbumCardType
  onViewMore?: (id: number) => void
  layout?: LayoutOverride
}) {
  const frame: FrameLayout = { ...DEFAULT_LAYOUT.frame, ...(layout?.frame || {}) }
  const card: CardLayout  = { ...DEFAULT_LAYOUT.card,  ...(layout?.card  || {}) }
  const boxStyle = computeBoxStyle(card, frame.w)

  return (
    <article
      className="relative"
      style={{ width: frame.w, paddingBottom: card.reserve }}
    >
      {/* ẢNH (mốc relative) */}
      <div
        className="relative rounded-xl shadow-lg bg-gray-100 overflow-hidden"
        style={{ width: frame.w, height: frame.h }}
      >
        <SmartCropImage
          src={item.cover}
          alt={item.title}
          width={frame.w}
          height={frame.h}
          className="w-full h-full"
        />
      </div>

      {/* CARD (absolute, z-10, canh giữa ảnh & cách đều 2 bên) */}
      <div
        className={`absolute z-10 rounded-md shadow-sm ${BG_CARD} p-6`}
        style={boxStyle}
      >
        <p className="font-serif text-[15px] text-gray-700">
          {item.couple} <span className="mx-1">|</span> {item.location}
        </p>
        <h3 className="font-display text-[28px] leading-tight tracking-tight mt-1">
          {item.title}
        </h3>
        <button
          onClick={() => onViewMore?.(item.id)}
          className="group mt-4 inline-flex items-center gap-2 font-sans"
        >
          <span className="transition-transform group-hover:translate-x-1 ">→</span>
          <span className=" decoration-2 underline-offset-4 text-lg">View More</span>
        </button>
      </div>
    </article>
  )
}
