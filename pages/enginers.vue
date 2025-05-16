<template>
  <div>
    <SectionsBanner :image="'/images/engeneer.png'" gradient="engineer-banner-gr">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('navbar.engineering')" />
    </SectionsBanner>
    <CardsInformation
      :text="$t('navbar.information1')" image="/images/gif2.mp4"
      class="md:my-[104px] my-6" />
    <CardsEngeneer
      :images="engineers?.[0]?.images" card-style="left-0" :title="engineers?.[0]?.title"
      :description="engineers?.[0]?.description" :list="engineers?.[0]?.list" />
    <CardsEngeneer
      :images="engineers?.[1]?.images" :title="engineers?.[1]?.title"
      :description="engineers?.[1]?.description" card-style="right-0" :list="engineers?.[1]?.list" />
    <CardsEngeneer
      :images="engineers?.[2]?.images" :title="engineers?.[2]?.title"
      :description="engineers?.[2]?.description" card-style="left-0" :list="engineers?.[2]?.list" />
  </div>
</template>
<script setup lang="ts">

import { engineers } from '~/data/offer';

const { t } = useI18n();

const breadcrumbRoutes = ref([
  {
    title: t('navbar.engineering'),
    link: '/events',
  },
]);
</script>