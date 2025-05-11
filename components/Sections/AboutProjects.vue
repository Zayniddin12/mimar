<template>
  <section class="mt-[120px]">
    <div class="container">
      <div class="3xl:mb-[48px] 2xl:mb-[36px] lg:mb-[30px] mb-[24px] flex-center-between">
        <h2 class="">{{ $t('navbar.projects') }}</h2>
        <!-- Custom Arrows -->
        <div class="flex justify-between z-20 px-10 gap-4">
          <div class="swiper-button-prev1 hover:!bg-custom transition-300 group">
            <i-chevron class="text-dark-200 rotate-90 text-2xl group-hover:text-white transition-300 -ml-1" />
          </div>
          <div class="swiper-button-next1  hover:!bg-custom transition-300 group">
            <i-chevron
              class="text-dark-200 -rotate-90 text-2xl group-hover:text-white transition-300  -mr-1 " />
          </div>
        </div>
      </div>
      <div class="relative w-full">
        <Swiper
          ref="swiperRef"
          :slides-per-view="1"
          :navigation="{
                        nextEl: '.swiper-button-next1',
                        prevEl: '.swiper-button-prev1'
                    }"
          :modules="[Navigation]"
          :pagination="false"
          :loop="true"
          class="relative mySwiper"
          @slide-change="onSlideChange($event)"
        >
          <SwiperSlide v-for="(item, index) in products" :key="index">
            <CardsInformationProjects
              :title="item?.title"
              :description="item?.description"
              :images="item?.images"
              :slug="item?.slug"
            />
          </SwiperSlide>


        </Swiper>
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
import { Navigation } from 'swiper/modules';


const swiperRef = ref(null);

const currentIndex = ref(0);

const onSlideChange = (e) => {
  currentIndex.value = e.realIndex;
};
const products = ref([]);
const fetchProjects = async () => {
  try {
    const res = await useApi().$get('/products');
    products.value = res.data;
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};
onMounted(() => {
  fetchProjects();
});

</script>

<style scoped>
.swiper-button-prev1,
.swiper-button-next1 {
  z-index: 10;
  background-color: rgba(255, 255, 255);
  border: 1px solid #F2F2F2;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 100%;
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
</style>