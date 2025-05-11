<template>
  <div class="container  ">
    <img :src="image" alt="image" class="size-full max-h-[600px] aspect-video relative">
  </div>
</template>
<script setup lang="ts">
interface Image {
  image: string;
}

defineProps<Image>();
</script>