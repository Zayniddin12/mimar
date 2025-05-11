<template>
  <div class="bg-custom md:py-[120px] py-6 relative">
    <img
      :src="image ?? '/images/decoration.svg'" alt="decoration"
      :class="imageClass"
      class="absolute right-0 min-size-full top-0">

    <div class="flex-center flex-col gap-6  max-w-[816px] w-full mx-auto container">
      <div
        v-if="id"
        class="sm:size-14 size-10 rounded-full border-custom-200 border bg-custom-300 flex-center text-white font-normal leading-104 sm:text-32 text-xl">
        {{ id }}
      </div>
      <p v-if="title" class="md:text-64 text-3xl text-white leading-104 text-center">{{ title }}</p>
      <p class="text-white font-golos md:text-2xl text-base font-normal leading-130 text-center">
        {{ text }}
      </p>
    </div>

  </div>
</template>
<script setup lang="ts">

interface Text {
  id?: number;
  text: string;
  image?: string;
  title?: string;
  imageClass?: string;
}

defineProps<Text>();
</script>