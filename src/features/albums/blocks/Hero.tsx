export default function Hero1({ src }: { src: string }) {
  return (
    <div className="w-full h-[260px] md:h-[360px] overflow-hidden">
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  )
}