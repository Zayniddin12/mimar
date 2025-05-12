<template>
  <div class="grid sm:grid-cols-3 w-full gap-2">
    <div
      class="sm:pt-4 sm:pb-6 sm:px-10 p-2 bg-white/20 backdrop-blur-lg flex flex-col justify-between"
      style="backdrop-filter: blur(16px);">
      <vue3-autocounter
        v-if="isVisible"
        class="md:text-[96px] sm:text-56 text-xl leading-[100%] text-white"
        :start-amount="0"
        :end-amount="20"
        suffix="+"
        :duration="3"
        separator=" "
        decimal-separator="."
        :autoinit="true"
      />
      <p class="text-white leading-[100%] sm:text-20 text-sm">{{ $t('navbar.finished_pr') }}</p>
    </div>
    <div
      class="sm:pt-4 sm:pb-6 sm:px-10 p-2 bg-white/20 backdrop-blur-lg flex flex-col justify-between"
      style="backdrop-filter: blur(16px);">
      <vue3-autocounter
        v-if="isVisible"
        class="md:text-[96px] sm:text-56 text-xl leading-[100%] text-white"
        :start-amount="0"
        :end-amount="100"
        suffix="+"
        :duration="3"
        separator=" "
        decimal-separator="."
        :autoinit="true"
      />
      <p class="text-white leading-[100%] sm:text-20 text-sm">{{ $t('navbar.qualified_experts') }}</p>
    </div>
    <div
      class="sm:pt-4 sm:pb-6 sm:px-10 p-2 bg-white/20 backdrop-blur-lg flex flex-col justify-between"
      style="backdrop-filter: blur(16px);">
      <vue3-autocounter
        v-if="isVisible"
        class="md:text-[96px] sm:text-56 text-xl leading-[100%] text-white"
        :start-amount="0"
        :end-amount="10"
        suffix="+"
        :duration="3"
        separator=" "
        decimal-separator="."
        :autoinit="true"
      />
      <p class="text-white leading-[100%] sm:!text-20 !text-sm">{{ $t('navbar.success_pr') }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import vue3Autocounter from 'vue3-autocounter/src/vue3-autocounter.vue';

interface Props {
  isVisible: boolean;
}

defineProps<Props>();

</script>