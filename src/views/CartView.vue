<script setup>

</script>
<template>
  <section class="section-cart py-[50px] max-[1199px]:py-[35px]">
    <div
      class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
      <div class="flex flex-wrap w-full mb-[-24px]">
        <div class="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
          <div
            class="bb-cart-sidebar-block p-[20px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px]">
            <div class="bb-sb-title mb-[20px]">
              <h3
                class="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">
                Summary</h3>
            </div>
            <div class="bb-sb-blok-contact">
              <div class="bb-cart-summary">
                <div class="inner-summary">
                  <ul>
                    <li class="mb-[12px] flex justify-between leading-[28px]">
                      <span
                        class="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">Sub-Total</span>
                      <span
                        class="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">$80.00</span>
                    </li>
                    <li class="mb-[12px] flex justify-between leading-[28px]">
                      <span
                        class="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">Delivery
                        Charges</span>
                      <span
                        class="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">$80.00</span>
                    </li>
                  </ul>
                </div>
                <div class="summary-total border-t-[1px] border-solid border-[#eee] pt-[15px]">
                  <ul class="mb-[0]">
                    <li class="mb-[6px] flex justify-between">
                      <span
                        class="text-left font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]">Total
                        Amount</span>
                      <span
                        class="text-right font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]">$80.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px]">
          <div
            class="bb-cart-table border-[1px] border-solid border-[#eee] rounded-[20px] overflow-hidden max-[1399px]:overflow-y-auto">
            <table class="w-full max-[1399px]:w-[780px]">
              <thead>
                <tr class="border-b-[1px] border-solid border-[#eee]">
                  <th
                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                    Product</th>
                  <th
                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                    Price</th>
                  <th
                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                    quality</th>
                  <th
                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                    Total</th>
                  <th
                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b-[1px] border-solid border-[#eee]">
                  <td class="p-[12px]">
                    <a href="javascript:void(0)">
                      <div class="Product-cart flex items-center">
                        <img src="../assets/img/new-product/1.jpg" alt="new-product-1"
                          class="w-[70px] border-[1px] border-solid border-[#eee] rounded-[10px]">
                        <span
                          class="ml-[10px] font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.03rem] text-[#686e7d]">Ground
                          Nuts Oil Pack</span>
                      </div>
                    </a>
                  </td>
                  <td class="p-[12px]">
                    <span
                      class="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]">$15</span>
                  </td>
                  <td class="p-[12px]">
                    <div
                      class="qty-plus-minus w-[85px] h-[45px] py-[7px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between bg-[#fff] rounded-[10px]">
                      <input
                        class="qty-input text-[#777] float-left text-[14px] h-[auto] m-[0] p-[0] text-center w-[32px] outline-[0] font-normal leading-[35px] rounded-[10px]"
                        type="text" name="bb-qtybtn" value="1">
                    </div>
                  </td>
                  <td class="p-[12px]">
                    <span
                      class="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]">$15</span>
                  </td>
                  <td class="p-[12px]">
                    <div class="pro-remove">
                      <a href="javascript:void(0)">
                        <i
                          class="ri-delete-bin-line transition-all duration-[0.3s] ease-in-out text-[20px] text-[#686e7d] hover:text-[#ff0000]"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="checkout.html"
            class="bb-btn-2 mt-[24px] inline-flex items-center justify-center check-btn transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Check Out</a>
        </div>
      </div>
    </div>
  </section>
</template>
