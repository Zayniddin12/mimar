<template>
  <section>
    <div class="container">
      <div class="relative w-full">
        <Swiper
          class="relative"
        >
          <div>
            <div class="relative grid md:grid-cols-2 md:min-h-[482px]">
              <div
                class="col-span-1 h-full bg-custom relative md:pt-[94px] pt-[70px] max-[960px]:!pl-5  pl-[133px]  px-6 max-md:pb-10">
                <div class="w-full max-w-[415px]">
                  <div class="">
                    <span class="sm:h-14 h-12 rounded w-[30%] gray-shimmer mb-4" />
                    <span
                      v-for="item in 4" :key="item"
                      class="first:mt-4 sm:h-5 h-4 w-full gray-shimmer rounded-lg" />
                    <span class="gray-shimmer w-[200px] h-[54px] mt-8" />
                  </div>

                </div>
                <img
                  src="/images/Group2.png" alt="Background effect"
                  class="w-full h-full object-cover absolute top-0 left-0">
              </div>
              <div class="col-span-1 h-full max-md:h-[432px] bg-custom relative w-full" />
            </div>
          </div>
        </Swiper>
        <!-- Single Progress Bar -->
        <div class="3xl:px-[140px] 2xl:px-[120px] lg:px-[100px] md:px-[80px] px-[40px] mt-4 relative w-full">
          <div class="w-full h-[6px] bg-[#E2E8F0] overflow-hidden z-10">
            <div
              class="h-[6px] shimmer transition-all duration-75"
            />
          </div>
          <div class="flex justify-evenly transform -translate-y-[7px] translate-x-1 z-20">
            <div
              v-for="(index) in 3" :key="index"
              class="lg:w-[24px] w-[18px] h-2 shimmer" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>