<script setup>
import { useProductStore } from '@/stores/product';
import { onMounted, ref } from 'vue';
const productStore = useProductStore()

const data = ref(null)
const categories = async ()=>{
    try {
        const response = await productStore.categories()
        data.value = response.data.data
        console.log("Categories fetched successfully:", data.value);
    } catch (error) {
        console.error("Error fetching categories:", error);
        data.value = null;
    }
}

onMounted(() => {
    categories()
})
</script>
<template>
    <section>
        <div
          class="bb-main-menu-desk bg-[#fff] py-[12px] border-t-[1px] border-solid border-[#eee] max-[991px]:hidden">
          <div
            class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div class="flex flex-wrap w-full">
              <div class="w-full px-[12px]">
                <div
                  class="bb-inner-menu-desk flex max-[1199px]:relative max-[991px]:justify-between">
                  <div
                    class="bb-main-menu relative flex flex-[auto] justify-start max-[991px]:hidden"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav flex flex-wrap flex-row ">
                      <li
                        class="nav-item flex items-center font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem] mr-[35px]">
                        <RouterLink
                          class="nav-link p-[0] font-Poppins leading-[28px] text-[15px] font-medium text-[#3d4750] tracking-[0.03rem] block"
                          :to="{name: 'home'}">Home</RouterLink>
                      </li>
                      <li class="nav-item bb-main-dropdown flex items-center mr-[45px]">
                        <a
                          class="nav-link font-Poppins relative p-[0] leading-[28px] text-[15px] font-medium text-[#3d4750] block tracking-[0.03rem]"
                          >Categories</a>
                        <ul
                          class="mega-menu min-w-full transition-all duration-[0.3s] ease-in-out mt-[25px] pl-[30px] absolute top-[36px] z-[16] text-left opacity-[0] invisible left-[0] right-[auto] bg-[#fff] border-[1px] border-solid border-[#eee] grid grid-cols-3 gap-[30px] rounded-[10px]">

                          <li v-for="category in data" :key="category.id" class="flex items-center">
                            <RouterLink :to="{name: 'products', params: {id: category.id}}"
                              class="transition-all duration-[0.3s] ease-in-out font-Poppins py-[10px] leading-[22px] text-[14px] font-normal tracking-[0.03rem] text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                              {{ category?.title }}
                            </RouterLink>
                          </li>
                          
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bb-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
        <div id="bb-mobile-menu" class="bb-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] px-[20px] pb-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] translate-x-[-100%] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]">
            <div class="bb-menu-title w-full pb-[10px] flex flex-wrap justify-between">
                <span class="menu_title font-Poppins flex items-center text-[16px] text-[#3d4750] font-semibold leading-[26px] tracking-[0.02rem]">My Menu</span>
                <button type="button" class="bb-close-menu relative border-[0] text-[30px] leading-[1] text-[#ff0000] bg-transparent">×</button>
            </div>
            <div class="bb-menu-inner">
                <div class="bb-menu-content">
                    <ul>
                        <li class="relative">
                            <a href="index.html" class="transition-all duration-[0.3s] ease-in-out mb-[12px] p-[12px] block font-Poppins capitalize text-[#686e7d] border-[1px] border-solid border-[#eee] rounded-[10px] text-[15px] font-medium leading-[28px] tracking-[0.03rem]">Home</a>
                        </li>
                        <li class="relative">
                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[12px] p-[12px] block font-Poppins capitalize text-[#686e7d] border-[1px] border-solid border-[#eee] rounded-[10px] text-[15px] font-medium leading-[28px] tracking-[0.03rem]">Categories</a>
                            <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                <li class="relative">
                                    <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#686e7d]">Classic</a>
                                    <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                        <li class="relative"><a href="shop-left-sidebar-col-3.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Left sidebar 3 column</a></li>
                                        <li class="relative"><a href="shop-left-sidebar-col-4.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Left sidebar 4 column</a></li>
                                        <li class="relative"><a href="shop-right-sidebar-col-3.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Right sidebar 3 column</a></li>
                                        <li class="relative"><a href="shop-right-sidebar-col-4.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Right sidebar 4 column</a></li>
                                        <li class="relative"><a href="shop-full-width.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Full width 4 column</a></li>
                                    </ul>
                                </li>
                                <li class="relative">
                                    <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#686e7d]">Banner</a>
                                    <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                        <li class="relative"><a href="shop-banner-left-sidebar-col-3.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Left sidebar 3 column</a></li>
                                        <li class="relative"><a href="shop-banner-left-sidebar-col-4.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Left sidebar 4 column</a></li>
                                        <li class="relative"><a href="shop-banner-right-sidebar-col-3.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Right sidebar 3 column</a></li>
                                        <li class="relative"><a href="shop-banner-right-sidebar-col-4.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Right sidebar 4 column</a></li>
                                        <li class="relative"><a href="shop-banner-full-width.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Full width 4 column</a></li>
                                    </ul>
                                </li>
                                <li class="relative">
                                    <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#686e7d]">Columns</a>
                                    <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                        <li class="relative"><a href="shop-full-width-col-3.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">3 Columns full width</a></li>
                                        <li class="relative"><a href="shop-full-width-col-4.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">4 Columns full width</a></li>
                                        <li class="relative"><a href="shop-full-width-col-5.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">5 Columns full width</a></li>
                                        <li class="relative"><a href="shop-full-width-col-6.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">6 Columns full width</a></li>
                                        <li class="relative"><a href="shop-banner-full-width-col-3.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Banner 3 Columns</a></li>
                                    </ul>
                                </li>
                                <li class="relative">
                                    <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#686e7d]">List</a>
                                    <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                        <li class="relative"><a href="shop-list-left-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Shop left sidebar</a></li>
                                        <li class="relative"><a href="shop-list-right-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Shop right sidebar</a></li>
                                        <li class="relative"><a href="shop-list-banner-left-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Banner left sidebar</a></li>
                                        <li class="relative"><a href="shop-list-banner-right-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Banner right sidebar</a></li>
                                        <li class="relative"><a href="shop-list-full-col-2.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Full width 2 columns</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="relative">
                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[12px] p-[12px] block font-Poppins capitalize text-[#686e7d] border-[1px] border-solid border-[#eee] rounded-[10px] text-[15px] font-medium leading-[28px] tracking-[0.03rem]">Products</a>
                            <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                <li class="relative">
                                    <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#686e7d]">Product page</a>
                                    <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                        <li class="relative"><a href="product-left-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Product left sidebar</a></li>
                                        <li class="relative"><a href="product-right-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Product right sidebar</a></li>
                                    </ul>
                                </li>
                                <li class="relative">
                                    <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[0] pl-[15px] pr-[0] py-[12px] capitalize block text-[14px] font-normal text-[#686e7d]">Product Accordion</a>
                                    <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                        <li class="relative"><a href="product-accordion-left-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">left sidebar</a></li>
                                        <li class="relative"><a href="product-accordion-right-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[30px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">right sidebar</a></li>
                                    </ul>
                                </li>
                                <li class="relative"><a href="product-full-width.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Product full width</a></li>
                                <li class="relative"><a href="product-accordion-full-width.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">accordion full width</a></li>
                            </ul>
                        </li>
                        <li class="relative">
                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[12px] p-[12px] block font-Poppins capitalize text-[#686e7d] border-[1px] border-solid border-[#eee] rounded-[10px] text-[15px] font-medium leading-[28px] tracking-[0.03rem]">Pages</a>
                            <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                <li class="relative"><a href="about-us.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">About Us</a></li>
                                <li class="relative"><a href="contact-us.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Contact Us</a></li>
                                <li class="relative"><a href="cart.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Cart</a></li>
                                <li class="relative"><a href="checkout.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Checkout</a></li>
                                <li class="relative"><a href="compare.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Compare</a></li>
                                <li class="relative"><a href="faq.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Faq</a></li>
                                <li class="relative"><a href="login.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Login</a></li>
                                <li class="relative"><a href="register.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Register</a></li>
                            </ul>
                        </li>
                        <li class="relative">
                            <a href="javascript:void(0)" class="transition-all duration-[0.3s] ease-in-out mb-[12px] p-[12px] block font-Poppins capitalize text-[#686e7d] border-[1px] border-solid border-[#eee] rounded-[10px] text-[15px] font-medium leading-[28px] tracking-[0.03rem]">Blog</a>
                            <ul class="sub-menu w-full min-w-[auto] p-[0] mb-[10px] static hidden visible opacity-[1]">
                                <li class="relative"><a href="blog-left-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Left Sidebar</a></li>
                                <li class="relative"><a href="blog-right-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Right Sidebar</a></li>
                                <li class="relative"><a href="blog-full-width.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Full Width</a></li>
                                <li class="relative"><a href="blog-detail-left-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Detail Left Sidebar</a></li>
                                <li class="relative"><a href="blog-detail-right-sidebar.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Detail Right Sidebar</a></li>
                                <li class="relative"><a href="blog-detail-full-width.html" class="font-Poppins leading-[28px] tracking-[0.03rem] transition-all duration-[0.3s] ease-in-out font-normal pl-[12px] text-[14px] text-[#777] mb-[0] capitalize block py-[12px]">Detail Full Width</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="header-res-lan-curr">
                    <!-- Social Start -->
                    <div class="header-res-social mt-[30px]">
                        <div class="header-top-social">
                            <ul class="flex flex-row justify-center mb-[0]">
                                <li class="list-inline-item w-[30px] h-[30px] flex items-center justify-center bg-[#3d4750] rounded-[10px] mr-[.5rem]">
                                    <a href="#" class="transition-all duration-[0.3s] ease-in-out"><i class="ri-facebook-fill text-[#fff] text-[15px]"></i></a>
                                </li>
                                <li class="list-inline-item w-[30px] h-[30px] flex items-center justify-center bg-[#3d4750] rounded-[10px] mr-[.5rem]">
                                    <a href="#" class="transition-all duration-[0.3s] ease-in-out"><i class="ri-twitter-fill text-[#fff] text-[15px]"></i></a>
                                </li>
                                <li class="list-inline-item w-[30px] h-[30px] flex items-center justify-center bg-[#3d4750] rounded-[10px] mr-[.5rem]">
                                    <a href="#" class="transition-all duration-[0.3s] ease-in-out"><i class="ri-instagram-line text-[#fff] text-[15px]"></i></a>
                                </li>
                                <li class="list-inline-item w-[30px] h-[30px] flex items-center justify-center bg-[#3d4750] rounded-[10px]">
                                    <a href="#" class="transition-all duration-[0.3s] ease-in-out"><i class="ri-linkedin-fill text-[#fff] text-[15px]"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Social End -->
                </div>
            </div>
        </div>
    </section>
</template>
