<template>
  <div class="nes-container with-title is-centered">
    <h2 class="title"><a :href="link">{{ title }}</a></h2>
    <div class="nes-badge is-splited">
      <span class="is-dark">{{ platform }}</span>
      <span class="is-success">{{ year }}</span>
    </div>
    <img :src="image" />
    <p>{{ body }}</p>
    <a class="nes-btn is-primary" :href="link">Press Start</a>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'link',
    'platform',
    'year',
    'image',
    'body'
  ]
}
</script>

<style src='nes.css/css/nes.min.css'></style>

<style>
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
</style>

<style scoped>
  .nes-container {
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
    image-rendering: pixelated;
    margin-bottom: 1rem;
    border: 5px dashed;
  }
</style>