const tests = [
  { name: 'KHÁNH LINH & VIỆT ANH', date: '09.11.2024', quote: 'Một bữa tiệc mang đậm dấu ấn riêng.', img:'https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1200&auto=format&fit=crop'},
  { name: 'KHÁNH VÂN & MẠNH CƯỜNG', date: '25.09.2023', quote: 'Chu đáo & tận tâm.', img:'https://images.unsplash.com/photo-1543528176-61b239494933?q=80&w=1200&auto=format&fit=crop' },
  { name: 'TRÀ LINH & THỤY ANH', date: '11.03.2023', quote: 'Đẹp, hoành tráng và cảm xúc.', img:'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
]
export default function TestimonialsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {tests.map(t => (
        <article key={t.name} className="bg-white ring-1 ring-gray-200 rounded-xl overflow-hidden">
          <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${t.img})` }} />
          <div className="p-4">
            <h3 className="text-gray-900">{t.name}</h3>
            <p className="text-xs text-gray-500">{t.date}</p>
            <p className="mt-3 text-gray-700">{t.quote}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
