<template>
  <div class="breadcrumb !text-white  py-2.5 hidden-on-print hidden md:block">
    <p class="font-normal leading-104 text-96 !text-white mb-1">{{ title }}</p>
    <div class="flex items-center gap-1.5">
      <NuxtLink
        to="/"
        class="flex items-center gap-[14px]  font-medium leading-normal text-sm transition-300  group"
      >
        <p class="text-white text-20 font-normal leading-120">{{ $t('main') }}</p>
      </NuxtLink>
      <div
        v-for="(item, index) in breadcrumb"
        :key="index"
        class="flex items-center gap-2 group shrink-0 line-clamp-1"
      >
        <i-chevron class="text-24 -rotate-90 mt-1" />

        <!--        <i class="icon-chevron text-gray text-sm leading-[14px] -rotate-90" />-->
        <NuxtLink
          :to="item?.link"
          :class="{
            'pointer-events-none  ':
              index === breadcrumb?.length - 1,
          }"
          class="transition-300 flex cursor-pointer items-center  leading-130  text-20 font-normal leading-120 min-w-max breadcrumb-menu  truncate max-w-sm"
        >
          {{ item?.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBreadcrumb } from '~/types/index';

interface Props {
  breadcrumb: IBreadcrumb[];
  title: string;
}

defineProps<Props>();
</script>
