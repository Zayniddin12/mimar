<template>
  <div class="grid sm:grid-cols-3 w-full gap-2">
    <div
      class="sm:pt-4 sm:pb-6 sm:px-10 p-2 bg-white/20 backdrop-blur-lg flex flex-col justify-between"
      style="backdrop-filter: blur(16px);">
      <h2 class="md:text-[96px] sm:text-56 text-xl leading-[100%] text-white">20<span>+</span></h2>
      <p class="text-white leading-[100%] sm:text-20 text-sm">{{ $t('navbar.finished_pr') }}</p>
    </div>
    <div
      class="sm:pt-4 sm:pb-6 sm:px-10 p-2 bg-white/20 backdrop-blur-lg flex flex-col justify-between"
      style="backdrop-filter: blur(16px);">
      <h2 class="md:text-[96px] sm:text-56 text-xl leading-[100%] text-white">100<span>+</span></h2>
      <p class="text-white leading-[100%] sm:text-20 text-sm">{{ $t('navbar.qualified_experts') }}</p>
    </div>
    <div
      class="sm:pt-4 sm:pb-6 sm:px-10 p-2 bg-white/20 backdrop-blur-lg flex flex-col justify-between"
      style="backdrop-filter: blur(16px);">
      <h2 class="md:text-[96px] sm:text-56 text-2xl leading-[100%] text-white">10<span>+</span></h2>
      <p class="text-white leading-[100%] sm:!text-20 !text-sm">{{ $t('navbar.success_pr') }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>