<template>
  <div>
    <SectionsBanner
      class="bg-custom relative"
      :image="'/images/gif6.mp4'" image-style="!right-0 top-0 absolute z-[5]"
      :mimar="true">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('navbar.expertises')" class="relative z-10" />
    </SectionsBanner>
    <div class="container">
      <WrapperExperises :title="$t('navbar.expertises')" :description="$t('navbar.At_Mimar')" />
      <div class="grid lg:grid-cols-2 gap-2">
        <CardsExpertise
          v-for="(item, key) in expertises" :key
          :title="$t(item.title)"
          :description="$t(item.description)"
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
    title: t('navbar.expertises'),
    link: '/expertises',
  },
]);
</script>