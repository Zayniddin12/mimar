<template>
  <div>
    <p
      class="lg:text-64 min-[1200px]:text-48 text-2xl font-alumni text-dark leading-130 font-normal mb-14 mt-[128px] text-center">
      {{ $t('navbar.esg_action_title') }}
    </p>
    <div v-if="!isSmallScreen" class="space-y-2">
      <div
        v-for="(row, index) in chunkedRows"
        :key="index"
        :class="[
    index % 2 === 0 ? 'grid-cols-3' : 'md:grid-cols-2'
  ]"
        class="grid gap-2"
      >
        <CardsEsgAction
          v-for="(item, i) in row"
          :key="i"
          :title="item.title"
          :image="item.image"
          :description="item.description"
        />
      </div>
    </div>
    <div v-else class="grid sm:grid-cols-2 grid-cols-1">
      <CardsEsgAction
        v-for="(item, i) in esg"
        :key="i"
        :title="item.title"
        :image="item.image"
        :description="item.description"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { esg } from '~/data/offer';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

// Masalan, ekran 720px dan kichikligini tekshirish
const isSmallScreen = computed(() => width.value < 760);

const chunkedRows = computed(() => {
  const rows = [];
  let i = 0;
  let isOdd = true;

  while (i < esg.length) {
    const size = isOdd ? 3 : 2;
    rows.push(esg.slice(i, i + size));
    i += size;
    isOdd = !isOdd;
  }

  return rows;
});
</script>