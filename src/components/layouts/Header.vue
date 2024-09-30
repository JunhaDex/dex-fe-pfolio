<template>
  <header>
    <section class="header-wrap">
      <div class="header-box rbox">
        <a class="header-logo">로고</a>
        <div class="header-menu">
          <nav class="nav-wide">
            <ul class="header-menu-list">
              <li>
                <RouterLink to="/">메인 페이지</RouterLink>
              </li>
              <li>
                <RouterLink to="/guide">가이드 페이지</RouterLink>
              </li>
            </ul>
          </nav>
          <span class="lang-icon icon-lang">언어설정</span>
          <nav class="nav-collapse">
            <button></button>
            <ul>
              <li>
                <RouterLink to="/">메인 페이지</RouterLink>
              </li>
              <li>
                <RouterLink to="/guide">가이드 페이지</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped>
.nav-wide {
  display: none;
}

.nav-collapse {
  display: block;
}

@media (min-width: 1024px) {
  .nav-wide {
    display: block;
  }

  .nav-collapse {
    display: none;
  }
}

.header-wrap {
  max-width: var(--bp-min-header);
  width: 100%;
  margin: 0 auto;
}

.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: antiquewhite;
}

.header-menu {
  display: flex;
}

.header-menu-list {
  display: flex;
}

.lang-icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
}
</style>
