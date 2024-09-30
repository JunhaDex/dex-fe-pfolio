import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('lang', () => {
  const uiMode = ref<'light' | 'dark'>('light')
  const lang = ref<'en' | 'ko' | 'fr' | 'jp'>('ko')

  function updateUiMode(mode: 'light' | 'dark') {
    uiMode.value = mode
    document.documentElement.setAttribute('data-theme', mode)
  }

  return {
    uiMode,
    lang,
    updateUiMode
  }
})
