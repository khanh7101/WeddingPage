// src/utils/widthCover.ts
// Tính style để luôn khớp bề ngang (width) của khung, cắt chiều cao dư cân giữa.
export function widthPriorityCover(
  naturalW: number,
  naturalH: number,
  frameW: number,
  frameH: number
) {
  if (!naturalW || !naturalH || !frameW || !frameH) {
    return {
      position: 'absolute' as const,
      left: 0,
      top: 0,
      width: '100%',
      height: 'auto',
    }
  }
  // Luôn scale để bề ngang = frameW
  const scale = frameW / naturalW
  const renderW = frameW
  const renderH = naturalH * scale

  // Căn giữa theo trục dọc; nếu renderH > frameH sẽ crop đều trên/dưới
  const top = (frameH - renderH) / 2

  return {
    position: 'absolute' as const,
    left: 0,
    top: `${top}px`,
    width: `${renderW}px`,
    height: `${renderH}px`,
  }
}
