<template>
  <section>
    <div class="container">
      <h2 class="3xl:mb-[48px] 2xl:mb-[36px] lg:mb-[30px] mb-[24px]">Expertises</h2>

      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-white flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right.png" alt="Right icon">
          </div>
          <div>
            <Transition mode="in-out" name="fade-out">
              <div :key="loading">
                <p
                  v-if="!loading"
                  class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-black">Refineries /
                  oil
                  & gas facility</p>
              </div>
            </Transition>
          </div>
        </div>

        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-custom flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon2.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right2.png" alt="Right icon">
          </div>
          <div class="mt-1">
            <p class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-white">Power plants &
              energy systems</p>
          </div>
        </div>
        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-white flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right.png" alt="Right icon">
          </div>
          <div>
            <p class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-black">Refineries / oil
              & gas facility</p>
          </div>
        </div>

        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-custom flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon2.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right2.png" alt="Right icon">
          </div>
          <div class="mt-1">
            <p class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-white">Power plants &
              energy systems</p>
          </div>
        </div>
        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-white flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right.png" alt="Right icon">
          </div>
          <div>
            <p class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-black">Refineries / oil
              & gas facility</p>
          </div>
        </div>

        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-custom flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon2.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right2.png" alt="Right icon">
          </div>
          <div class="mt-1">
            <p class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-white">Process &
              non-process equipment fabrication and assembly</p>
          </div>
        </div>
        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-white flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right.png" alt="Right icon">
          </div>
          <div>
            <p class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-black">Refineries / oil
              & gas facility</p>
          </div>
        </div>

        <div
          class="cursor-pointer p-6 min-h-[184px] mt-4 border border-[#E2E8F0] bg-custom flex flex-col justify-between">
          <div class="flex justify-between">
            <img src="/icons/card-icon2.png" class="lg:h-5 h-[18px]" alt="Icon">

            <img src="/icons/arrow-right2.png" alt="Right icon">
          </div>
          <div class="mt-1">
            <p class="2xl:text-[24px] lg:text-[22px] text-[18px] leading-[130%] font-golos text-white">Power plants &
              energy systems</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const loading = ref(true);


onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>
