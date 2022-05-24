<template>
  <div class="menu">
    <div
      class="hamburger-menu"
      :class="{ active: menuOpen }"
      @click="menuOpen = !menuOpen"
    >
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>

    <nav class="navbar" :class="{ open: menuOpen }">
      <ul class="nav-list">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link" @click.native="menuOpen = false"
            >home</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            to="/portfolio"
            class="nav-link"
            @click.native="menuOpen = false"
            >portfolio</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            to="/about"
            class="nav-link"
            @click.native="menuOpen = false"
            >info</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigation',

  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
