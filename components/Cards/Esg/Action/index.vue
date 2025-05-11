<template>
  <div class="bg-white lg:p-8 p-4 flex flex-col lg:gap-8 gap-3">
    <img :src="image" alt="esg" class="h-[288px] w-full object-cover aspect-video">
    <p class="min-[1600px]:text-64 min-[1200px]:text-3xl text-2xl leading-110 font-normal"> {{ title }}</p>
    <p class="leading-150 lg:text-20 text-base font-normal font-golos text-dark">{{ description }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  image: string;
}

defineProps<Props>();
</script>