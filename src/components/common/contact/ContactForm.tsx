import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendContactEmail } from '@/utils/lib/email'

type FormValues = { fullName: string; email: string; weddingDate: string; phone: string }
export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormValues>({ defaultValues: { fullName: '', email: '', weddingDate: '', phone: '' } })
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null)

  const onSubmit = async (values: FormValues) => {
    setStatus(null)
    try { await sendContactEmail(values); setStatus({ type: 'success', message: 'Đã gửi thành công! Chúng tôi sẽ liên hệ sớm.' }); reset() }
    catch { setStatus({ type: 'error', message: 'Gửi thất bại. Vui lòng thử lại sau.' }) }
  }

  const base = dark
    ? 'bg-white/5 border-white/20 text-white placeholder:text-white/60'
    : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium">{dark ? 'Họ và tên' : 'Họ và tên'}</label>
          <input type="text" {...register('fullName', { required: 'Vui lòng nhập họ tên', minLength: { value: 2, message: 'Ít nhất 2 ký tự' } })}
            placeholder="VD: Nguyễn An" className={`mt-1 w-full rounded-lg border px-3 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 ${base}`} />
          {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" {...register('email', { required: 'Vui lòng nhập email', pattern: { value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/, message: 'Email không hợp lệ' } })}
            placeholder="you@example.com" className={`mt-1 w-full rounded-lg border px-3 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 ${base}`} />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Ngày cưới</label>
          <input type="date" {...register('weddingDate', { required: 'Vui lòng chọn ngày cưới' })}
            className={`mt-1 w-full rounded-lg border px-3 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 ${base}`} />
          {errors.weddingDate && <p className="mt-1 text-sm text-red-400">{errors.weddingDate.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Số điện thoại</label>
          <input type="tel" {...register('phone', { required: 'Vui lòng nhập số điện thoại', pattern: { value: /^[+]?\\d[\\d\\s-]{7,14}$/, message: 'Số điện thoại không hợp lệ' } })}
            placeholder="VD: 0987 654 321" className={`mt-1 w-full rounded-lg border px-3 py-3 focus:outline-none focus:ring-2 focus:ring-white/40 ${base}`} />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
        </div>
      </div>
      <button type="submit" disabled={isSubmitting}
        className="mt-6 w-full rounded-xl border border-white/30 bg-white/10 py-3 text-white hover:bg-white/20 disabled:opacity-60">
        {isSubmitting ? 'Đang gửi…' : 'Gửi thông tin'}
      </button>
      {status && (
        <p className={`mt-3 text-center text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {status.message}
        </p>
      )}
    </form>
  )
}
