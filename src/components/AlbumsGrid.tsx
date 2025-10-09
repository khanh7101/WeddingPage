const items = [
  { title: 'A FEAST WITH FLAIR', img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop' },
  { title: 'LOTUS IN BLOOM', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop' },
  { title: 'A FAIRYTALE-LIKE CHARM', img: 'https://images.unsplash.com/photo-1528597460161-0401a186c2ce?q=80&w=1200&auto=format&fit=crop' },
  { title: 'A SENSE OF TROPICAL ABUNDANCE', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { title: 'A NON-TRADITIONAL WHITE', img: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1200&auto=format&fit=crop' },
  { title: 'LINH & QUANG', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
]
export default function AlbumsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map(it => (
        <article key={it.title} className="group rounded-xl overflow-hidden bg-white ring-1 ring-gray-200">
          <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${it.img})` }} />
          <div className="p-4">
            <h3 className="text-sm tracking-wide text-gray-700">{it.title}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}
