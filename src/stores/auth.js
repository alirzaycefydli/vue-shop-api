import api from "@/lib/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore',()=>{

    const authenticate = async (apiRoute, formData) => {
        const response = await api.post(`auth/${apiRoute}`, JSON.stringify(formData));
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        return response;
      };

    return {authenticate}
})