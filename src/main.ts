import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18n from '@/i18n'
import { createPinia } from 'pinia'

// Vuetify & Styles
import './assets/scss/main.scss'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
const MyPreset = definePreset(Aura, {
  // 將客製化樣式設定於此
  semantic: {
    primary: {
      50: '#fafbfb',
      100: '#e5ecee',
      200: '#d1dde0',
      300: '#bcced2',
      400: '#a8bfc5',
      500: '#93b0b7',
      600: '#7d969c',
      700: '#677b80',
      800: '#516165',
      900: '#3b4649',
      950: '#252c2e',
    },
  },
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue, {
  theme: {
    unstyled: true,
    preset: MyPreset,
    options: {
      prefix: 'p', // 前綴，預設為 p
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities, ',
      },
    },
  },
})

app.mount('#app')
