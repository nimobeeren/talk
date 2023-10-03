import { Button } from 'components/checkout/checkout-components';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default function ThankYouPage() {
  const orderId = cookies().get('orderId')?.value;

  return (
    <div className='flex flex-col gap-8 py-16'>
      <h2 className="text-center text-4xl">Thank you for your order!</h2>
      <div className='text-center text-lg'>
        <p>We&apos;ll get right on it!</p>
        <p>Order ID: <b>{orderId}</b></p>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <Button>Continue shopping</Button>
        </Link>
      </div>
    </div>
  );
}
