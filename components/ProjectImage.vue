<template>
  <figure class="project-figure">
    <img class="project-image" :src="`\\${image.src}`" :alt="image.alt" />
    <figcaption class="project-caption" v-if="image.caption">
      {{ image.caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ProjectImage',

  props: {
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
