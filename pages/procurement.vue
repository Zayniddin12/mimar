<template>
  <div>
    <SectionsBanner :image="'images/procurement.png'" gradient="procurement-banner-gr">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('navbar.procurement')" />
    </SectionsBanner>
    <CardsInformation :text="$t('navbar.Mimar')" image="/images/gif2.mp4" class="md:my-[104px] my-6" />
    <CardsEngeneer
      :id="1" :images="procurement?.[0]?.images" :title="procurement?.[0]?.title"
      :description="procurement?.[0]?.description" card-style="left-0 md:!bottom-12" class="!pb-0" />
    <CardsInformation
      :title="$t('navbar.Logistics')"
      :text="$t('navbar.Supplier_subtittle')"
      image="/images/gif3.mp4"
      image-class="left-0 h-full"
      class="md:!my-[120px] !my-6 container" />
    <CardsEngeneer
      :id="3" :images="procurement?.[1]?.images" :title="procurement?.[1]?.title"
      :description="procurement?.[1]?.description" card-style="left-0 md:!bottom-12" class="!pb-0" />
    <CardsInformation
      :title="$t('navbar.Contract')"
      :text="$t('navbar.Contract_subtittle')"
      image="/images/gif4.mp4"
      image-class="left-0 top-0 h-full rotate-180"
      class="md:!my-[120px] !my-6 container" />
  </div>
</template>
<script setup lang="ts">
import { procurement } from '~/data/offer';

const { t } = useI18n();
const breadcrumbRoutes = ref([
  {
    title: t('navbar.procurement'),
    link: '/procurement',
  },
]);
</script>