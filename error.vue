<template>

  <div class="min-h-screen w-full relative  flex-center flex-col bg-custom py-[90px]">
    <img
      src="/images/404-dec-left.svg"
      alt="gerb"
      class="w-full h-full absolute top-0 left-0 aspect-[1/1] z-0"
    >
    <img
      src="/images/404-dec-right.svg"
      alt="gerb"
      class="w-full h-full absolute bottom-0 right-0 aspect-[1/1] z-0"
    >


    <p
      class="text-white md:text-[72px] sm:text-48 text-4xl font-normal relative z-10 leading-[80xp]  text-center"
    >
      {{ t('no_found_page') }}
    </p>
    <div class="relative">
      <img
        src="/images/broken-hand.svg"
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 -my-4 h-[70%]">
      <h1
        class="min-[1150]:text-[600px] md:text-[400px] sm:text-[250px] text-[180px] min-[1150]:!leading-[600px] md:!leading-[400px] sm:leading-[250px] leading-[180px] font-bold font-golos relative z-10  text-custom-400 mb-5">
        {{ error.statusCode }}
      </h1>
    </div>
    <NuxtLinkLocale to="/">
      <BaseButton variant="white" :text="$t('go_back_home')" class="relative z-20" />
    </NuxtLinkLocale>

  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
  error: NuxtError;
}

defineProps<Props>();

const { t } = useI18n();
</script>