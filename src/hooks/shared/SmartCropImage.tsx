// src/components/SmartCropImage.tsx
import { useEffect, useRef, useState } from 'react'
import { widthPriorityCover } from '@/utils/widthCover'

type Props = {
  src: string
  alt?: string
  width: number   // px – bề ngang khung cố định
  height: number  // px – bề cao khung cố định
  className?: string
  imgClassName?: string
}

export default function SmartCropImage({
  src, alt = '', width, height, className = '', imgClassName = '',
}: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    const update = () => {
      const nW = img.naturalWidth
      const nH = img.naturalHeight
      if (!nW || !nH) return
      setStyle(widthPriorityCover(nW, nH, width, height))
    }
    if (img.complete) update()
    else img.addEventListener('load', update, { once: true })
    return () => img.removeEventListener('load', update)
  }, [src, width, height])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={`select-none pointer-events-none ${imgClassName}`}
        style={style}
      />
    </div>
  )
}
