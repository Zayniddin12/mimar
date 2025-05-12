<template>
  <div>
    <SectionsBanner :image="data?.images?.[0]?.lg" gradient="bg-procurement-banner-gr">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="data?.title" />
    </SectionsBanner>

    <div class="container">
      <!-- Katta asosiy slayd -->
      <swiper
        :modules="[Thumbs]"
        :thumbs="{ swiper: thumbsSwiper }"
        class="main-swiper !pt-[96px]"
      >
        <swiper-slide v-for="(image, index) in data?.images" :key="index">
          <img
            :src="image?.lg"
            class="w-full max-h-[680px] aspect-video object-cover"
          >
        </swiper-slide>
      </swiper>

      <!-- Pastdagi kichik rasmchalar (thumbs) -->
      <swiper
        class="thumbs-swiper mt-4"
        :modules="[Thumbs, FreeMode]"
        slides-per-view="auto"
        space-between="10"
        watch-slides-progress
        free-mode
        @swiper="onThumbsSwiper"
      >
        <swiper-slide
          v-for="(image, index) in data?.images"
          :key="index"
          class="!w-[180px] md:!w-[260px] lg:!w-[410px]  thumbs-swiper-thumb-active:!border-[3px] swiper-slide-thumb-active:border-custom"
        >
          <img
            :src="image?.md"
            class="aspect-video object-cover border  cursor-pointer w-full"
          >
        </swiper-slide>
      </swiper>
      <!--      <CardsInformationStatistics :data="'2010 г.'" type="Standart" square="4 156 156 m2" class="md:py-20 py-8" />-->

      <div class="html md:mt-20 mt-6" v-html="formatRichText(data?.description)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { ref } from 'vue';

interface ISingle {
  'id': number,
  'title': string,
  'description': string,
  'info': string,
  'stock': string,
  'status': string,
  'images': {
    'lg': string,
    'md': string,
    'sm': string
  }[],
  'slug': string,
  'meta_keywords': string,
  'meta_desc': string,
  'related_products': unknown[]
}


const thumbsSwiper = ref(null);
const onThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const { t } = useI18n();


const route = useRoute();

const { data, error } = await useAsyncData('fetchSingle', () =>
  useApi().$get <ISingle>(`/product/${route.params.slug}`),
);

if (error.value) {
  showError({ statusCode: 404 });
}

const breadcrumbRoutes = ref([
  {
    title: t('navbar.projects'),
    link: '/projects',
  },
  {
    title: data.value?.title,
    link: '/',
  },
]);

useSeoMeta({
  title: data.value?.title,
  ogTitle: data.value?.title,
  twitterTitle: data.value?.title,
  ogImage: data.value?.images?.[0]?.lg,
  twitterImage: data.value?.images?.[0]?.lg,
});
</script>

<style>
.html p {
  color: #000 !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.144px;
}

.html h1 {
  color: #004741;
  margin-bottom: 24px;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 104px;
  margin-top: 80px;
}

.html table {
  width: 100% !important;
}

.html table tbody td {
  text-align: center;
  color: #004741;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
  padding-bottom: 8px;
}

.html table tbody td p {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.144px;
  color: #000;
}

@media screen and (max-width: 780px) {
  .html h1 {
    margin-bottom: 6px;
  }
}

@media screen and (max-width: 1025px) {
  .html table tbody td {
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    padding-bottom: 8px;
  }

  .html h1 {
    color: #004741;
    margin-bottom: 24px;
    font-size: 46px;
    line-height: 56px;
    margin-top: 40px;
  }
}

@media screen and (max-width: 640px) {
  .html table tbody td {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    padding-bottom: 8px;
  }

  .html h1 {
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 46px;
    margin-top: 20px;
  }

  .html table tbody {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
  }

  .html table tbody tr {
    display: flex !important;
    flex-direction: column !important;
  }
}


.swiper-slide-thumb-active {
  @apply border-[3px] border-custom;
}
</style>
