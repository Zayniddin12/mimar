<template>
  <div class="relative">
    <div class="absolute top-0 left-0 right-0 z-50 h-[80px] bg-white/15 backdrop-blur-lg">
      <div class="container h-full">
        <div class="w-full h-full flex justify-between items-center">
          <NuxtLinkLocale to="/">
            <img src="/icons/logo.png" alt="Logo" class="2xl:w-[214px] lg:w-[180px] w-[150px]">
          </NuxtLinkLocale>

          <div class="max-lg:hidden flex items-center 2xl:gap-[64px] lg:gap-[48px]">
            <template v-for="(item, key) in Links" :key>
              <NuxtLinkLocale
                v-if="item?.slug!=='contacts'" :to="item?.slug"
                class="font-golos text-20 font-medium text-white">{{ $t(item.title) }}
              </NuxtLinkLocale>
              <a v-else class="font-golos text-20 font-medium text-white" href="#contacts">{{ $t(item.title) }}</a>
            </template>
          </div>
          <BaseLanguage />
          <div class="cursor-pointer mr-3 lg:hidden" @click="showMobileHeader">
            <i-burger class="text-white text-[28px]" />
          </div>


        </div>
      </div>
    </div>
    <Transition name="from-left">
      <LayoutsNavbarMobile
        v-if="isShown"
        :links="Links"
        @close-mobile-header="onCloseMobileHeader"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Links } from '~/data';

const isShown = ref(false);


const onCloseMobileHeader = () => {
  if (import.meta.client) {
    document.body.style.overflow = 'auto';
    isShown.value = false;
  }
};

// const handleOutsideClick = () => {
//   isShown.value = false;
// };
const showMobileHeader = () => {
  if (import.meta.client) {
    document.body.style.overflow = 'hidden';
    isShown.value = true;
  }
};
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<style scoped></style>