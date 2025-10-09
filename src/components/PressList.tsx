const posts = [
  { title: 'Tiệc cưới ánh sao huyền ảo của Siêu Mẫu Phương Mai', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16e?q=80&w=800&auto=format&fit=crop' },
  { title: 'Đám cưới Á Hậu Thanh Tú cùng Chồng Đại Gia', img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop' },
  { title: 'Đám cưới sang chảnh của Cô dâu hotgirl xinh đẹp', img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=800&auto=format&fit=crop' },
  { title: 'Đám cưới có 1 không 2', img: 'https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?q=80&w=800&auto=format&fit=crop' },
]
export default function PressList() {
  return (
    <div className="space-y-6">
      {posts.map(p => (
        <div key={p.title} className="flex gap-4 items-center">
          <img src={p.img} alt="" className="w-28 h-20 object-cover rounded-md ring-1 ring-gray-200" />
          <a href="#" className="text-lg md:text-xl text-gray-900 hover:underline">{p.title}</a>
        </div>
      ))}
    </div>
  )
}
