<template>
  <header class="header">
    <div class="container">
      <div class="columns">
        <div class="column">
          <site-brand />
        </div>
        <div class="column">
          <site-navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SiteBrand from '~/components/SiteBrand';
import SiteNavigation from '~/components/SiteNavigation';

export default {
  name: 'PageHeader',

  components: {
    SiteBrand,
    SiteNavigation,
  },
};
</script>

<style lang="scss" scoped></style>
