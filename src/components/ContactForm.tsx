import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendContactEmail } from '@/lib/email';

type FormValues = {
  fullName: string;
  email: string;
  weddingDate: string; // ISO yyyy-mm-dd
  phone: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: { fullName: '', email: '', weddingDate: '', phone: '' },
  });

  const [status, setStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const onSubmit = async (values: FormValues) => {
    setStatus(null);
    try {
      await sendContactEmail(values);
      setStatus({ type: 'success', message: 'Đã gửi thành công! Chúng tôi sẽ liên hệ sớm.' });
      reset();
    } catch (e) {
      console.error(e);
      setStatus({ type: 'error', message: 'Gửi thất bại. Vui lòng thử lại sau.' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-800">Họ và tên</label>
          <input
            type="text"
            {...register('fullName', { required: 'Vui lòng nhập họ tên', minLength: { value: 2, message: 'Ít nhất 2 ký tự' } })}
            placeholder="VD: Nguyễn An"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blush-500"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Vui lòng nhập email',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email không hợp lệ' },
            })}
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blush-500"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">Ngày cưới</label>
          <input
            type="date"
            {...register('weddingDate', { required: 'Vui lòng chọn ngày cưới' })}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blush-500"
          />
          {errors.weddingDate && <p className="mt-1 text-sm text-red-600">{errors.weddingDate.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">Số điện thoại</label>
          <input
            type="tel"
            {...register('phone', {
              required: 'Vui lòng nhập số điện thoại',
              pattern: { value: /^[+]?\d[\d\s-]{7,14}$/, message: 'Số điện thoại không hợp lệ' },
            })}
            placeholder="VD: 0987 654 321"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blush-500"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-xl bg-blush-600 py-3 text-white font-medium hover:bg-blush-700 disabled:opacity-60"
      >
        {isSubmitting ? 'Đang gửi…' : 'Gửi thông tin'}
      </button>

      {status && (
        <p
          className={`mt-3 text-center text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
        >
          {status.message}
        </p>
      )}

      <p className="mt-4 text-xs text-gray-500 text-center">
        Bằng cách gửi, bạn đồng ý để chúng tôi liên hệ tư vấn theo thông tin đã cung cấp.
      </p>
    </form>
  );
}
