import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';

import { createApp } from 'vue';
import App from './App.vue';

import './style.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount('#app');
