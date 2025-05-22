<template>
  <section>
    <div class="container">
      <div class="relative w-full">
        <Swiper
          ref="swiperRef"
          :slides-per-view="1"
          :navigation="false"
          :modules="[EffectFade, Autoplay]"
          :pagination="false"
          effect="fade"
          :autoplay="{
                 delay: 3000,
                 disableOnInteraction: true
                    }"
          :loop="true"
          class="relative mySwiper"
          @slide-change="onSlideChange($event)"
        >
          <SwiperSlide v-for="(item, index) in items" :key="index">
            <div class="relative grid md:grid-cols-2 md:min-h-[482px]">
              <div
                class="col-span-1 h-full bg-custom relative min-[1000px]:pt-[94px] pt-[70px] max-[960px]:!pl-5  pl-[133px]  px-6 max-md:pb-10">
                <div class="w-full relative z-10 max-w-[415px] ">
                  <div class="">
                    <h2 class="text-white sm:text-56 text-48 font-normal leading-130 font-alumni">{{ $t(item.title)
                      }}</h2>
                    <p class="text-white sm:text-20 text:base font-normal leading-130">{{ $t(item.desc) }}</p>
                  </div>

                </div>
                <video
                  src="/images/gif8.webm"
                  autoplay
                  loop
                  muted
                  playsinline
                  style="mix-blend-mode: color-dodge;"
                  class="w-full h-full object-cover absolute top-0 left-0 z-0"
                />
              </div>
              <div class="col-span-1 h-full max-md:h-[432px] bg-custom relative">
                <img
                  :src="item.image" alt="Banner"
                  class="w-full h-full  object-cover absolute top-0 left-0">
              </div>
              <div
                class="md:flex md:items-end absolute left-1/2 bottom-8 max-[960px]:!bottom-4 -translate-x-1/2 max-md:w-[90%] max-md:mx-auto">
                <div
                  class="py-4 max-[1000px]:py-2 px-10 max-[1000px]:px-4 border-l-[8px] border-white"
                  style="backdrop-filter: blur(16px); background-color: rgba(255, 255, 255, 0.24);">
                  <p class="text-white text-20 leading-150 font-normal font-golos">{{ $t(item.text) }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <!-- Single Progress Bar -->
        <div class="3xl:px-[140px] 2xl:px-[120px] lg:px-[100px] md:px-[80px] px-[40px] mt-4 relative">
          <div class="w-full h-[6px] bg-[#E2E8F0] overflow-hidden z-10">
            <div
              class="h-[6px] bg-custom transition-all duration-75"
              :style="{ width: totalProgress + '%' }" />
          </div>
          <div class="flex justify-evenly transform -translate-y-[7px] translate-x-1 z-20">
            <div
              v-for="(i, index) in items.length - 1" :key="index"
              class="lg:w-[24px] w-[18px] h-2 bg-[#F9F9F9]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';


const swiperRef = ref(null);
const autoplayDelay = 3000; // 3s
const intervalTime = 60; // how often to update progress
const currentIndex = ref(0);
// Slide data — props yoki statik
const items = [
  {
    image: '/images/info-banner.webp',
    title: 'navbar.mission',
    desc: 'navbar.mission_desc',
    text: 'navbar.pr_success',
  },
  {
    image: '/images/vision10.jpg',
    title: 'navbar.vision',
    desc: 'navbar.vission_desc',
    text: 'navbar.pr_success',
  },
  {
    image: '/images/esg1.png',
    title: 'navbar.target',
    desc: 'navbar.target_desc',
    text: 'navbar.pr_success',
  },
];

const totalProgress = ref(0);
let timer = null;

const startProgress = () => {
  totalProgress.value = 0;
  let elapsed = 0;
  const totalDuration = items.length * autoplayDelay;

  timer = setInterval(() => {
    elapsed += intervalTime;
    const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);
    totalProgress.value = progressPercent;

    if (progressPercent >= 100) {
      clearInterval(timer);
    }
  }, intervalTime);
};

const onSlideChange = (e) => {
  if (currentIndex.value > e.realIndex && e.realIndex === 0) {
    // Loop orqali boshiga qaytdi
    clearInterval(timer);
    startProgress();
  }

  currentIndex.value = e.realIndex;
};


onMounted(() => {
  startProgress();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
