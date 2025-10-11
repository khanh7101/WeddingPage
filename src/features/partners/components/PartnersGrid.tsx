const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/8/88/Sheraton_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JW_Marriott_hotels_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a0/InterContinental_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9e/Pan_Pacific_Hotels_and_Resorts_logo.svg',
]
export default function PartnersGrid() {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {logos.map(src => (
          <div key={src} className="aspect-square bg-white rounded-lg p-6 flex items-center justify-center ring-1 ring-gray-200">
            <img src={src} alt="partner" className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
