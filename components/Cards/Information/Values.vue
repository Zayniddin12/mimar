<template>
  <div class="md:p-8 p-3 bg-white flex flex-col justify-between">
    <p class="text-custom lg:text-56 min-[820px]:text-4xl text-2xl font-normal leading-130 mb-6">{{ $t(title) }}</p>
    <p class="text-dark min-[820px]:text-20 text-sm leading-150 font-normal md:mb-[110px] mb-10">{{ $t(description)
      }}</p>
    <img :src="image" alt="image" class="relative aspect-video object-cover w-full">
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