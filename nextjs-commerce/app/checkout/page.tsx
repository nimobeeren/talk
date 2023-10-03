import { ShippingForm } from 'components/checkout/shipping-form';
import { setShippingAddress } from 'lib/medusa';
import { redirect } from 'next/navigation';

export default async function CheckoutPage() {
  async function setShipping(formData: FormData) {
    'use server';

    await setShippingAddress(formData);

    return redirect('/checkout/payment');
  }

  return (
    <ShippingForm action={setShipping} />
  );
}
