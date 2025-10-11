export default function TitleBlock({ text }: { text: string }) {
  return (
    <div className="mx-auto max-w-[980px] px-6 py-12 md:py-16">
      <h2 className="text-center font-display text-[36px] md:text-[52px] leading-tight">
        {text}
      </h2>
    </div>
  )
}
