// src/components/SectionTitle.tsx
import { ReactNode } from 'react'
export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 text-center mb-8">
      {children}
    </h2>
  )
}
