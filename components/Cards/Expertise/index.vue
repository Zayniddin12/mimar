<template>
  <div
    class="bg-white flex gap-11 p-8 max-sm:flex-col group overflow-hidden hover:shadow-main-card-hover transition-300">
    <div>
      <h3 class="text-custom font-normal leading-110 md:text-48 text-2xl mb-3 font-alumni">{{ title }}</h3>
      <p
        class="text-dark font-normal leading-150 md:text-20 text-base">
        {{ description }}</p>
    </div>
    <img :src="image" alt="espertise" class="md:w-1/2 sm:w-1/4 w-full aspect-video h-full object-cover">
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