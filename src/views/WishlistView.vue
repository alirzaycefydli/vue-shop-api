<script setup>

</script>

<template>
    <section class="section-wishlist py-[50px] max-[1199px]:py-[35px]">
        <div class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div class="flex flex-wrap w-full mb-[-24px] bb-wish-rightside">
                <div class="min-[992px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px] bb-wishlist">
                    <div class="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                        <div class="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                            <span class="bb-remove-wish absolute right-[15px] top-[15px] z-[10]">
                                <a href="javascript:void(0)">
                                    <i class="ri-close-circle-fill transition-all duration-[0.3s] ease-in-out text-[22px] text-[#686e7d] hover:text-[#6c7fd8]"></i>
                                </a>
                            </span>
                            <span class="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                                <span class="text-[14px] text-[#777] font-medium uppercase">New</span>
                            </span>
                            <a href="javascript:void(0)">
                                <div class="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                                    <img class="main-img transition-all duration-[0.3s] ease-in-out w-full" src="../assets/img/product/1.jpg" alt="product-1">
                                    <img class="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full" src="../assets/img/product/back-1.jpg" alt="product-1">
                                </div>
                            </a>
                            <ul class="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Wishlist" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Quick View" class="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="compare.html" title="Compare" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
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
                                <a href="shop-left-sidebar-col-3.html" class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">Chocos</a>
                                <span class="bb-pro-rating">
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                                </span>
                            </div>
                            <h4 class="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                                <a href="product-left-sidebar.html" class="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">Mixed Fruits Chocolates Pack</a>
                            </h4>
                            <div class="bb-price flex flex-wrap justify-between">
                                <div class="inner-price mx-[-3px]">
                                    <span class="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$25</span>
                                    <span class="old-price px-[3px] text-[14px] text-[#686e7d] line-through">$30</span>
                                </div>
                                <span class="last-items text-[14px] text-[#686e7d]">1 Pack</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-[992px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px] bb-wishlist">
                    <div class="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                        <div class="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                            <span class="bb-remove-wish absolute right-[15px] top-[15px] z-[10]">
                                <a href="javascript:void(0)">
                                    <i class="ri-close-circle-fill transition-all duration-[0.3s] ease-in-out text-[22px] text-[#686e7d] hover:text-[#6c7fd8]"></i>
                                </a>
                            </span>
                            <span class="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                                <span class="text-[14px] text-[#777] font-medium uppercase">Hot</span>
                            </span>
                            <a href="javascript:void(0)">
                                <div class="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                                    <img class="main-img transition-all duration-[0.3s] ease-in-out w-full" src="../assets/img/product/2.jpg" alt="product-2">
                                    <img class="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full" src="../assets/img/product/back-2.jpg"
                                        alt="product-2">
                                </div>
                            </a>
                            <ul class="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Wishlist" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Quick View" class="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="compare.html" title="Compare" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
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
                                <a href="shop-left-sidebar-col-3.html" class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">Juice</a>
                                <span class="bb-pro-rating">
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                                </span>
                            </div>
                            <h4 class="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                                <a href="product-left-sidebar.html" class="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">Organic Apple Juice Pack</a>
                            </h4>
                            <div class="bb-price flex flex-wrap justify-between">
                                <div class="inner-price mx-[-3px]">
                                    <span class="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$15</span>
                                    <span class="item-left px-[3px] text-[14px] text-[#6c7fd8]">3 Left</span>
                                </div>
                                <span class="last-items text-[14px] text-[#686e7d]">100 ml</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-[992px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px] bb-wishlist">
                    <div class="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                        <div class="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                            <span class="bb-remove-wish absolute right-[15px] top-[15px] z-[10]">
                                <a href="javascript:void(0)">
                                    <i class="ri-close-circle-fill transition-all duration-[0.3s] ease-in-out text-[22px] text-[#686e7d] hover:text-[#6c7fd8]"></i>
                                </a>
                            </span>
                            <a href="javascript:void(0)">
                                <div class="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                                    <img class="main-img transition-all duration-[0.3s] ease-in-out w-full" src="../assets/img/product/3.jpg" alt="product-3">
                                    <img class="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full" src="../assets/img/product/back-3.jpg"
                                        alt="product-3">
                                </div>
                            </a>
                            <ul class="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Wishlist" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Quick View" class="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="compare.html" title="Compare" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
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
                                <a href="shop-left-sidebar-col-3.html" class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">Juice</a>
                                <span class="bb-pro-rating">
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                                </span>
                            </div>
                            <h4 class="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                                <a href="product-left-sidebar.html" class="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">Mixed Almond nuts juice Pack</a>
                            </h4>
                            <div class="bb-price flex flex-wrap justify-between">
                                <div class="inner-price mx-[-3px]">
                                    <span class="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$32</span>
                                    <span class="old-price px-[3px] text-[14px] text-[#686e7d] line-through">$39</span>
                                </div>
                                <span class="last-items text-[14px] text-[#686e7d]">250 g</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-[992px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px] bb-wishlist">
                    <div class="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                        <div class="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                            <span class="bb-remove-wish absolute right-[15px] top-[15px] z-[10]">
                                <a href="javascript:void(0)">
                                    <i class="ri-close-circle-fill transition-all duration-[0.3s] ease-in-out text-[22px] text-[#686e7d] hover:text-[#6c7fd8]"></i>
                                </a>
                            </span>
                            <span class="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                                <span class="text-[14px] text-[#777] font-medium uppercase">Sale</span>
                            </span>
                            <a href="javascript:void(0)">
                                <div class="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                                    <img class="main-img transition-all duration-[0.3s] ease-in-out w-full" src="../assets/img/product/4.jpg" alt="product-4">
                                    <img class="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full" src="../assets/img/product/back-4.jpg"
                                        alt="product-4">
                                </div>
                            </a>
                            <ul class="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Wishlist" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="javascript:void(0)" title="Quick View" class="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                                    </a>
                                </li>
                                <li class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                                    <a href="compare.html" title="Compare" class="w-[35px] h-[35px] flex items-center justify-center">
                                        <i class="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
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
                                <a href="shop-left-sidebar-col-3.html" class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">Fruits</a>
                                <span class="bb-pro-rating">
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                                    <i class="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                                </span>
                            </div>
                            <h4 class="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                                <a href="product-left-sidebar.html" class="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">Fresh Mango Slice Juice</a>
                            </h4>
                            <div class="bb-price flex flex-wrap justify-between">
                                <div class="inner-price mx-[-3px]">
                                    <span class="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$25</span>
                                    <span class="item-left px-[3px] text-[14px] text-[#6c7fd8]">Out Of Stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>