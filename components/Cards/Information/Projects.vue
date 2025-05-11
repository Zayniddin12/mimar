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
    <p class="mt-6 mb-4 md:text-56 sm:text-4xl text-3xl text-dark-100 font-normal">{{ title }}</p>
    <div class="bg-gray-200 w-full h-[1px]" />
    <div
      class="mt-6 mb-8 flex flex-col text-gray-300 text-lg leading-130 font-medium"
      v-html="formatRichText(description)" />
    <NuxtLinkLocale :to="`/projects/${slug}`" class="w-full">
      <BaseButton :text="$t('navbar.more')" class="w-full" />
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