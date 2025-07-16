<script setup>
import { ref, onMounted } from 'vue';
import { useWishlistStore } from '@/stores/wishlist';
import { RouterLink } from 'vue-router';
const wishlistStore = useWishlistStore()

const wishlist = ref([])

const fetchWishlist = async () => {
  try {
    const response = await wishlistStore.wishlist()
    wishlist.value = response.data.data
    console.log('Wishlist fetched:', wishlist.value)
  } catch (error) {
    console.error('Error fetching wishlist:', error)
  }
}

const removeFromWishlist = async (productId) => {
  try {
    await wishlistStore.removeFromWishlist(productId)
    console.log('Product removed from wishlist:', productId)
    await fetchWishlist() // Refresh the wishlist after removal
  } catch (error) {
    console.error('Error removing product from wishlist:', error)
  }
}

onMounted(() => {
    fetchWishlist()
})

</script>

<template>
    <section class="section-wishlist py-[50px] max-[1199px]:py-[35px]">
        <div
            class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div class="flex flex-wrap w-full mb-[-24px] bb-wish-rightside">
                <div v-for="wishlistData in wishlist" :key="wishlistData.id"
                    class="min-[992px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px] bb-wishlist">
                    <div class="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                        <div
                            class="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                            <span class="bb-remove-wish absolute right-[15px] top-[15px] z-[10]">
                                <a @click.prevent="removeFromWishlist(wishlistData.id)" title="Remove from Wishlist">
                                    <i
                                        class="ri-close-circle-fill transition-all duration-[0.3s] ease-in-out text-[22px] text-[#686e7d] hover:text-[#6c7fd8]"></i>
                                </a>
                            </span>
                            <RouterLink :to="{ name: 'product', params: { id: wishlistData.id } }" class="block">
                                <div
                                    class="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                                    <img class="main-img transition-all duration-[0.3s] ease-in-out w-full"
                                        :src="wishlistData.image" alt="{{ wishlistData.title }}">
                                    <img class="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                                        :src="wishlistData.image" alt="{{ wishlistData.title }}">
                                </div>
                            </RouterLink>
                            <ul
                                class="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                                <li
                                    class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Add To Cart"
                                        class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i
                                            class="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="bb-pro-contact p-[20px]">
                            <div class="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                                <span class="bb-pro-rating">
                                    <template v-for="index in 5" :key="index">
                                        <i v-if="index <= Math.round(wishlistData?.rating)"
                                            class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]" />
                                        <i v-else class="ri-star-line float-left text-[15px] mr-[3px] text-[#777]" />
                                    </template>
                                </span>
                            </div>
                            <h4 class="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                                <RouterLink :to="{ name: 'product', params: { id: wishlistData.id } }"
                                    class="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">
                                    {{
                                        wishlistData.title }}</RouterLink>
                            </h4>
                            <div class="bb-price flex flex-wrap justify-between">
                                <div class="inner-price mx-[-3px]">
                                    <span class="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">{{
                                        wishlistData.discounted_price }}</span>
                                    <span v-if="wishlistData.discount_percent > 0"
                                        class="old-price px-[3px] text-[14px] text-[#686e7d] line-through">{{
                                            wishlistData.price }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>