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

      <div v-if="products?.length" class="relative w-full">
        <Swiper
          ref="swiperRef"
          :slides-per-view="1"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1'
          }"
          :modules="[Navigation, Autoplay]"
          :autoplay="{
            delay: autoplayDelay,
            disableOnInteraction: true
          }"
          class="relative mySwiper"
          @slide-change="onSlideChange"
        >
          <SwiperSlide v-for="(item, index) in list" :key="index">
            <NuxtLinkLocale :to="`/projects/${item?.slug}`" class="relative transition-300 cursor-pointer">
              <img
                :src="item?.images?.[0]?.lg"
                alt="slide image"
                class="w-full md:h-[592px] h-[300px] object-cover"
              >
              <div
                class="absolute md:bottom-10 bottom-3 md:left-10 left-3 sm:py-4 py-2 sm:px-10 px-4 sm:border-l-[8px] border-l-[4px] border-white"
                style="backdrop-filter: blur(16px); background-color: rgba(255, 255, 255, 0.24);"
              >
                <p class="text-white">{{ item.title }}</p>
              </div>
            </NuxtLinkLocale>
          </SwiperSlide>

          <!-- Custom Arrows -->
          <div
            v-if="list?.length>1"
            class="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between z-20 sm:px-10 px-2">
            <div class="swiper-button-prev1 custom-nav">
              <img src="/icons/Arrow-Right-white.png" alt="Prev" class="rotate-180">
            </div>
            <div class="swiper-button-next1 custom-nav">
              <img src="/icons/Arrow-Right-white.png" alt="Next">
            </div>
          </div>
        </Swiper>

        <!-- Progress Bar -->
        <div
          v-if="list?.length>1"
          class="3xl:px-[140px] 2xl:px-[120px] lg:px-[100px] md:px-[80px] px-[40px] mt-4 relative">
          <div class="w-full h-[6px] bg-[#E2E8F0] overflow-hidden z-10">
            <div
              class="h-[6px] bg-custom transition-all duration-75"
              :style="{ width: totalProgress + '%' }"
            />
          </div>
          <div class="flex justify-evenly transform -translate-y-[7px] translate-x-1 z-20">
            <div
              v-for="(i, index) in list?.length - 1"
              :key="index"
              class="lg:w-[24px] w-[18px] h-2 bg-[#F9F9F9]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

const products = ref([]);
const isActive = ref(true);
const swiperRef = ref(null);
const autoplayDelay = 3000;
const intervalTime = 60;
const totalProgress = ref(0);
let timer = null;

const startProgress = () => {
  clearInterval(timer);
  totalProgress.value = 0;
  let elapsed = 0;

  timer = setInterval(() => {
    elapsed += intervalTime;
    const progressPercent = Math.min((elapsed / autoplayDelay) * 100, 100);
    totalProgress.value = progressPercent;
    if (progressPercent >= 100) clearInterval(timer);
  }, intervalTime);
};

const onSlideChange = () => {
  startProgress();
};
const list = ref([]);


const fetchProjects = async () => {
  try {
    const res = await useApi().$get('/products');
    products.value = res.data;
    list.value = isActive.value
      ? products.value.filter(item => item.status === '1')
      : products.value.filter(item => item.status === '0');

    await nextTick();
    startProgress();
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};
watch(isActive, (newVal) => {
  console.log(products.value);
  if (newVal) {
    list.value = products.value.filter(item => item.status == '1');
    console.log('active', list.value);
  } else {
    list.value = products.value.filter(item => item.status == '0');
    console.log('inactive', list.value);
  }

}, { deep: true });
onMounted(() => {
  fetchProjects();
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

@media screen and (max-width: 720px) {
  .swiper-button-prev1,
  .swiper-button-next1 {
    width: 32px;
    height: 32px;
  }
}
</style>
