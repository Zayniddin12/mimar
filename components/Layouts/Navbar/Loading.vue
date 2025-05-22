<template>
  <div class="relative">
    <div class="absolute top-0 left-0 right-0 z-50 h-[80px] bg-white/15 backdrop-blur-lg">
      <div class="container h-full">
        <div class="w-full h-full flex justify-between items-center">
          <div class="2xl:w-[214px] lg:w-[180px] w-[150px] gray-shimmer h-[26px]" />
          <div class="max-lg:hidden flex items-center 2xl:gap-[64px] lg:gap-[48px]">
            <span v-for="item of 4" :key="item" class="h-5 rounded w-[100px] gray-shimmer" />
          </div>
          <BaseLanguage />
          <div class="cursor-pointer mr-3 lg:hidden" @click="showMobileHeader">
            <i-burger class="text-white text-[28px]" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
</script>