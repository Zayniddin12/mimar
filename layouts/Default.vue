<template>
  <div class=" bg-[#F9F9F9]">
    <Transition mode="out-in">
      <div :key="loading">
        <LayoutsNavbar v-if="!loading" />
        <LayoutsNavbarLoading v-else />
      </div>
    </Transition>
    <div class="min-h-[calc(100vh-420px)] ">
      <slot />
    </div>
    <div id="contacts" class="container md:pt-[120px] md:pb-[136px] py-8">
      <SectionsContact />
    </div>
    <LayoutsFooter />
  </div>
</template>

<script setup lang="ts">

const loading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<style scoped>

</style>