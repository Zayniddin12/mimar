<template>
  <div class="container sm:py-[120px] py-10">
    <p class="sm:text-64 md:text-48 text-3xl md:font-normal font-medium text-dark leading-130 sm:mb-6 mb-3">
      {{ $t('navbar.we_offer')
      }}</p>
    <div class="grid sm:grid-cols-2 min-[850px]:gap-x-[278px]  sm:gap-10 gap-6 md:gap-y-14">
      <CardsOffer
        v-for="(item, index) in offers"
        :key="index"
        :title="item.title"
        :number="item.id"
        :description="item.description" />
    </div>
  </div>
</template>
<script lang="ts" setup>

import { offers } from '~/data/offer';
</script>