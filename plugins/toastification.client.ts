import 'vue-toastification/dist/index.css';

import Toast from 'vue-toastification';

import UIToast from '~/components/Base/Toast.vue';

const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  autoClose: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false,
  maxToasts: 3,
  newestOnTop: true,
  component: UIToast,
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
});
