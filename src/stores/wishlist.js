import api from "@/lib/axios";
import { defineStore } from "pinia";

export const useWishlistStore = defineStore('wishlistStore', () => {
    const token = localStorage.getItem('token')

    const wishlist = async () => {
        return await api.get('wishlist', { headers: { Authorization: `Bearer ${token}` } })
    }
    
    const addToWishlist = async (productId) => {
        
        console.log('token', token)
        return await api.post('wishlist', { 'product_id': productId }, { headers: { Authorization: `Bearer ${token}` } })
    }

    const removeFromWishlist = async (productId) => {
        return await api.delete(`wishlist/${productId}`, { headers: { Authorization: `Bearer ${token}` } })
    }

    return { wishlist, addToWishlist, removeFromWishlist }
})