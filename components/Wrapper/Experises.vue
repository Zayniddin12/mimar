<template>
  <div class="max-w-[860px] mx-auto md:pt-14 md:pb-24 py-8">
    <h3 class="md:text-64 text-2xl font-alumni text-dark font-normal leading-130 mb-4">{{ title }}</h3>
    <p class="font-golos sm:text-20 text-sm text-dark font-normal leading-150">{{ description
      }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

defineProps<Props>();
</script>