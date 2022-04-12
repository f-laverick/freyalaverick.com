<template>
  <div class="portfolio content">
    <ul class="cards">
      <li v-for="project in projects" class="card">
        <NuxtLink :to="`/portfolio/${project.title}`" class="card-header">
          <img :src="project.thumb" alt="" class="card-image"
        /></NuxtLink>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p>{{ project.intro }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',

  head() {
    return {
      title: 'Portfolio',
    };
  },

  computed: {
    projects() {
      return this.$store.state.projects.projects;
    },
  },
};
</script>

<style lang="scss" scoped></style>
