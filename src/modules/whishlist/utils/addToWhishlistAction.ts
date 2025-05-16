'use server';

import { cookies } from 'next/headers';

type WishlistData = {
  [userId: string]: string[];
};

export const addToWishlistAction = async (productId: string, userId: string) => {
  const cookieStore = await cookies();
  const wishlistCookie = cookieStore.get('_ksbd_whishlist');

  try {
    let wishlistData: WishlistData = {};

    if (wishlistCookie?.value) {
      wishlistData = JSON.parse(wishlistCookie.value);
    }

    // Initialize user's wishlist array if it doesn't exist
    if (!wishlistData[userId]) {
      wishlistData[userId] = [];
    }

    // Add product ID if it's not already in the list
    if (!wishlistData[userId].includes(productId)) {
      wishlistData[userId].push(productId);
    }

    // Set the updated wishlist back to the cookie
    cookieStore.set('_ksbd_whishlist', JSON.stringify(wishlistData), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30 * 4, // 4 months in seconds
    });
  } catch (error) {
    console.error('Error adding product to wishlist:', error);
  }
};
