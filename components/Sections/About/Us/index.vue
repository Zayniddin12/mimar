<template>
  <section>
    <div class="container">
      <div class="grid md:grid-cols-5 gap-2">
        <div class="md:col-span-2">
          <h2 class="md:text-64 text-48 font-normal leading-130 text-dark">{{ $t('navbar.about_us') }}</h2>
        </div>
        <div class="md:col-span-3">
          <p class="sm:text-20 text-sm text-black leading-150 font-normal">{{ $t('navbar.about_us_desc') }}</p>
          <NuxtLinkLocale v-if="isButton" to="/about">
            <BaseButton :text="$t('navbar.more')" class="mt-8" />
          </NuxtLinkLocale>

        </div>
      </div>

      <div

        class="lg:mt-10 mt-5 3xl:h-[600px] xl:h-[520px] lg:h-[440px] md:h-[360px] h-[300px] relative"
      >
        <img src="/images/AboutUs.png" class="absolute size-full top-0 left-0 object-cover">
        <div class="h-full flex items-end 2xl:p-10 lg:p-5 p-4">
          <SectionsStatistics />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  isButton?: boolean;
}

defineProps<Props>();
</script>

<style scoped>

</style>