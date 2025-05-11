<template>
  <div class="border border-gray-200 bg-gray-400 md:px-14 md:py-12 p-3 w-fit max-w-[826px]">
    <div
      v-if="id"
      class="size-14 rounded-full border-gray-200 border bg-gray-500 flex-center text-custom-100 font-normal leading-104 text-32">
      {{ id }}
    </div>
    <p class="md:my-6 my-2 md:text-64 text-2xl font-normal leading-104 text-custom-100">{{ title }}</p>
    <p class="text-dark-100 font-golos font-normal md:text-20 text-sm leading-150">{{ description }}</p>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  id?: number;
  title?: string;
  description?: string;
}

defineProps<IProps>();
</script>