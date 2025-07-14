<script setup>
import { onMounted, ref, watch } from 'vue'
import { useProductStore } from '@/stores/product'
import { RouterLink, useRoute } from 'vue-router'

const productStore = useProductStore()
const products = ref(null)
const route = useRoute()

const selectedSort = ref('')
const productData = async ()=>{
    try {
        const response = await productStore.productByCategory(route.params.id, selectedSort.value)
        products.value = response.data.data
    } catch (error) {
        console.error("Error fetching product:", error)
        products.value = null
    }
}

onMounted(() => {
    productData()
});

watch(
    () => route.params.id,
    () => {
        productData()
    }
)

</script>

<template>

    <!-- Shop section -->
    <section class="section-shop mt-6 pb-[50px] max-[1199px]:pb-[35px]">
        <div class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div class="flex flex-wrap w-full px-[12px]">
            
                <div class="w-full">
                    <div class="bb-shop-pro-inner">
                        <div class="flex flex-wrap mx-[-12px] mb-[-24px]">
                            <div class="w-full px-[12px]">
                                <div class="bb-pro-list-top mb-[24px] rounded-[20px] flex bg-[#f8f8fb] border-[1px] border-solid border-[#eee] justify-between">
                                    <div class="flex flex-wrap w-full justify-end">
                                        <div class="w-[50%] px-[12px] max-[420px]:w-full mr-3">
                                            <div class="bb-select-inner h-full py-[10px] flex items-center justify-end max-[420px]:justify-center">
                                                <div class="custom-select w-[130px] mr-[30px] flex justify-end text-[#777]  items-center text-[14px] relative max-[420px]:w-[100px] max-[420px]:justify-left">
                                                    <select v-model="selectedSort" @change="productData">
                                                        <option selected disabled value="">Sort by</option>
                                                        <option value="name_asc">Name, A to Z</option>
                                                        <option value="name_desc">Name, Z to A</option>
                                                        <option value="price_asc">Price, low to high</option>
                                                        <option value="price_desc">Price, high to low</option>
                                                        <option value="discount">Discount Percentage</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div v-for="product in products" :key="product.id" class="min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] pro-bb-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <div class="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                                    <div class="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                                        <RouterLink :to="{ name: 'product', params: { id: product?.id } }">
                                            <div class="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                                                <img class="main-img transition-all duration-[0.3s] ease-in-out w-full" :src=" product?.primary_image"  :alt=" product?.title">
                                                <img class="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full" :src=" product?.primary_image"
                                                    :alt=" product?.title">
                                            </div>
                                        </RouterLink>
                                        <ul class="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                                            <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                                <a href="javascript:void(0)" title="Wishlist" class="w-[35px] h-[35px] flex items-center justify-center">
                                                    <i class="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                                </a>
                                            </li>
                                            <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                                <a href="javascript:void(0)" title="Add To Cart" class="w-[35px] h-[35px] flex items-center justify-center">
                                                    <i class="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="bb-pro-contact p-[20px]">
                                        <div class="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                                            <span class="bb-pro-rating">
                                                <template v-for="index in 5" :key="index">
                                                <i v-if="index <= Math.round(product?.rating)"
                                                    class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]" />
                                                <i v-else
                                                    class="ri-star-line float-left text-[15px] mr-[3px] text-[#777]" />
                                            </template>
                                            </span>
                                        </div>
                                        <h4 class="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                                            <RouterLink :to="{ name: 'product', params: { id: product?.id } }" class="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">{{ product?.title }}</RouterLink></h4>
                                        <div class="bb-price flex flex-wrap justify-between">
                                            <div class="inner-price mx-[-3px]">
                                                <span class="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">${{ product?.discounted_price }}</span>
                                                <span class="old-price px-[3px] text-[14px] text-[#686e7d] line-through">${{ product?.price }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                    

                            
                            <div class="w-full px-[12px] justify-end flex">
                                <div class="bb-pro-pagination mb-[24px] max-[575px]:flex-col max-[575px]:items-center">
                                    <ul class="flex">
                                        <li class="leading-[28px] mr-[6px] active">
                                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-[#3d4750] hover:text-[#fff]">1</a>
                                        </li>
                                        <li class="leading-[28px] mr-[6px]">
                                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-[#3d4750] hover:text-[#fff]">2</a>
                                        </li>
                                        <li class="leading-[28px] mr-[6px]">
                                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-[#3d4750] hover:text-[#fff]">3</a>
                                        </li>
                                        <li class="leading-[28px] mr-[6px]">
                                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-[#3d4750] hover:text-[#fff]">4</a>
                                        </li>
                                        <li class="leading-[28px]">
                                            <a href="javascript:void(0)" class="next transition-all duration-[0.3s] ease-in-out w-[auto] h-[32px] px-[13px] font-light text-[#fff] leading-[30px] bg-[#3d4750] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee]">Next <i class="ri-arrow-right-s-line transition-all duration-[0.3s] ease-in-out ml-[10px] text-[16px] w-[8px] text-[#fff]"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>