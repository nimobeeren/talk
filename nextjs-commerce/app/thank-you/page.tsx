import { Button } from 'components/checkout/checkout-components';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default function ThankYouPage() {
  const orderId = cookies().get('orderId')?.value;

  return (
    <>
      <h2 className="text-center text-4xl font-medium">Thank you for your order!</h2>
      <div className="text-center text-3xl">
        <p>We&apos;ll get right on it!</p>
        <dl className="inline [&>*]:inline">
          <dt className="after:content-[':_']">Order ID</dt>
          <dd>
            <b>{orderId}</b>
          </dd>
        </dl>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <Button>Continue shopping</Button>
        </Link>
      </div>
    </>
  );
}
