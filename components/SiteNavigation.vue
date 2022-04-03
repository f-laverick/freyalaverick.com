<template>
  <nav class="navbar">
    <div class="hamburger-menu">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
    <ul class="nav-list">
      <li class="nav-item">
        <NuxtLink to="/portfolio" class="nav-link">portfolio</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/about" class="nav-link">info</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'SiteNavigation'
};
</script>

<style lang="scss" scoped></style>
