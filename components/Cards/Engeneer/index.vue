<template>
  <div class="relative md:h-screen sm:h-[400px] md:pb-[190px] sm:pb-[90px] pb-6">
    <img :src="images" alt="img" class="sm:size-full z-0 aspect-video object-cover">
    <div class="container relative">
      <CardsInformationEngeneer
        :id="id"
        :title="title"
        :description="description"
        :class="cardStyle"
        :list="list"
        class="sm:absolute md:-bottom-[72px] -bottom-2 z-10 md:w-fit w-full" />
    </div>
  </div>
</template>
<script setup lang="ts">

interface IProps {
  id?: number;
  images: string;
  cardStyle?: string;
  title: string;
  description: string;
  list?: {
    title: string;
    id: string;
  }[] | unknown;
}

defineProps<IProps>();
</script>