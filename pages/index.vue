<template>
  <div class="flex flex-col md:gap-[128px] gap-10 md:pb-[128px] pb-10  overflow-hidden">
    <div class="relative md:!min-h-screen !min-h-[400px]">

      <div v-if="!banners?.length" class="bg-main-banner-gr absolute top-0 left-0 w-full h-full z-[5]" />
      <ClientOnly>


        <Swiper
          v-if="banners?.length"
          class="swiper md:size-screen md:!h-screen !h-[400px] max-md:!absolute w-full"
          :settings="settings"
          v-bind="settings"
        >
          <SwiperSlide
            v-for="(banner, index) in banners"
            :key="index"
            class="relative md:!w-screen md:!h-screen !h-full !w-full z-1"
          >
            <SectionsBanner :image="banner?.images?.lg" gradient="bg-main-banner-gr">
              <Transition mode="out-in" name="fade-in">

                <h1
                  v-if="!loading"
                  class="lg:w-[60%] font-alumni 2xl:text-[128px] lg:text-[100px] md:text-[80px] sm:text-56 text-48 text-white leading-[96%]">
                  {{ banner?.title }}</h1>
                <div
                  v-else
                  class="flex flex-col"
                >
                            <span
                              class="block lg:w-[60%]  2xl:h-[128px] lg:h-[100px] md:h-[80px] sm:h-[56px] h-[48px] leading-[96%] gray-shimmer rounded" />

                </div>
              </Transition>
            </SectionsBanner>
          </SwiperSlide>
        </Swiper>

      </ClientOnly>
    </div>


    <Transition mode="in-out" name="fade-out">
      <div :key="loading">
        <LazySectionsAboutUs
          v-if="!loading"
          is-button />
        <LazySectionsAboutUsLoading v-else is-button />
      </div>
    </Transition>
    <Transition mode="in-out" name="fade-out">
      <div id="services" :key="loading">
        <SectionsWhatWeDo v-if="!loading" />
        <SectionsWhatWeDoLoading v-else />
      </div>
    </Transition>
    <Transition mode="in-out" name="fade-out">
      <div :key="loading">
        <SectionsInfoBanner v-if="!loading" />
        <SectionsInfoBannerLoading v-else />
      </div>
    </Transition>

    <SectionsExpertises />
    <!--    <SectionsProjects />-->
    <SectionsExampleProjects />
    <SectionsESG />
  </div>
</template>
<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/effect-fade';
import { onMounted } from 'vue';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { IBanners, IResponse } from '~/types';


const loading = ref(true);
const banners = ref();
const route = useRoute();
const settings = {
  pagination: {
    clickable: true,
  },
  effect: 'fade',
  initialSlide: 0,
  navigation: { nextEl: '.living-next-el', prevEl: '.living-prev-el' },
  loop: true,
  modules: [EffectFade, Autoplay, Pagination, Navigation],
  autoplay: {
    delay: 5000,
  },
};


function fetchProjects() {
  return new Promise((resolve, reject) => {
    loading.value = true;
    useApi()
      .$get<IResponse<IBanners>>(
        '/banners',
      )
      .then((res) => {
        banners.value = res.data;
        console.log(banners.value);
        loading.value = false;
        resolve(res);
      })
      .catch((err) => {
        loading.value = false;
        reject(err);
      })
      .finally(() => {
        loading.value = false;
      });
  });
}


onMounted(() => {
  fetchProjects();
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

watch(
  () => route.hash,
  async (hash) => {
    if (hash) {
      // DOM to‘liq tayyor bo‘lishini kutamiz
      await nextTick();
      // va yana biroz kutamiz (components lazy-loaded bo'lishi mumkin)
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // kerak bo‘lsa 200-300 ms ga oshiring
    }
  },
  { immediate: true },
);
useSeoMeta({
  title: 'MIMAR',
  ogTitle: 'OUR EXPERIENCE IS YOUR SUCCESS',
  twitterTitle: 'OUR EXPERIENCE IS YOUR SUCCESS',
  ogImage: '/favicon.png',
  twitterImage: '/favicon.png',
});
</script>
<style>
.swiper .swiper-pagination-bullets {
  display: none !important;
}

</style>