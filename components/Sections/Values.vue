<template>
  <div class="container md:pt-[120px] sm:pt-16 pt-10">
    <p class="sm:text-64 text-48 text-dark font-normal leading-130 mb-8">{{ $t('navbar.values') }}</p>
    <div class="grid lg:grid-cols-3 gap-2">
      <CardsInformationValues
        v-for="(item, key) in values" :key
        :title="item.title"
        :description="item.description"
        :image="item.image" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { values } from '~/data/offer';
</script>