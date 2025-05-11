<template>
  <div class="grid sm:grid-cols-3 w-full gap-2">
    <div
      v-for="item in 3" :key="item"
      class="sm:pt-4 sm:pb-6 sm:px-10 p-2 bg-white/20 backdrop-blur-lg flex flex-col justify-between w-full"
      style="backdrop-filter: blur(16px);">
      <span class="md:h-[96px] sm:h-14 text-5 gray-shimmer w-[30%] rounded" />
      <span class="sm:h-5 h-3 gray-shimmer w-full rounded mt-2" />
    </div>
  </div>
</template>