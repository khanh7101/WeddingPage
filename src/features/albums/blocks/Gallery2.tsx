export default function Gallery3({ images = [] as string[] }) {
  return (
    <div className="mx-auto max-w-[1180px] px-6 pb-1 md:pb-3">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {images.map((src, i) => (
          <div key={i} className="aspect-[3/4] overflow-hidden rounded-md">
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}