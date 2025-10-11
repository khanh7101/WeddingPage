export default function ImageBlock({
  src, ratio,
}: { src: string; ratio?: string }) {
  return (
    <div className="mx-auto max-w-[1180px] px-6 pb-1 md:pb-3">
      <div className={`w-full overflow-hidden rounded-md ${ratio ? `aspect-[${ratio}]` : ''}`}>
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
