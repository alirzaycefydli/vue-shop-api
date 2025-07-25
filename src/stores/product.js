import api from "@/lib/axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore',()=>{

    const newProducts = async () => {
        return await api.get('products')
    }

    const productById = async (id) => {
        return await api.get(`products/${id}`)
    }

    const productByCategory = async (categoryId, sortBy=null) => {
        const params = sortBy ? { params: { sortBy } } : {};
        return await api.get(`category/${categoryId}`, params)
    }

    const categories = async () => {
        return await api.get('category')
    }

    const userReview = async (data) => {
        return await api.post('reviews', data)
    }

    return {newProducts, productById, userReview, productByCategory, categories}
})