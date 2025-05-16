<template>
  <div>
    <SectionsBanner :image="'images/constuction.png'" gradient="constuction-banner-gr">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('navbar.constuction')" />
    </SectionsBanner>
    <CardsInformation :text="$t('navbar.Mimar')" image="/images/gif3.mp4" class="md:my-[104px] my-6" />
    <CardsEngeneer
      :images="constructions?.[0]?.images"
      :title="constructions?.[0]?.title"
      :description="constructions?.[0]?.description" card-style="right-0 md:!bottom-12" class="!pb-0" />
    <CardsInformation
      :title="$t('navbar.Equipment')"
      :text="$t('navbar.Equipment_subtittle')"
      image="/images/gif4.mp4"
      image-class="left-0 h-full"
      class="md:!my-[120px] !my-6 container" />
    <CardsEngeneer
      :images="constructions?.[1]?.images"
      :title="constructions?.[1]?.title"
      :description="constructions?.[1]?.description" card-style="right-0 md:!bottom-12" class="!pb-0" />
    <CardsInformation
      :title="$t('navbar.Safety')"
      :text="$t('navbar.Safety_subtittle')"
      image="/images/gif4.mp4"
      image-class="left-0 top-0 h-full"
      class="md:!mt-[120px] !mt-6 container" />
  </div>
</template>
<script setup lang="ts">
import { constructions } from '~/data/offer';

const { t } = useI18n();
const breadcrumbRoutes = ref([
  {
    title: t('navbar.constuction'),
    link: '/constuction',
  },
]);
</script>