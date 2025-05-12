<template>
  <div>
    <SectionsBanner
      class="bg-custom relative"
      :image="'/images/gif6.mp4'" image-style="!right-0 top-0 absolute z-[5]"
      :mimar="true">
      <BaseBreadCrumb :breadcrumb="breadcrumbRoutes" :title="$t('navbar.projects')" class="relative z-10" />
    </SectionsBanner>
    <SectionsAboutUs
      :title="$t('about_us')"
      :description="$t('about_us_desc')"
      :is-button="false"
      class="md:pt-[96px] pt-10" />
    <div class="container md:!pt-[120px] !pt-10 md:space-y-16 space-y-10">
      <CardsInformationProjects
        v-for="(item, index) in products" :key="index"
        :title="item?.title"
        :description="item?.description"
        :images="item?.images"
        :area="item.area"
        :slug="item?.slug"
        :timeline="item.timeline" />
    </div>
  </div>
</template>
<script setup lang="ts">

const { t } = useI18n();
const breadcrumbRoutes = ref([
  {
    title: t('navbar.projects'),
    link: '/projects',
  },
]);

const products = ref([]);
const fetchProjects = async () => {
  try {
    const res = await useApi().$get('/products');
    products.value = res?.data;
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};

onMounted(() => {
  fetchProjects();
});
</script>