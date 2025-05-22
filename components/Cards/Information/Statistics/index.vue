<template>
  <div class="flex justify-between">
    <div class="space-y-2">
      <p class="min-[1200px]:text-[72px] lg:text-64 sm:text-3xl text-xl text-custom font-normal">{{ data }}</p>
      <p class="sm:text-lg text-sm text-dark-100 font-medium leading-6">{{ $t('data') }}</p>
    </div>
    <div class="space-y-2">
      <p class="min-[1200px]:text-[72px] lg:text-64 sm:text-3xl text-xl text-custom font-normal ">{{ square }}</p>
      <p class="sm:text-lg text-sm text-dark-100 font-medium leading-6">{{ $t('square') }}</p>
    </div>
    <div class="space-y-2">
      <p class="min-[1200px]:text-[72px] lg:text-64 sm:text-3xl text-xl text-custom font-normal ">{{ type }}</p>
      <p class="sm:text-lg text-sm text-dark-100 font-medium leading-6">{{ $t('architecture_type') }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  data: string;
  square: string;
  type: string;
}

defineProps<IProps>();
</script>