<template>
  <div class="flex flex-col justify-between bg-white p-8">
    <p class="min-[1600px]:text-64 min-[1200px]:text-48 text-2xl leading-110 text-dark font-normal mb-6">{{ title }}</p>
    <p class="font-golos lg:text-20 text-base leading-150 text-dark font-normal">{{ description }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

defineProps<Props>();
</script>