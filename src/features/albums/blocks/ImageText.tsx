export default function ImageText({
  src, title, body, align = 'left',
}: { src: string; title: string; body: string; align?: 'left'|'right' }) {
  const Img = (
    <div className="overflow-hidden rounded-md ">
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  )
  const Text = (
    <div className="md:max-w-[430px]">
      <h3 className="font-display text-[30px] md:text-[40px] leading-tight">{title}</h3>
      <p className="mt-4 text-[17px] leading-7 text-gray-700">{body}</p>
    </div>
  )
  return (
    <div className="mx-auto max-w-[1180px] px-6 py-1 md:py-3">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        {align === 'left' ? (<>{Img}{Text}</>) : (<>{Text}{Img}</>)}
      </div>
    </div>
  )
}
