const vids = [
  { title: 'THE M WEDDING - FIRST DANCE', thumb: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1200&auto=format&fit=crop' },
  { title: 'MODERN VIBE', thumb: 'https://images.unsplash.com/photo-1526178612208-8b3b3c50c0a5?q=80&w=1200&auto=format&fit=crop' },
  { title: 'AMÉLIE', thumb: 'https://images.unsplash.com/photo-1512101901529-9d0e9a4d1d86?q=80&w=1200&auto=format&fit=crop' },
  { title: 'ONCE UPON A DREAM', thumb: 'https://images.unsplash.com/photo-1520975922401-3822d5dc3f03?q=80&w=1200&auto=format&fit=crop' },
  { title: 'JUST ELEGANCE', thumb: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop' },
  { title: 'INDOCHINE ROMANCE', thumb: 'https://images.unsplash.com/photo-1516919621104-77f162f26c1f?q=80&w=1200&auto=format&fit=crop' },
]
export default function VideosGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {vids.map(v => (
        <article key={v.title} className="rounded-xl overflow-hidden bg-white ring-1 ring-gray-200">
          <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${v.thumb})` }} />
          <div className="p-4">
            <h3 className="text-sm tracking-wide text-gray-700">{v.title}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}
