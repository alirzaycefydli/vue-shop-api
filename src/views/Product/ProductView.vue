<script setup>
import { useProductStore } from '@/stores/product';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { onMounted, ref, computed } from 'vue'
import {initAccordions} from 'flowbite'
import { useRoute } from 'vue-router'

const productStore = useProductStore()
const data = ref(null)

const route = useRoute()

const productData = async ()=>{
    try {
        const response = await productStore.productById(route.params.id)
        data.value = response.data.data
        //console.log("Product fetched successfully:", data.value);
    } catch (error) {
        console.error("Error fetching product:", error);
        data.value = null;
    }
}

onMounted(()=>{
    productData()
    initAccordions();
})

import Rating from 'primevue/rating';

const averageRating = computed(() => {
  if (!data.value?.reviews?.length) {
    return 0
  }
  const total = data.value.reviews.reduce((sum, r) => sum + r.rating, 0)
  return total / data.value.reviews.length
})

const userReview = ref({
  title: '',
  review: '',
  rating: 4,
})


const handleSubmitReview = async () => {
  try {
    const response = await productStore.userReview({
      product_id: data.value.id,
      user_id: route.params.id,
      ...userReview.value,
    })
    console.log("Review submitted successfully:", response.data);
    // Reset the form
    userReview.value = { title: '', review: '', rating: 4 }
    // Refetch the product data to include the new review
    await productData()
  } catch (error) {
    console.error("Error submitting review:", error);
  }
}

const currentSlide = ref(0)

const slideTo = (nextSlide) => (currentSlide.value = nextSlide)

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: false,
  touchDrag: false,
  height: 320,
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: data.value?.images.length,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
}

// const images = Array.from({ length: 10 }, (_, index) => ({
//   id: index + 1,
//   url: `https://picsum.photos/seed/${Math.random()}/800/600`,
// }))



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>


<template>



    <section class="section-product py-[50px] max-[1199px]:py-[35px]">
        <div
            class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div class="flex flex-wrap w-full">
                <div class="w-full">
                    <div class="bb-single-pro mb-[24px]">
                        <div class="flex flex-wrap w-full">


                            <div class="min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px]">
                                <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
                                    <Slide v-for="image in data?.images" :key="image.id">
                                        <img :src="image" alt="{{ data?.title }}" class="gallery-image" />
                                    </Slide>
                                </Carousel>

                                <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
                                    <Slide v-for="image in data?.images" :key="image.id">
                                        <template #default="{ currentIndex, isActive }">
                                            <div :class="['thumbnail', { 'is-active': isActive }]"
                                                @click="slideTo(currentIndex)">
                                                <img :src="image" alt="{{ data?.title }}" class="thumbnail-image" />
                                            </div>
                                        </template>
                                    </Slide>

                                    <template #addons>
                                        <Navigation />
                                    </template>
                                </Carousel>
                            </div>


                            <div class="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
                                <div class="bb-single-pro-contact">
                                    <div class="bb-sub-title mb-[20px]">
                                        <h4
                                            class="font-quicksand text-[22px] tracking-[0.03rem] font-bold leading-[1.2] text-[#3d4750]">
                                            {{ data?.title }}</h4>
                                    </div>
                                    <div class="bb-single-rating mb-[12px]">
                                        <span class="bb-pro-rating mr-[10px]">
                                            <template v-for="index in 5" :key="index">
                                                <i v-if="index <= Math.round(averageRating)"
                                                    class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]" />
                                                <i v-else
                                                    class="ri-star-line float-left text-[15px] mr-[3px] text-[#777]" />
                                            </template>
                                        </span>
                                        <span class="bb-read-review">
                                            |&nbsp;&nbsp;<span
                                                class="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#6c7fd8]">{{data?.reviews.length }} Rating(s)</span>
                                                
                                        </span>
                                    </div>
                                    <p class="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem]">{{
                                        data?.short_description }}
                                    </p>
                                    <div class="bb-single-price-wrap flex justify-between py-[10px]">
                                        <div class="bb-single-price py-[15px]">
                                            <div class="price mb-[8px]">
                                                <h5
                                                    class="font-quicksand leading-[1.2] tracking-[0.03rem] text-[20px] font-extrabold text-[#3d4750]">
                                                    ${{data?.discounted_price}} <span
                                                        class="text-[#3d4750] text-[20px]">-{{ data?.discount_percent
                                                        }}%</span></h5>
                                            </div>
                                            <div class="mrp">
                                                <p
                                                    class="font-Poppins text-[16px] font-light text-[#686e7d] leading-[28px] tracking-[0.03rem]">
                                                 <span
                                                        class="text-[15px] line-through">${{data?.price}}</span></p>
                                            </div>
                                        </div>
                                        <div v-if="data?.quantity > 0" class="bb-single-price py-[15px]">
                                            <div class="stock">
                                                <span class="text-[18px] text-[#6c7fd8]">In stock({{data?.quantity}})</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bb-single-qty flex flex-wrap m-[-2px]">
                                        <div
                                            class="qty-plus-minus m-[2px] w-[85px] h-[40px] py-[7px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between bg-[#fff] rounded-[10px]">
                                            <input
                                                class="qty-input text-[#777] float-left text-[14px] h-auto m-[0] p-[0] text-center w-[32px] outline-[0] font-normal leading-[35px] rounded-[10px]"
                                                type="text" name="bb-qtybtn" value="1">
                                        </div>
                                        <div class="buttons m-[2px]">
                                            <button
                                                class="bb-btn-2 transition-all duration-[0.3s] ease-in-out h-[40px] flex font-Poppins leading-[28px] tracking-[0.03rem] py-[6px] px-[25px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]">Add to
                                                cart</button>
                                        </div>
                                        <ul class="bb-pro-actions my-[2px] flex">
                                            <li class="bb-btn-group">
                                                <a href="javascript:void(0)" title="heart"
                                                    class="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] hover:bg-[#6c7fd8] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                                    <i class="ri-heart-line text-[16px] leading-[10px] text-[#777]"></i>
                                                </a>
                                            </li>
                                            <li class="bb-btn-group">
                                                <a href="javascript:void(0)" title="Quick View"
                                                    class="bb-modal-toggle transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] hover:bg-[#6c7fd8] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                                    <i class="ri-eye-line text-[16px] leading-[10px] text-[#777]"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="w-full px-[12px]">
                        <div
                            class="bey-single-accordion border-[1px] border-solid border-[#eee] p-[15px] rounded-[20px]">
                            <div class="bb-accordion style-1 mb-[-24px]">

                                <div class="bb-accordion-item overflow-hidden mb-[24px]">






                                    <div id="accordion-open" data-accordion="open">



                                        <h2 id="accordion-open-heading-1">
                                            <button type="button"
                                                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                                data-accordion-target="#accordion-open-body-1" aria-expanded="true"
                                                aria-controls="accordion-open-body-1">
                                                <span class="flex items-center"> Details</span>
                                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-open-body-1" class="hidden"
                                            aria-labelledby="accordion-open-heading-1">
                                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                                <p class="text-gray-500 dark:text-gray-400">{{ data?.description }}</p>
                                            </div>
                                        </div>




                                        <h2 id="accordion-open-heading-3">
                                            <button type="button"
                                                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                                data-accordion-target="#accordion-open-body-3" aria-expanded="false"
                                                aria-controls="accordion-open-body-3">
                                                <span class="flex items-center"> Reviews</span>
                                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>



                                        <div id="accordion-open-body-3" class="hidden"
                                            aria-labelledby="accordion-open-heading-3">
                                            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">




                                                <div class="accordion-body p-[1.25rem]">
                                                    <div class="bb-reviews">


                                                        <div v-for="review in data?.reviews" :key="review.id"
                                                            class="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                                                            <div class="inner-contact">
                                                                <h4
                                                                    class="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">
                                                                    {{ review.title }}</h4>
                                                                <div class="bb-pro-rating flex">
                                                                       <i v-for="star in 5" :key="star"
                                                                          :class="star <= review.rating ? 'ri-star-fill' : 'ri-star-line'"
                                                                          class="float-left text-[15px] mr-[3px]"
                                                                          :style="{ color: star <= review.rating ? '#fea99a' : '#777' }"></i>
                                                                </div>
                                                                <p
                                                                    class="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">
                                                                    {{ review.review }}</p>
                                                            </div>
                                                        </div>






                                                    </div>


                                                    <div class="bb-reviews-form">
                                                        <h3
                                                            class="font-quicksand tracking-[0.03rem] leading-[1.2] mb-[8px] text-[20px] font-bold text-[#3d4750]">
                                                            Add a Review</h3>
                                                        <div class="bb-review-rating flex mb-[12px]">
                                                            <span
                                                                class="pr-[10px] font-Poppins text-[15px] font-semibold leading-[26px] tracking-[0.02rem] text-[#3d4750]">Your
                                                                ratting :</span>
                                                            <Rating v-model="userReview.rating" />
                                                        </div>
                                                        <form @submit.prevent="handleSubmitReview" class="bb-review-form">

                                                            <div class="input-box mb-[24px]">
                                                                <input v-model="userReview.title" type="text" placeholder="Title" name="title"
                                                                    class="w-full h-[50px] border-[1px] border-solid border-[#eee] pl-[20px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]">
                                                            </div>
                                                            <div class="input-box mb-[24px]">
                                                                <textarea v-model="userReview.review" name="your-comment"
                                                                    placeholder="Enter Your Comment"
                                                                    class="w-full h-[100px] border-[1px] border-solid border-[#eee] py-[20px] pl-[20px] pr-[10px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"></textarea>
                                                            </div>
                                                            <div class="input-button">
                                                                <button type="submit"
                                                                    class="bb-btn-2 transition-all duration-[0.3s] ease-in-out h-[40px] inline-flex font-Poppins leading-[28px] tracking-[0.03rem] py-[4px] px-[15px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>


                                                </div>



                                            </div>
                                        </div>

                                    </div>












                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
:root {
  background-color: #242424;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-image {
  border-radius: 16px;
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}





/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}

</style>