<template>
  <div class="portfolio">
    <div class="cards">
      <div class="card">
        <NuxtLink to="/portfolio/project1" class="card-header" href="port.html">
          <img
            src="~/assets/images/heroimg.jpg"
            alt="card-pic"
            class="card-image"
        /></NuxtLink>
        <div class="card-content">
          <h4 style="font-size: 1.5rem">project 1</h4>
          <p style="font-size: 1.2rem">info</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
};
</script>

<style lang="scss" scoped></style>
