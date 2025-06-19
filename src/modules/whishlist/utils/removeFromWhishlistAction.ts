'use server';

import { cookies } from 'next/headers';

type WishlistData = {
  [userId: string]: string[];
};

export const removeFromWishlistAction = async (productId: string, userId?: string) => {
  const cookieStore = await cookies();
  const wishlistCookie = cookieStore.get('_ksbd_whishlist');

  if (!wishlistCookie?.value) {
    return;
  }

  try {
    const wishlistData: WishlistData = JSON.parse(wishlistCookie.value);

    if (userId) {
      // Remove from specific user's wishlist
      if (Array.isArray(wishlistData[userId])) {
        wishlistData[userId] = wishlistData[userId].filter((id: string) => id !== productId);
      }
    } else {
      // Fallback: remove from all users' wishlists (for backward compatibility)
      Object.keys(wishlistData).forEach((user) => {
        if (Array.isArray(wishlistData[user])) {
          wishlistData[user] = wishlistData[user].filter((id: string) => id !== productId);
        }
      });
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
    console.error('Error removing product from wishlist:', error);
  }
};
