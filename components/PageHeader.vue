<template>
  <header class="header">
    <div class="container">
      <div class="columns">
        <div class="brand">
          <NuxtLink to="/" class="home-link"
            >freya laver<span class="i">i</span>ck</NuxtLink
          >
        </div>
        <site-navigation />
      </div>
    </div>
  </header>
</template>

<script>
import SiteNavigation from '~/components/SiteNavigation';

export default {
  name: 'PageHeader',

  components: {
    SiteNavigation,
  },
};
</script>

<style lang="scss" scoped></style>
