<template>
  <section>
    <div class="container w-full">
      <div class="grid md:grid-cols-5 gap-2 w-full">
        <div class="md:col-span-2 w-full">
          <div class="md:h-16 h-12 shimmer rounded w-1/2 " />
        </div>
        <div class="md:col-span-3 w-full">
          <div class="sm:h-[200px] h-[150px] rounded w-full shimmer mt-4" />
          <span class="mt-8 w-[200px] h-[54px] rounded-lg shimmer" />

        </div>
      </div>

      <div
        class="lg:mt-10 mt-5 3xl:h-[600px] xl:h-[520px] lg:h-[440px] md:h-[360px] h-[300px]"
        style="background-position: center center; background-size: cover; background-image: url('/images/AboutUs.png');">
        <div class="h-full flex items-end 2xl:p-10 lg:p-5 p-4">
          <SectionsStatisticsLoading />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  isButton?: boolean;
}

defineProps<Props>();
</script>