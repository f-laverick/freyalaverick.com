<template>
  <div class="container">
    <site-navigation />
    <page-header />
    <section class="main">
        <Nuxt />
    </section>
    <page-footer />
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter';
import PageHeader from '~/components/PageHeader';
import SiteNavigation from '~/components/SiteNavigation';
export default {
  components: {
    PageFooter,
    PageHeader,
    SiteNavigation,
  },
};
</script>

<style lang="scss" scoped></style>
