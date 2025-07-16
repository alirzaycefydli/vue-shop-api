import api from "@/lib/axios";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', () => {
    const token = localStorage.getItem('token')

    const cart = async () => {
        return await api.get('cart', { headers: { Authorization: `Bearer ${token}` } })
    }

    const addToCart = async (productId, quantity) => {
        return await api.post('cart', { product_id: productId, quantity:quantity }, { headers: { Authorization: `Bearer ${token}` } })
    }

    const updateCartItem = async (itemId, quantity) => {
        return await api.put(`cart/${itemId}`, { quantity }, { headers: { Authorization: `Bearer ${token}` } })
    }

    const removeFromCart = async (itemId) => {
        return await api.delete(`cart/${itemId}`, { headers: { Authorization: `Bearer ${token}` } })
    }

    return { cart, addToCart, updateCartItem, removeFromCart }
})