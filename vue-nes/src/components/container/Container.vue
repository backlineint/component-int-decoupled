<template>
  <div class="nes-container with-title is-centered">
    <h2 v-if="title" class="title"><a :href="link">{{ title }}</a></h2>
    <div v-if="platform || year" class="nes-badge is-splited">
      <span class="is-dark">{{ platform }}</span>
      <span class="is-success">{{ year }}</span>
    </div>
    <img v-if="image" :src="image" />
    <p v-if="body" v-html="body">{{ body }}</p>
    <a v-if="link" class="nes-btn is-primary" :href="link">Press Start</a>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: String,
    link: String,
    platform: String,
    year: String,
    image: String,
    body: String
  }
}
</script>

<style src='nes.css/css/nes.min.css'></style>

<style>
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
</style>

<style scoped>
  .nes-container {
    height: 100%;
    font-family: 'Press Start 2p';
  }

  img {
    width: 100%;
    height: auto;
    image-rendering: pixelated;
    margin-bottom: 1rem;
    border: 5px dashed;
  }
</style>