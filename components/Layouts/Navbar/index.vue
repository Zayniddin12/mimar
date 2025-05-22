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
                v-if="item?.slug!=='contacts' && item?.slug!=='services'" :to="item?.slug"
                class="font-golos text-20 font-medium text-white">{{ $t(item.title) }}
              </NuxtLinkLocale>
              <a v-else-if="item?.slug=='contacts'" class="font-golos text-20 font-medium text-white" href="#contacts">{{ $t(item.title)
                }}</a>
              <NuxtLinkLocale
                v-else-if="item?.slug=='services'" class="font-golos text-20 font-medium text-white"
                :to="'/#services'">{{ $t(item.title)
                }}
              </NuxtLinkLocale>
            </template>
            <div
              ref="project"
              class="cursor-pointer relative z-30 select-none w-fit"
              @click="open = !open"
            >
              <div class="flex gap-1 items-center font-golos text-20 font-medium text-white">
                {{ $t('navbar.projects') }}
                <i-chevron
                  class="align-middle text-white transition-300 block text-2xl mt-1 transition-300"
                  :class="{ 'rotate-180': open }"
                />
              </div>
              <Transition mode="out-in" name="move">
                <div
                  v-if="open"
                  class="flex flex-col absolute  z-20 -mt-0 -ml-2 bg-white/60 backdrop-blur-lg border border-gray rounded-xl w-full truncate"
                >
                  <NuxtLinkLocale
                    v-for="(lang, key) of items"
                    :key
                    :to="`/projects?status=${lang.code}`"
                    :class="{
                      '!font-bold': Number(lang.code) === Number(route.query.status),
            'border-transparent rounded-b-lg': key === items.length - 1,
          }"
                    class="py-1 px-2 !text-sm text-custom font-medium hover:bg-gray-200 transition-300 flex justify-between gap-1 items-center"
                  >
                    {{ $t(lang?.key) }}
                  </NuxtLinkLocale>
                </div>
              </Transition>
            </div>
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
import { useRouteQuery } from '@vueuse/router';
import { onClickOutside } from '@vueuse/core';

const isShown = ref(false);
const route = useRoute();
const page = useRouteQuery('active', '');
const open = ref(false);
const project = ref<HTMLDivElement | null>();
onClickOutside(project, () => (open.value = false));

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

const items = ref([
  {
    key: 'navbar.active',
    code: 1,
  },
  {
    key: 'navbar.completed',
    code: 0,
  },
]);


function changeStatus(item: string) {
  page.value = item;
}
</script>

<style scoped></style>