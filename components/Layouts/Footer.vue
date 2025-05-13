<template>
  <section>
    <div class="w-full bg-custom">
      <div class="container">
        <div class="pt-[60px] pb-[68px] flex justify-between flex-wrap">
          <div class="shrink-0">
            <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">{{ $t('navbar.about_us') }}</h2>

            <div class="flex flex-col gap-4 mt-5">
              <NuxtLink to="/about">
                <p class="text-[#D9D9D9] hover:opacity-70 transition-300">{{ $t('navbar.mission') }}</p>
              </NuxtLink>
              <NuxtLink to="/about">
                <p class="text-[#D9D9D9] hover:opacity-70 transition-300">{{ $t('navbar.vision') }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="shrink-0">
            <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">{{ $t('navbar.services') }}</h2>

            <div class="flex flex-col gap-4 mt-5">
              <NuxtLink to="/enginers">
                <p class="text-[#D9D9D9] hover:opacity-70 transition-300">{{ $t('navbar.engineer') }}</p>
              </NuxtLink>
              <NuxtLink to="/procurement">
                <p class="text-[#D9D9D9] hover:opacity-70 transition-300">{{ $t('navbar.procurement') }}</p>
              </NuxtLink>
              <NuxtLink to="/construction">
                <p class="text-[#D9D9D9] hover:opacity-70 transition-300">{{ $t('navbar.construction') }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="shrink-0">
            <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">{{ $t('navbar.projects') }}</h2>

            <div class="flex flex-col gap-4 mt-5">
              <NuxtLink v-for="(item, index) in products" :key="index" :to="`/projects/${item?.slug}`">
                <p class="text-[#D9D9D9] hover:opacity-70 transition-300">{{ item?.title }}</p>
              </NuxtLink>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <div class="flex 2xl:gap-[100px] lg:gap-10 gap-8">

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


          </div>

        </div>
        <div class="pb-[80px]">
          <h2 class="text-white 2xl:text-[48px] lg:text-[40px] text-[32px]">Contacts</h2>

          <div class="grid grid-cols-1 gap-4 mt-5">
            <div class="grid grid-cols-2 gap-1 mt-5">
              <div v-for="(item, index) in locations" :key="index" class="flex items-center gap-4">
                <img src="/icons/location.svg">
                <p class="text-white group-hover:opacity-70 transition-300">{{ item }}</p>
              </div>
            </div>
            <div class="flex gap-10">
              <a :href="`tel: ${siteInfo?.phone_number}`" class="flex items-center gap-4 group">
                <img src="/icons/Call.png" alt="Call">
                <p class="text-white group-hover:opacity-70 transition-300">
                  {{ phoneNumberFormatter(siteInfo?.phone_number) }}</p>
              </a>
              <a :href="`mailto: ${siteInfo?.email}`" class="flex items-center gap-4 transition-300 group">
                <img src="/icons/email.png" alt="Call">
                <p class="text-white group-hover:opacity-70 transition-300">{{ siteInfo?.email }}</p>
              </a>
            </div>

          </div>
          <div class="flex justify-end">
            <NuxtLinkLocale to="/" class="mt-auto ml-auto pt-4">
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

const siteInfo = ref<{
  'id': number,
  'title': string,
  'logo': string,
  'logo_dark': string,
  'desc': string,
  'address': string,
  'phone_number': string,
  'email': string,
  'work_time': string,
  'map': string,
  'exchange': string,
  'favicon': string,
  'telegram': string,
  'instagram': string,
  'facebook': string,
  'youtube': string
}>();
const fetchProjects = async () => {
  try {
    const res = await useApi().$get('/products');
    products.value = res.data;
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};
const fetchSiteInfo = async () => {
  try {
    const res = await useApi().$get('/siteinfo');
    siteInfo.value = res.data;
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
};

function phoneNumberFormatter(number?: string) {
  const format = number
    ?.replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return `+${format && format[1] ? format[1] : ''} (${
    format && format[2] ? format[2] : ''
  }) ${format && format[3] ? format[3] : ''} ${
    format && format[4] ? format[4] : ''
  } ${format && format[5] ? format[5] : ''}`;
}

const locations = computed(() => siteInfo.value?.address?.split(' | '));

onMounted(() => {
  fetchProjects();
  fetchSiteInfo();
});
</script>