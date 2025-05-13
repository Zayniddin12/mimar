<template>
  <section>
    <div class="container">
      <div class="flex justify-between items-center mb-14">
        <h2 class="3xl:mb-[48px] 2xl:mb-[36px] lg:mb-[30px] mb-[24px]">
          {{ $t('navbar.projects') }}
        </h2>

        <div class="flex p-2 bg-white border border-[#E2E8F0] gap-1">
          <BaseButton :variant="isActive? 'bg-green':'primary'" :text="$t('navbar.active')" @click="isActive=true" />
          <BaseButton
            :variant="!isActive? 'bg-green':'primary'" :text="$t('navbar.completed')"
            @click="isActive=false" />
        </div>
      </div>

      <div v-if="items?.length" class="relative w-full">
        <Swiper
          ref="swiperRef"
          :slides-per-view="1"
          :navigation="{
                        nextEl: '.swiper-button-next1',
                        prevEl: '.swiper-button-prev1'
                    }"
          :modules="[Navigation, Autoplay]"
          :pagination="false"
          :autoplay="{
                        delay: 3000,
                        disableOnInteraction: true
                    }"
          :loop="true"
          class="relative mySwiper"
          @slide-change="onSlideChange($event)"
        >
          <SwiperSlide v-for="(item, index) in items" :key="index">
            <NuxtLinkLocale
              :to="`/projects/${item?.slug}`" class="relative">
              <img :src="item?.images?.[0]?.lg" alt="slide image" class="w-full md:h-[592px] h-[300px] object-cover">
              <div
                class="absolute md:bottom-10 bottom-3 md:left-10 left-3 sm:py-4 py-2 sm:px-10 px-4 sm:border-l-[8px] border-l-[4px] border-white"
                style="backdrop-filter: blur(16px); background-color: rgba(255, 255, 255, 0.24);">
                <p class="text-white">{{ item.title }}</p>
              </div>
            </NuxtLinkLocale>
          </SwiperSlide>

          <!-- Custom Arrows -->
          <div class="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between z-20 sm:px-10 px-2">
            <div class="swiper-button-prev1 custom-nav ">
              <img src="/icons/Arrow-Right-white.png" alt="Prew" class="rotate-180">
            </div>
            <div class="swiper-button-next1 custom-nav">
              <img src="/icons/Arrow-Right-white.png" alt="Prew">
            </div>
          </div>

        </Swiper>
        <!-- Single Progress Bar -->
        <div
          v-if="items?.length>1"
          class="3xl:px-[140px] 2xl:px-[120px] lg:px-[100px] md:px-[80px] px-[40px] mt-4 relative">
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
import { Autoplay, Navigation } from 'swiper/modules';

const isActive = ref(true);
const products = ref([]);
const swiperRef = ref(null);
const autoplayDelay = 3000; // 3s
const intervalTime = 60; // how often to update progress
const currentIndex = ref(0);
// Slide data — props yoki statik
const items = ref([]);


const fetchProjects = async () => {
  try {
    const res = await useApi().$get('/products');
    products.value = res.data;

    items.value = isActive.value
      ? products.value.filter(item => item.status === '1')
      : products.value.filter(item => item.status === '0');
    console.log('products', items.value);
    await nextTick();
    startProgress();
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};
watch(isActive, async (newVal) => {
  console.log(products.value);
  if (newVal) {
    items.value = products.value.filter(item => item.status == '1');
    clearInterval(timer);
    await nextTick();
    startProgress();
  } else {
    items.value = products.value.filter(item => item.status == '0');
    clearInterval(timer);
    await nextTick();
    startProgress();
  }

}, { deep: true });
onMounted(() => {
  fetchProjects();
});

const totalProgress = ref(0);
let timer = null;

const startProgress = () => {
  totalProgress.value = 0;
  let elapsed = 0;
  const totalDuration = items.value.length * autoplayDelay;

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

<style scoped>
.swiper-button-prev1,
.swiper-button-next1 {
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(40px);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.swiper-button-prev1 {
  left: 10px;
}

.swiper-button-next1 {
  right: 10px;
}

@media screen and (max-width: 720px) {
  .swiper-button-prev1,
  .swiper-button-next1 {
    width: 32px;
    height: 32px;
  }

}
</style>