'use client';

import { Button } from 'components/checkout/checkout-components';
import Link from 'next/link';

export default function ThankYouPage() {
  // LEFT HERE
  // TODO: clear cart when this page is reached
  // TODO: introduce a bug

  return (
    <>
      <h2 className="py-8 text-center text-5xl">Thank you for your order!</h2>
      <div className="flex justify-center">
        <Link href="/">
          <Button>Continue shopping</Button>
        </Link>
      </div>
    </>
  );
}
