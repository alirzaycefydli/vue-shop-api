<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/product'
import { useWishlistStore } from '@/stores/wishlist';

const products = ref({
  id:'',
  title:'',
  short_description:'',
  brand:'',
  price:'',
  discount_percent:'',
  is_featured:'',
})
const errors = ref({})
const productStore = useProductStore()

const newProducts = async () => {
  try {
    const value = await productStore.newProducts()
    products.value = value.data.data
  } catch (error) {
    console.error('Error fetching products:', error)
    errors.value = error.response?.data || {}
  }
}

const wishlistStore = useWishlistStore()

const addToWishlist = async (productId) => {
  try {
    await wishlistStore.addToWishlist(productId)
    console.log('Product added to wishlist:', productId)
  } catch (error) {
    console.error('Error adding product to wishlist:', error)
  }
}

onMounted(() => {
  newProducts()
})
</script>

<template>
  <section class="section-product-tabs overflow-hidden py-[50px] max-[1199px]:py-[35px]">
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
      class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
      <div class="flex flex-wrap w-full">
        <div class="w-full px-[12px]">
          <div
            class="section-title mb-[20px] pb-[20px] z-[5] relative flex justify-between max-[991px]:pb-[0] max-[991px]:flex-col max-[991px]:justify-center max-[991px]:text-center">
            <div class="section-detail max-[991px]:mb-[12px]">
              <h2
                class="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                New <span class="text-[#6c7fd8]">Arrivals</span></h2>
              <p
                class="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                Shop online for new arrivals and get free shipping!</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Single Product -->
      <div class="flex flex-wrap w-full mb-[-24px]">
        <div class="w-full">
          <div class="tab-content">
            <div class="flex flex-wrap w-full">
              <div v-for="product in products" :key="product.id"
                class="min-[1200px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px]">
                <div
                  class="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                  <div
                    class="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                    <span
                      class="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                      <span class="text-[14px] text-[#777] font-medium uppercase">New</span>
                    </span>
                    <a href="">
                      <div
                        class="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                        <img class="main-img transition-all duration-[0.3s] ease-in-out w-full"
                          :src="product.image" alt="{{ product.title }}">
                        <img
                          class="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                          :src="product.image" alt="{{ product.title }}">
                      </div>
                    </a>
                    <ul
                      class="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                      <li
                        class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                        <form @submit.prevent="addToWishlist(product.id)" class="w-[35px] h-[35px] flex items-center justify-center">
                          <button title="Add to Wishlist"
                            class="w-[35px] h-[35px] flex items-center justify-center">
                            <i
                              class="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </button>
                        </form>
                      </li>
                      <li
                        class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                        <form id="33" class="w-[35px] h-[35px] flex items-center justify-center">
                          <input type="hidden" name="product_id" value="1" />
                          <input type="hidden" name="quantity" value="1" />
                          <button type="submit" title="Add to Cart"
                            class="w-[35px] h-[35px] flex items-center justify-center">
                            <i
                              class="ri-shopping-cart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                  <div class="bb-pro-contact p-[20px]">
                    <div class="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                      <p
                        class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">
                        {{ product.brand }}</p>
                      <span class="bb-pro-rating">
                        <i
                          v-for="(star,index) in parseInt(product.rating || 0)" :key="index" class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                        <template v-if="(product.rating || 0) < 5">
                            <i 
                          v-for="(star,index) in (5 - parseInt(product.rating || 0))" :key="index"
                          class="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                        </template>
                      </span> 
                    </div>
                    <a href="#"
                      class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">{{product.title}}</a>
                    <div class="bb-price flex flex-wrap justify-between">
                      <div class="inner-price mx-[-3px]">
                        <span v-if="product.discount_percent > 0" class="old-price px-[3px] text-[14px] text-[#686e7d]">-{{product.discount_percent}}%</span>
                      </div>
                      <span class="last-items text-[14px] text-[#686e7d]">${{ product.discounted_price }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- Single Product -->
    </div>
  </section>

</template>

