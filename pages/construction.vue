<template>
  <div>
    <SectionsBanner :image="'images/constuction.png'" gradient="constuction-banner-gr">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('constuction')" />
    </SectionsBanner>
    <CardsInformation :text="$t('information1')" class="md:my-[104px] my-6" />
    <CardsEngeneer :id="1" :images="engineers?.[0]?.images" card-style="right-0 md:!bottom-12" class="!pb-0" />
    <CardsInformation
      :id="3"
      title="Logistics & Supply Chain Coordination"
      :text="$t('information1')"
      image="/images/dec2.svg"
      image-class="left-0 h-full"
      class="md:!my-[120px] !my-6 container" />
    <CardsEngeneer :id="3" :images="engineers?.[1]?.images" card-style="right-0 md:!bottom-12" class="!pb-0" />
    <CardsInformation
      :id="4"
      title="Logistics & Supply Chain Coordination"
      :text="$t('information1')"
      image="/images/dec3.svg"
      image-class="left-0 top-0 h-full"
      class="md:!my-[120px] !my-6 container" />
  </div>
</template>
<script setup lang="ts">
import { engineers } from '~/data/offer';

const { t } = useI18n();
const breadcrumbRoutes = ref([
  {
    title: t('constuction'),
    link: '/constuction',
  },
]);
</script>