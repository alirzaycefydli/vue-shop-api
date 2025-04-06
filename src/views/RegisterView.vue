<script setup>

</script>

<template>
  <section class="section-login py-[50px] max-[1199px]:py-[35px]">
    <div
      class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
      <div class="flex flex-wrap w-full">
        <div class="w-full px-[12px]">
          <div
            class="section-title mb-[20px] pb-[20px] relative flex flex-col items-center text-center max-[991px]:pb-[0]">
            <div class="section-detail max-[991px]:mb-[12px]">
              <h2
                class="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                Register</h2>
              <p
                class="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                Best place to buy and sell digital products</p>
            </div>
          </div>
        </div>
        <div class="w-full px-[12px]">
          <div
            class="bb-login-contact max-w-[500px] m-[auto] border-[1px] border-solid border-[#eee] p-[30px] rounded-[20px]">
            <form>
                <div class="bb-login-wrap mb-[24px]">
                <label for="name"
                  class="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]">Name*</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Name"
                  class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]">
              </div>
              <div class="bb-login-wrap mb-[24px]">
                <label for="email"
                  class="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]">Email*</label>
                <input type="email" id="email" name="email" placeholder="Enter Your Email"
                  class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]">
              </div>
              <div class="bb-login-wrap mb-[24px]">
                <label for="password"
                  class="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]">Password*</label>
                <input type="password" id="password" name="password"
                  placeholder="Enter Your Password"
                  class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]">
              </div>
              <div class="bb-login-wrap mb-[24px]">
                <label for="password_confirmation"
                  class="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]">Password Confirmation*</label>
                <input type="password" id="password_confirmation" name="password_confirmation"
                  placeholder="Confirm Your Password"
                  class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]">
              </div>
              <div class="bb-login-wrap mb-[24px]">
                <h4
                  class="font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#fff]">Already have an account? <RouterLink :to="{name: 'login'}"><span class="text-[#6c7fd8]">Login!</span></RouterLink></h4>
              </div>
              <div class="bb-login-button m-[-5px] flex justify-between">
                <button
                  class="bb-btn-2 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] m-[5px] py-[4px] px-[20px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                  type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>