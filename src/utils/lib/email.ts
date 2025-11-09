import emailjs from '@emailjs/browser';

type Payload = {
  fullName: string;
  email: string;
  weddingDate: string;
  phone: string;
};

export async function sendContactEmail({ fullName, email, weddingDate, phone }: Payload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Thiếu cấu hình EmailJS (.env)');
  }

  const templateParams = {
    full_name: fullName,
    email,
    wedding_date: weddingDate,
    phone,
  } as const;

  return emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
