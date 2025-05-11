<template>
  <div>
    <SectionsBanner
      class="bg-custom relative"
      :image="'images/dec4.svg'" image-style="!right-0 top-0 absolute z-[5]"
      :mimar="true">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('expertises')" class="relative z-10" />
    </SectionsBanner>
    <div class="container">
      <WrapperExperises :title="$t('expertises')" :description="$t('expertises_dec')" />
      <div class="grid lg:grid-cols-2 gap-2">
        <CardsExpertise
          v-for="(item, key) in expertises" :key
          :title="item.title"
          :description="item.description"
          :image="item.image" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { expertises } from '~/data/offer';

const { t } = useI18n();
const breadcrumbRoutes = ref([
  {
    title: t('expertises'),
    link: '/expertises',
  },
]);
</script>