<template>
  <div v-if="project" class="portfolio-project content">
    <div class="intro columns">
      <div class="column">
        <h1 class="title">{{ project.title }}</h1>
        <p><NuxtLink to="/portfolio">Back to portfolio</NuxtLink></p>
      </div>
      <div v-html="project.copy" class="copy column" />
    </div>
    <div class="images">
      <project-image
        v-for="(image, index) in project.images"
        :key="`project-${slug}-image-${index}`"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
import ProjectImage from '~/components/ProjectImage';
export default {
  name: 'Project',

  components: {
    ProjectImage,
  },

  head() {
    return {
      title: this.project.title,
    };
  },

  data() {
    return {
      rowCount: 0,
    };
  },

  computed: {
    slug() {
      return this.$route.params.slug;
    },
    project() {
      return this.$store.state.projects.projects.find(
        (project) =>
          project.title === this.slug ||
          encodeURIComponent(project.title) === this.slug
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
