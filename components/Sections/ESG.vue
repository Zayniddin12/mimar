<template>
  <section>
    <div class="container">
      <h2 class="3xl:mb-[48px] 2xl:mb-[36px] lg:mb-[30px] mb-[24px] capitalize">{{ $t('navbar.esg') }}</h2>

      <div class="lg:grid lg:grid-cols-2 max-lg:flex max-lg:flex-col gap-2">
        <NuxtLinkLocale to="/esg" class="2xl:max-h-[432px] h-full bg-custom cursor-pointer transition-300 relative">
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <img src="/images/esg2.png" alt="ESG" class="w-full h-full object-cover">
          </div>
          <div
            class="w-full h-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10 group">
            <div
              class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto bg-[#0A5B54] group-hover:bg-white duration-300">
              <p class="lg:text-[20px] text-[16px] leading-[150%] text-white group-hover:text-custom">1</p>
            </div>

            <div
              class="transform translate-y-[calc(100%-30px)] group-hover:translate-y-0 transition-transform duration-300">
              <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">
                {{ $t('navbar.environment_responsibility') }}</h2>
              <div class="mt-[30px] flex flex-col gap-4">
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%] capitalize">{{ $t('navbar.Social') }}</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Social Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Environmental Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </NuxtLinkLocale>

        <NuxtLinkLocale to="/esg" class="2xl:max-h-[432px] h-full bg-custom relative  cursor-pointer transition-300">
          <div class="absolute top-0 left-0 w-full bg-custom h-full z-0">
            <video
              src="/images/gif4.mp4"
              autoplay
              loop
              muted
              playsinline
              style="mix-blend-mode: color-dodge;     filter: invert(1);"
              class="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
          </div>
          <div
            class="w-full h-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10 group">
            <div
              class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto bg-[#0A5B54] group-hover:bg-white duration-300">
              <p class="lg:text-[20px] text-[16px] leading-[150%] text-white group-hover:text-custom">2</p>
            </div>

            <div
              class="transform translate-y-[calc(100%-30px)] group-hover:translate-y-0 transition-transform duration-300">
              <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white capitalize">
                {{ $t('navbar.Social') }}</h2>
              <div class="mt-[30px] flex flex-col gap-4">
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Environmental Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Social Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Environmental Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </NuxtLinkLocale>

        <NuxtLinkLocale to="/esg" class="2xl:max-h-[432px] h-full bg-custom relative cursor-pointer transition-300">
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <video
              src="/images/gif4.mp4"
              autoplay
              loop
              muted
              playsinline
              style="mix-blend-mode: color-dodge;     filter: invert(1);"
              class="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
          
          </div>
          <div
            class="w-full h-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10 group">
            <div
              class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto bg-[#0A5B54] group-hover:bg-white duration-300">
              <p class="lg:text-[20px] text-[16px] leading-[150%] text-white group-hover:text-custom">3</p>
            </div>

            <div
              class="transform translate-y-[calc(100%-30px)] group-hover:translate-y-0 transition-transform duration-300">
              <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">
                {{ $t('navbar.our_esg_goals') }}</h2>
              <div class="mt-[30px] flex flex-col gap-4">
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Environmental Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Social Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Environmental Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </NuxtLinkLocale>

        <NuxtLinkLocale to="/esg" class="2xl:max-h-[432px]  h-full bg-custom relative  cursor-pointer transition-300">
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <img src="/images/esg1.png" alt="ESG" class="w-full h-full object-cover">
          </div>
          <div
            class="w-full h-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10 group">
            <div
              class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto bg-[#0A5B54] group-hover:bg-white duration-300">
              <p class="lg:text-[20px] text-[16px] leading-[150%] text-white group-hover:text-custom">4</p>
            </div>

            <div
              class="transform translate-y-[calc(100%-30px)] group-hover:translate-y-0 transition-transform duration-300">
              <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">
                {{ $t('navbar.Governance') }}</h2>
              <div class="mt-[30px] flex flex-col gap-4">
                <NuxtLink to="/public">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Environmental Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="/public">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Social Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
                <NuxtLink to="/public">
                  <div class="flex items-center gap-2">
                    <p class="text-[20px] text-white leading-[150%]">Environmental Goals</p>
                    <img src="/icons/Arrow-Down.png" alt="Arrrow right" class="w-6 h-6 object-cover">
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </NuxtLinkLocale>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
