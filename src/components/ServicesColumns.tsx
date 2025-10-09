const cols = [
  { title: 'Thiết kế trang trí', items: ['Ý tưởng tổng quát','Màu sắc & chất liệu','Hoa, phụ kiện','Ánh sáng'] },
  { title: 'Lên kế hoạch & điều phối', items: ['Ngân sách','Timeline','Nhà cung cấp','Tổng duyệt'] },
  { title: 'Điều phối tại tiệc', items: ['Điều phối chi tiết','Giám sát chất lượng','Xử lý phát sinh'] },
]
export default function ServicesColumns() {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6 md:p-8">
      <div className="grid gap-8 md:grid-cols-3">
        {cols.map(c => (
          <div key={c.title}>
            <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {c.items.map(it => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
