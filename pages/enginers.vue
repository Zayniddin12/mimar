<template>
  <div>
    <SectionsBanner :image="'images/engeneer.png'" gradient="engineer-banner-gr">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('engineering')" />
    </SectionsBanner>
    <CardsInformation :text="$t('information1')" class="md:my-[104px] my-6" />
    <CardsEngeneer :images="engineers?.[0]?.images" card-style="left-0" />
    <CardsEngeneer :images="engineers?.[1]?.images" card-style="right-0" />
    <CardsEngeneer :images="engineers?.[2]?.images" card-style="left-0" />
  </div>
</template>
<script setup lang="ts">

import { engineers } from '~/data/offer';

const { t } = useI18n();

const breadcrumbRoutes = ref([
  {
    title: t('engineering'),
    link: '/events',
  },
]);
</script>