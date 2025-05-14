<template>
  <section ref="counterRef">
    <div class="container">
      <div class="grid md:grid-cols-5 gap-2">
        <div class="md:col-span-2">
          <h2 class="md:text-64 text-48 font-normal leading-130 text-dark">{{ $t('navbar.about_us') }}</h2>
        </div>
        <div class="md:col-span-3">
          <p class="sm:text-20 text-sm text-black leading-150 font-normal">{{ $t('navbar.about_us_desc') }}</p>
          <NuxtLinkLocale v-if="isButton" to="/about">
            <BaseButton :text="$t('navbar.more')" class="mt-8 max-sm:py-2 max-sm:px-4 max-sm:text-sm" />
          </NuxtLinkLocale>

        </div>
      </div>

      <div

        class="lg:mt-10 mt-5 3xl:h-[600px] xl:h-[520px] lg:h-[440px] md:h-[360px] h-[300px] relative"
      >
        <img src="/images/AboutUs.png" class="absolute size-full top-0 left-0 object-cover">
        <div class="h-full flex items-end 2xl:p-10 lg:p-5 p-4">
          <SectionsStatistics :is-visible="isVisible" />
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
const isVisible = ref(false);
const counterRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  if (entries[0].isIntersecting) {
    isVisible.value = true;
    if (observer) {
      observer.disconnect();
    }
  }
};


onMounted(() => {
  observer = new IntersectionObserver(handleIntersect);
  if (counterRef.value) {
    observer.observe(counterRef.value);
  }
});
</script>

<style scoped>

</style>