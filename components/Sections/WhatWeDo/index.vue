<template>
  <section>
    <div class="container">
      <h2 class="3xl:mb-[48px] 2xl:mb-[36px] lg:mb-[30px] mb-[24px] md:text-56 text-3xl">{{ $t('navbar.services')
        }}</h2>

      <div class="grid lg:grid-cols-3 md:grid-cols-1 gap-2">
        <NuxtLinkLocale
          to="/enginers"
          class="2xl:min-h-[595px] lg:min-h-[432px] min-h-[400px] h-full bg-custom relative group cursor-pointer transition-300 hover:opacity-80">
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <img src="/images/do1.png" alt="ESG" class="w-full h-full object-cover">
          </div>
          <div class="w-full h-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10">
            <div
              class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
              <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
              <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
            </div>

            <div class="">
              <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">
                {{ $t('navbar.engineering') }}</h2>
              <p class="text-white mt-4">{{ $t('navbar.engineer_desc') }}</p>
            </div>
          </div>
        </NuxtLinkLocale>

        <NuxtLinkLocale
          to="/procurement"
          class="2xl:min-h-[595px] lg:min-h-[432px] min-h-[400px] h-full bg-custom relative group cursor-pointer transition-300 hover:opacity-80">
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <img src="/images/do2.png" alt="ESG" class="w-full h-full object-cover">
          </div>
          <div class="w-full h-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10">
            <div
              class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
              <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
              <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
            </div>

            <div class="">
              <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">
                {{ $t('navbar.procurement') }}</h2>
              <p class="text-white mt-4">{{ $t('navbar.procurement_desc') }}.</p>
            </div>
          </div>
        </NuxtLinkLocale>

        <NuxtLinkLocale
          to="/construction"
          class="2xl:min-h-[595px] lg:min-h-[432px] min-h-[400px] h-full bg-custom relative group cursor-pointer transition-300 hover:opacity-80">
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <img src="/images/do3.png" alt="ESG" class="w-full h-full object-cover">
          </div>
          <div class="w-full h-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10">
            <div
              class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
              <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
              <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
            </div>

            <div class="">
              <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">
                {{ $t('navbar.construction') }}</h2>
              <p class="text-white mt-4">{{ $t('navbar.construction_desc') }}.</p>
            </div>
          </div>
        </NuxtLinkLocale>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
