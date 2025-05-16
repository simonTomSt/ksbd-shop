'use server';

import { cookies } from 'next/headers';

export const removeFromWishlistAction = async (productId: string) => {
  const cookieStore = await cookies();
  const wishlistCookie = cookieStore.get('_ksbd_whishlist');

  if (!wishlistCookie?.value) {
    return;
  }

  try {
    const wishlistData = JSON.parse(wishlistCookie.value);

    // Update each user's wishlist by removing the product ID
    Object.keys(wishlistData).forEach((userId) => {
      if (Array.isArray(wishlistData[userId])) {
        wishlistData[userId] = wishlistData[userId].filter((id: string) => id !== productId);
      }
    });

    // Set the updated wishlist back to the cookie
    cookieStore.set('_ksbd_whishlist', JSON.stringify(wishlistData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
  } catch (error) {
    console.error('Error removing product from wishlist:', error);
  }
};
