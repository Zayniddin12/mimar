<template>
  <div class="border border-gray-200 bg-white md:p-10 p-3">
    <div class="grid sm:grid-cols-12 max-sm:grid-rows-3 md:gap-6 gap-3 ">
      <div
        class="lg:col-span-9 sm:col-span-8  max-h-[560px] bg-[#CBD5E1]  flex-center"
        :class="{'lg:min-h-[563px] sm:min-h-[400px] min-h-[250px]':!images?.[0]?.lg}">
        <img
          :src="images?.[0]?.lg ?? '/images/default.svg'" alt="img" :class="{'size-full':images?.[0]?.lg}"
          class="object-cover aspect-video">
      </div>

      <div class="lg:col-span-3 sm:col-span-4 max-sm:row-span-2 flex flex-col h-full md:gap-6 gap-3">
        <div class="size-full flex-center relative bg-[#CBD5E1]">
          <img
            :src="images?.[1]?.lg ?? '/images/default.svg'" alt="img"
            :class="{'size-full':images?.[1]?.lg}"
            class="aspect-video  bg-[#CBD5E1] object-cover">
        </div>
        <div class="size-full flex-center relative bg-[#CBD5E1]">
          <img
            :src="images?.[2]?.lg ?? '/images/default.svg'" alt="img"
            :class="{'size-full':images?.[2]?.lg}"
            class="aspect-video   object-cover">
        </div>
      </div>
    </div>
    <p class="mt-6 mb-4 md:text-56 sm:text-4xl text-2xl text-dark-100 font-normal !leading-110">{{ title }}</p>
    <div class="bg-gray-200 w-full h-[1px] mb-6" />
    <div
      class="v-html md:!pb-8 pb-4"
      v-html="formatRichText(description)" />
    <NuxtLinkLocale :to="`/projects/${slug}`" class="w-full">
      <BaseButton :text="$t('navbar.more')" class="w-full max-md:text-sm! max-md:py-2" />
    </NuxtLinkLocale>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  images: {
    'lg': string,
    'md': string,
    'sm': string
  }[];
  title: string;
  description: string;
  slug: string;
}

defineProps<IProps>();
</script>
<style>
.v-html p {
  color: #334155 !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.144px;
}

.v-html h1 {
  display: none !important;
}

.v-html table {
  width: 100% !important;

}

.v-html table tbody td {
  text-align: center;
  color: #004741;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding-bottom: 8px;
}

.v-html table tbody tr {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
}

.v-html table tbody td p {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 133.333% */
  letter-spacing: -0.144px;
  color: #334155;
}

@media screen and (max-width: 780px) {
  .v-html h1 {
    margin-bottom: 6px;
  }
}

@media screen and (max-width: 1025px) {
  .v-html table tbody td {
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    padding-bottom: 8px;
  }

  .v-html h1 {
    color: #004741;
    margin-bottom: 24px;
    font-size: 46px;
    line-height: 56px;
    margin-top: 40px;
  }
}

@media screen and (max-width: 700px) {
  .v-html p {
    color: #334155 !important;
    font-size: 12px;;
    font-weight: 500;
  }

  .v-html table tbody td {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    padding-bottom: 8px;
  }

  .v-html h1 {
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 46px;
    margin-top: 20px;
  }

  .v-html table tbody {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    align-items: flex-start;
  }

  .v-html table tbody tr {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    height: 100% !important;
  }

  .v-html table tbody tr {
    height: 100% !important;
  }
}


</style>