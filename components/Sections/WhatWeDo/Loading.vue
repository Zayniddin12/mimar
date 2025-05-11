<template>
  <section>
    <div class="container w-full">
      <span class="3xl:mb-[48px] 2xl:mb-[36px] lg:mb-[30px] mb-[24px] shimmer w-[30%] md:h-14 h-8" />

      <div class="grid lg:grid-cols-3 md:grid-cols-1 gap-2 w-full">
        <div v-for="item in 3" :key="item" class="2xl:h-[595px] lg:h-[432px] h-[400px] w-full bg-custom relative group">
          <div class="size-full 2xl:p-10 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative z-10">
            <div
              class="size-12 flex justify-center items-center rounded-full ml-auto gray-shimmer" />

            <div class="">
              <span class="2xl:h-10 lg:text-8 h-7 w-1/2 leading-[130%] font-golos gray-shimmer rounded" />
              <p class="mt-4 w-full rounded md:h-5 h-3 gray-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>