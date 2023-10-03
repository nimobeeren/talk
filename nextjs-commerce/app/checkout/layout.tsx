import { getCart } from 'lib/medusa';
import { cookies } from 'next/headers';

export default async function CheckoutLayout({ children }) {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return (
    <div className="w-full">
      <div className="mx-8 flex max-w-2xl flex-col gap-8 py-20 sm:mx-auto">
        <h1 className="text-3xl font-bold">Checkout</h1>
        {!cartId || !cart || cart.lines.length === 0 ? (
          <div>Your cart is still empty.</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
