<template>
  <section>
    <div class="container">
      <div
        class="grid grid-cols-7 max-[850px]:grid-cols-1 bg-white">
        <div class="col-span-2 max-[850px]:col-span-1">
          <img src="/images/contact.webp" alt="Contact image" class="size-full object-cover aspect-video">
        </div>
        <div
          class="col-span-5 max-[850px]:col-span-1 flex max-sm:flex-col 3xl:gap-[96px] 2xl:gap-[80px] lg:gap-[60px] gap-[40px] 3xl:px-[150px] xl:px-[100px] lg:px-[50px] px-[30px] 3xl:pt-[120px] 2xl:pt-[80px] xl:pt-[60px] lg:pt-[40px] pt-[20px] pb-10">

          <div class="lg:min-w-[200px]">
            <h2 class="text-custom leading-none">{{ $t('navbar.contact_us') }}</h2>
            <div class="flex sm:flex-col gap-8 sm:mt-[100px] mt-10">
              <a href="#">
                <img src="/icons/Facebook.png" alt="Facebook">
              </a>
              <a href="#">
                <img src="/icons/Instagram.png" alt="Instagram">
              </a>
              <a href="#">
                <img src="/icons/Twitter.png" alt="">
              </a>
            </div>
          </div>
          <div>
            <p class="text-[#595959]">{{ $t('navbar.contact_subtitle') }} </p>
            <p
              class="leading-[130%] 2xl:text-[28px] lg:text-[24px] text-[20px] 3xl:mt-[72px] 2xl:mt-[40px] lg:mt-[20px]">
              {{ $t('navbar.commercial_request') }}</p>

            <form @submit.prevent="onSubmit">
              <div class="mt-[24px]">
                <div class="grid grid-cols-2 gap-[16px] w-full">
                  <input
v-if="t('navbar.full_name') !== 'navbar.full_name'" v-model="formData.name" type="text"
                         :placeholder="namePlaceholder">
                  <input
v-if="t('navbar.email') !== 'navbar.email'" v-model="formData.email" type="text"
                         :placeholder="emailPlaceholder">
                </div>
                <div class="mt-[24px]">
                  <textarea
                    v-if="t('navbar.message') !== 'navbar.message'"
                    id="" v-model="formData.message" :placeholder="messagePlaceholder"
                    class="w-full h-[114px] resize-none overflow-y-auto" />
                </div>

                <div class="flex justify-end pt-8">
                  <BaseButton :text="$t('navbar.apply')" />
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ApiService } from '~/services/api';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


const formData = ref({
  name: '',
  email: '',
  message: '',
});

const { t } = useI18n();

const namePlaceholder = ref('');
const emailPlaceholder = ref('');
const messagePlaceholder = ref('');

watchEffect(() => {
  namePlaceholder.value = t('navbar.full_name');
  emailPlaceholder.value = t('navbar.email');
  messagePlaceholder.value = t('navbar.message');
});

const isLoading = ref(false);

const onSubmit = async () => {
  try {
    isLoading.value = true;
    await ApiService.post('/contacts', {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
      phone_number: '+998882789696',
    });
    console.log('success');
    toast('Application sent', {
      'type': 'success',
      'dangerouslyHTMLString': true,
      'autoClose': 2000,
    });
  } catch (error) {
    console.log(error);
    toast('Something went wrong', {
      'type': 'error',
      'dangerouslyHTMLString': true,
      'autoClose': 2000,
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
input, textarea {
  border: none;
  outline: none;
  border-bottom: 1px solid #E2E8F0;
  padding: 8px;
  padding-left: 0;
}

input::placeholder, textarea::placeholder {
  color: #595959;
  line-height: 150%;
  font-family: Golos;
}
</style>