<template>
  <div class="pb-[120px]">
    <SectionsBanner image="/images/about-banner.png" gradient="bg-about-banner-gr">
      <SectionsStatistics :is-visible="isVisible">/>
    </sectionsstatistics></SectionsBanner>
    <CardsAbout />
    <CardsImage image="/images/kara.png" />
    <SectionsOffer />
    <CardsImage image="/images/about-iron.png" />
    <SectionsTarget />
    <SectionsValues />
    <SectionsAboutProjects />
  </div>
</template>

<script setup lang="ts">
const isVisible=ref(false);
onMounted(()=>{
  isVisible.value = true;
})
</script>