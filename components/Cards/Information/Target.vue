<template>
  <div class="sm:space-y-6 space-y-1 text-center">
    <p class=" lg:text-56 md:text-48 text-3xl text-custom leading-130 font-normal">{{ $t(title) }}</p>
    <p class="lg:text-20 md:text-lg text-sm text-dark font-normal leading-150 font-golos">{{ $t(description) }}</p>
  </div>
</template>
<script setup lang="ts">
interface CardProps {
  title: string;
  description: string;
}

defineProps<CardProps>();
</script>