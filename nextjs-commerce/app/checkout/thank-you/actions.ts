'use server';

import { cookies } from 'next/headers';

export const clearCart = () => {
  cookies().delete('cartId');
};
