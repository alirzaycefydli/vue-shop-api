import api from "@/lib/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore',()=>{

    // const authenticate = async (apiRoute, formData) =>{
    //         await api.post(`auth/${apiRoute}`,JSON.stringify(formData))
    //         .then((response)=>{
    //             console.log(response.data)
    //             localStorage.setItem('token',response.data?.data?.token)
    //             localStorage.setItem('user',JSON.stringify(response.data?.data?.user))
    //             //useAuthStore().router.push({ name: 'home' })
    //         })
    //         .catch((err) =>{
    //             errors.value = err.response?.data
    //             console.log('error: '+JSON.stringify(err))
    //         })
    // }

    const authenticate = async (apiRoute, formData) => {
        const response = await api.post(`auth/${apiRoute}`, JSON.stringify(formData));
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        return response;
      };

    return {authenticate}
})