<script setup lang="ts">
const router = useRouter();
const route = useRoute();

router.afterEach((to, from) => {
  if (to.hash) {
    // Component yuklangach scroll qilish
    nextTick(() => {
      const el = document.querySelector(to.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

useSeoMeta({
  title: 'MIMAR',
  ogTitle: 'test',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>