import { PaymentForm } from 'components/checkout/payment-form';
import { placeOrder } from 'lib/medusa';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function PaymentPage() {
  async function pay(formData: FormData) {
    'use server'

    const cartId = cookies().get('cartId')?.value;
    if (!cartId) throw new Error('Your cart got lost :(');

    const orderId = placeOrder(cartId, formData) as any;

    cookies().set('orderId', orderId);
    cookies().delete('cartId');
    redirect('/thank-you');
  }

  return (
    <PaymentForm action={pay} />
  )
}
