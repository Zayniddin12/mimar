<template>
  <div>
    <SectionsBanner
      class="bg-custom relative"
      :image="'images/esg-banner.png'"
    >
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="t('navbar.esg')" class="relative z-10" />
    </SectionsBanner>
    <WrapperExperises :title="t('navbar.ESG')" :description="t('navbar.ESG _subtittle')" />
    <CardsImage image="/images/esgp1.png" />
    <div class="container">
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-2 mt-10">
        <CardsEsg
          v-for="(item, index) in esgList"
          :key="index"
          :description="$t(item?.description)"
          :title="$t(item?.title)" />

      </div>
      <SectionsAction />
    </div>
  </div>
</template>
<script setup lang="ts">
import { esgList } from '~/data/offer';

const { t } = useI18n();
const breadcrumbRoutes = ref([
  {
    title: t('navbar.esg'),
    link: '/esg',
  },
]);
</script>