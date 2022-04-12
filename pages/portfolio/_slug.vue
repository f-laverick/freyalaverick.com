<template>
  <div v-if="project" class="portfolio-project content">
    <div class="intro">
      <h1 class="title">{{ project.title }}</h1>
      <div v-html="project.copy" class="copy" />
    </div>
    <div class="images">
      <project-image
        v-for="(image, index) in project.images"
        :key="`project-${slug}-image-${index}`"
        :image="image"
        :class="imageClass(index)"
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

  methods: {
    imageClass(index) {
      if (index % 2 === 0) {
        this.rowCount++;
      }
      let classes = [`image-${index}`];
      if (this.rowCount % 2) {
        classes.push(index % 2 ? 'rowa-img2' : 'rowa-img1');
      } else {
        classes.push(index % 2 ? 'rowb-img2' : 'rowb-img1');
      }
      return classes.join(' ');
    },
  },
};
</script>

<style lang="scss" scoped></style>
