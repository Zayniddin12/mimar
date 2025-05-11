<template>
  <div
      ref="target"
      class="cursor-pointer relative z-30 select-none w-fit"
      @click="open = !open"
  >
    <BaseButton
        variant="langDropdown"
        :text="currentLanguage?.name ? currentLanguage.name : ''"
        mainClass="flex-center"
        class="!px-0"
        from-right
    >
      <template #suffix>
        <i-chevron
            class="align-middle text-white transition-300 block text-2xl mt-1 transition-300"
            :class="{ 'rotate-180': open }"
        />
      </template>
    </BaseButton>
    <Transition mode="out-in" name="move">
      <div
          v-if="open"
          class="flex flex-col absolute  z-20 -mt-4 -ml-2 bg-white/60 backdrop-blur-lg border border-gray rounded-xl w-full truncate"
      >
        <div
            v-for="(lang, key) of languagesList"
            :key
            :class="{
            '!font-bold': lang.code === currentLanguage?.code,
            'border-transparent rounded-b-lg': key === languagesList.length - 1,
          }"
            class="py-1 px-2 !text-sm text-custom font-medium hover:bg-gray-200 transition-300 flex justify-between gap-1 items-center"
            @click="changeLocale(lang.code)"
        >
          {{ lang?.name }}
        </div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher'

const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()
const open = ref(false)
const target = ref<HTMLDivElement | null>()

onClickOutside(target, () => (open.value = false))


</script>
