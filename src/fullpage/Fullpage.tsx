// src/fullpage/Fullpage.tsx
import React, { useCallback, useEffect, useMemo, useState } from 'react'

type FullpageCtx = {
  index: number
  count: number
  goTo: (i: number) => void
  next: () => void
  prev: () => void
}
export const FullpageContext = React.createContext<FullpageCtx | null>(null)

type FullpageProps = {
  children: React.ReactNode
  /** phần tử fixed render chồng lên (vd: <Navbar/>) – KHÔNG tính là section */
  overlay?: React.ReactNode
  /** thời lượng chuyển section (ms) */
  duration?: number
  /** easing CSS cho transition */
  easing?: string
  /** section bắt đầu */
  startIndex?: number
}

/**
 * Fullpage – cuộn từng màn hình (Apple style).
 * - Hỗ trợ wheel/trackpad, keyboard, touch.
 * - Có prop `overlay` để render navbar/overlay cố định nằm trong context.
 */
export default function Fullpage({
  children,
  overlay,
  duration = 1500,
  easing = 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  startIndex = 0,
}: FullpageProps) {
  const sections = useMemo(() => React.Children.toArray(children), [children])
  const count = sections.length
  const [index, setIndex] = useState(Math.max(0, Math.min(startIndex, count - 1)))
  const [isAnimating, setAnimating] = useState(false)

  // khóa scroll body
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const goTo = useCallback((i: number) => {
    const target = Math.max(0, Math.min(i, count - 1))
    if (target === index) return
    setAnimating(true)
    setIndex(target)
    window.setTimeout(() => setAnimating(false), duration + 60)
  }, [count, duration, index])

  const next  = useCallback(() => { if (!isAnimating) goTo(index + 1) }, [goTo, index, isAnimating])
  const prev  = useCallback(() => { if (!isAnimating) goTo(index - 1) }, [goTo, index, isAnimating])

  // wheel / trackpad
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isAnimating) return
      const dy = e.deltaY
      if (Math.abs(dy) < 8) return
      dy > 0 ? next() : prev()
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [next, prev, isAnimating])

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!['ArrowDown','PageDown','Space','ArrowUp','PageUp'].includes(e.code)) return
      e.preventDefault()
      if (isAnimating) return
      ;(e.code === 'ArrowDown' || e.code === 'PageDown' || e.code === 'Space') ? next() : prev()
    }
    window.addEventListener('keydown', onKey, { passive: false })
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, isAnimating])

  // touch (swipe)
  useEffect(() => {
    let startY = 0, endY = 0
    const onStart = (e: TouchEvent) => { startY = e.touches[0].clientY }
    const onMove  = (e: TouchEvent) => { endY   = e.touches[0].clientY }
    const onEnd   = () => {
      const diff = endY - startY
      if (Math.abs(diff) < 40 || isAnimating) return
      diff < 0 ? next() : prev()
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev, isAnimating])

  const ctx: FullpageCtx = { index, count, goTo, next, prev }

  return (
    <FullpageContext.Provider value={ctx}>
      {/* overlay cố định */}
      {overlay && (
        <div className="fixed inset-x-0 top-0 z-40 pointer-events-auto">
          {overlay}
        </div>
      )}

      {/* track các section */}
      <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            transform: `translate3d(0, -${index * 100}vh, 0)`,
            transition: `transform ${duration}ms ${easing}`,
          }}
        >
          {sections.map((child, i) => (
            <section
              key={i}
              aria-hidden={i !== index}
              className="min-h-screen w-full flex items-center justify-center"
              style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
            >
              {child}
            </section>
          ))}
        </div>
      </div>
    </FullpageContext.Provider>
  )
}
