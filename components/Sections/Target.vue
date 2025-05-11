<template>
  <div class="bg-gray-100 sm:py-16 py-4 md:mt-[120px] mt-10">
    <div class="container grid sm:grid-cols-3 grid-cols-1 gap-1 divide-x divide-[#99B7B429]">
      <CardsInformationTarget
        v-for="(item, index) in targets"
        :key="index" :description="item.description"
        :title="item.title"
        class="first:pl-0 lg:px-[70px] md:px-10 px-3 last:pr-0"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { targets } from '~/data/offer';
</script>