<template>
  <div>
    <p class="text-custom font-normal leading-130 sm:text-56 text-3xl">0{{ number }}</p>
    <p class="text-dark  font-medium  leading-130 lg:text-56 md:text-3xl  text-2xl">
      {{ $t(title) }}</p>
    <p class="font-golos leading-150 sm:text-20 text-sm font-normal mt-4">{{ $t(description) }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  number: number;
  title: string;
  description: string;
}

defineProps<Props>();
</script>