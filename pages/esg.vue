<template>
  <div>
    <SectionsBanner
      class="bg-custom relative"
      :image="'images/esg-banner.png'"
    >
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('esg')" class="relative z-10" />
    </SectionsBanner>
    <WrapperExperises :title="$t('esg_title')" :description="$t('esg_desc')" />
    <CardsImage image="/images/esg-banner.png" />
    <div class="container">
      <div class="grid min-[800px]:grid-cols-3 grid-cols-1 gap-2 mt-10">
        <CardsEsg v-for="(item, index) in esgList" :key="index" :description="item?.description" :title="item?.title" />

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
    title: t('esg'),
    link: '/esg',
  },
]);
</script>