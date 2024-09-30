<template>
  <section class="section-wrap py-6">
    <h1 class="text-2xl font-bold mb-4">🎉구성을 완료했습니다! 여기서부터 시작하세요.</h1>
    <h2 class="text-xl font-bold mb-2">What's Next?</h2>
    <ul class="text-lg mb-4">
      <li>
        <RouterLink to="/guide"><u>가이드 페이지</u></RouterLink>
        를 통해 class 기반 컴포넌트 스타일을 구경하세요.
      </li>
      <li>불필요한 컴포넌트를 지우고 바로 프로젝트를 시작하세요.</li>
      <li>
        프로젝트가 마음에 든다면
        <a href="https://github.com/JunhaDex" target="_blank"><u>Github ⭐️</u></a>
        를 남겨주세요!
      </li>
    </ul>
    <div class="button-group">
      <button class="btn btn-secondary mr-3" @click="clickHandler">다크모드</button>
      <button class="btn btn-primary" @click="clickHandler">시작하기</button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store'

const themeStore = useThemeStore()

function clickHandler() {
  const current = themeStore.uiMode
  themeStore.updateUiMode(current === 'dark' ? 'light' : 'dark')
}
</script>
<style scoped>
ul {
  list-style: disc;
  padding-left: 20px;
}

li::marker {
  color: green;
}

li a:hover {
  cursor: pointer;
}
</style>
