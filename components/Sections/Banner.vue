<template>
  <section>
    <div class="w-full md:h-screen h-[400px] relative">
      <div class="absolute top-0 left-0 w-full h-full z-0">
        <img :src="image" alt="Banner inmage" :class="imageStyle" class="md:h-screen h-[400px] min-w-full object-cover">
        <img
          v-if="mimar" src="/images/mimar.svg" class="absolute aspect-video w-[70%] h-full z-0 -top-0 right-20"
          alt="mimar">
      </div>
      <div :class="gradient" class=" absolute top-0 left-0 w-full h-full z-[5]" />

      <div class="w-full h-full flex items-end 2xl:pb-[60px] lg:pb-[50px] pb-[40px] relative z-10 border">
        <div class="container">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  gradient?: string;
  imageStyle?: string;
  mimar?: boolean;
}

defineProps<Props>();
</script>

<style scoped>

</style>