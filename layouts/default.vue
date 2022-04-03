<template>
  <div class="wrapper" :class="pageClass">
    <page-header />
    <section class="main">
      <div class="container">
        <Nuxt />
      </div>
    </section>
    <page-footer />
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter';
import PageHeader from '~/components/PageHeader';

export default {
  components: {
    PageFooter,
    PageHeader,
  },

  computed: {
    pageClass() {
      switch (this.$route.name) {
        case 'about':
          return 'about-page';
          break;
        case 'portfolio':
          return 'portfolio-page';
          break;
        default:
          return 'home-page';
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
