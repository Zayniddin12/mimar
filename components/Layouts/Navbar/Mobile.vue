<template>
  <div
    class="w-full absolute top-0 left-0 h-screen z-50 flex flex-col justify-between transition-all duration-300 bg-white pl-4"
  >
    <div>
      <div class="py-4 flex items-center justify-between pr-10">
        <NuxtLink to="/">
          <img
            loading="lazy"
            alt="logo"
            class="w-[92px] h-10 md:w-[119px] md:h-[52px] relative z-10"
            src="/logo.svg"
          >
        </NuxtLink>
        <div class="flex items-center gap-x-3">

          <div @click="$emit('closeMobileHeader')">
            <i-close class="icon-close text-primary cursor-pointer text-[28px]" />
          </div>
        </div>

      </div>
      <div class="flex items-center gap-2 mt-4">
        <BaseLanguage class="pt-6" />
      </div>
      <ul class="mt-6">
        <li v-for="(item, idx) of links" :key="idx">
          <div class="flex items-center justify-between pr-4">
            <NuxtLinkLocale
              :to="item?.slug"
              class="text-dark text-base font-medium !leading-130 transition-colors duration-300 hover:text-primary"
              @click="$emit('closeMobileHeader')"
            >{{ $t(`${item.title}`) }}
            </NuxtLinkLocale>
          </div>
          <div class="bg-dark/10 my-4 w-full h-[1px]" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

interface Props {
  links: {
    title: string;
    slug: string;
  };
}

defineProps<Props>();
const { t } = useI18n();
const isShown = ref(false);
const showLogoutModal = ref(false);


const profileLinks = [
  {
    id: 1,
    url: '/cabinet',
    title: t('profile_link'),
    icon: 'icon-profile-circle',
  },
  {
    id: 2,
    url: '/application/create',
    title: t('submit_your_application'),
    icon: 'icon-file-text',
  },
  {
    id: 3,
    url: '/cabinet/my-services',
    title: t('my_services'),
    icon: 'icon-heart !text-base',
  },
  {
    id: 4,
    url: '/cabinet/my-applications',
    title: t('my_applications'),
    icon: 'icon-clipboard-text',
  },
  {
    id: 5,
    url: '/cabinet/my-grants',
    title: t('my_grants'),
    icon: 'icon-file-star',
  },
  {
    id: 6,
    url: '/cabinet/my-cards',
    title: t('my_cards'),
    icon: 'icon-credit-card',
  },
];

const showMobileHeader = () => {
  if (import.meta.client) {
    document.body.style.overflow = 'hidden';
    isShown.value = true;
  }
};

const onCloseMobileHeader = () => {
  if (import.meta.client) {
    document.body.style.overflow = 'auto';
    isShown.value = false;
  }
};

const close = () => {
  showLogoutModal.value = false;
};

</script>

<style scoped>
.router-link-active {
  color: #085F58;
}

.from-left-enter-active {
  animation: from-left 300ms ease-out;
}

.from-left-leave-active {
  animation: from-left 300ms ease-in reverse;
}

@keyframes from-left {
  0% {
    opacity: 0;
    transform: translateX(-100%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.header-shadow {
  box-shadow: 0 4px 20px 0 rgba(21, 21, 21, 0.15);
}
</style>
