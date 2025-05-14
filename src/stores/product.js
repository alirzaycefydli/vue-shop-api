import api from "@/lib/axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore',()=>{

    const newProducts = async () => {
        return await api.get('products')
    }
    
    return {newProducts}
})