<template>
  <section>
    <div class="w-full bg-custom">
      <div class="container">
        <div class="pt-[60px] pb-[68px] flex justify-between flex-wrap">
          <div class="shrink-0">
            <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">{{ $t('navbar.about_us') }}</h2>

            <div class="flex flex-col gap-4 mt-5">
              <NuxtLink to="/about">
                <p class="text-[#D9D9D9]">{{ $t('navbar.mission') }}</p>
              </NuxtLink>
              <NuxtLink to="/about">
                <p class="text-[#D9D9D9]">{{ $t('navbar.vision') }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="shrink-0">
            <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">{{ $t('navbar.services') }}</h2>

            <div class="flex flex-col gap-4 mt-5">
              <NuxtLink to="/enginers">
                <p class="text-[#D9D9D9]">{{ $t('navbar.engineer') }}</p>
              </NuxtLink>
              <NuxtLink to="/procurement">
                <p class="text-[#D9D9D9]">{{ $t('navbar.procurement') }}</p>
              </NuxtLink>
              <NuxtLink to="/construction">
                <p class="text-[#D9D9D9]">{{ $t('navbar.construction') }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="shrink-0">
            <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">{{ $t('navbar.projects') }}</h2>

            <div class="flex flex-col gap-4 mt-5">
              <NuxtLink v-for="(item, index) in products" :key="index" :to="`/projects/${item?.slug}`">
                <p class="text-[#D9D9D9]">{{ item?.title }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <div class="flex 2xl:gap-[100px] lg:gap-10 gap-8">
              <div>
                <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">Contacts</h2>

                <div class="flex flex-col gap-4 mt-5">
                  <div class="flex items-center gap-4">
                    <img src="/icons/Call.png" alt="Call">
                    <p class="text-white">+998 99 123 45 67</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <img src="/icons/email.png" alt="Call">
                    <p class="text-white">mimargroup@info</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-8 mt-3">
                <a href="#">
                  <img src="/icons/Facebook2.png" alt="Facebook">
                </a>
                <a href="#">
                  <img src="/icons/Instagram2.png" alt="Instagram">
                </a>
                <a href="#">
                  <img src="/icons/Twitter2.png" alt="">
                </a>
              </div>
            </div>

            <NuxtLinkLocale to="/" class="mt-auto mx-auto pt-4">
              <img src="/icons/logo.png" alt="Logo">
            </NuxtLinkLocale>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
//cdsfcds

const products = ref([]);
const fetchProjects = async () => {
  try {
    const res = await useApi().$get('/products');
    products.value = res.data;
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};
onMounted(() => {
  fetchProjects();
});
</script>