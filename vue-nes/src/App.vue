<template>
  <div id="app">
    <p>ContainerBlock - gets data from JSON:API based on uuid prop</p>
    <ContainerBlock
      uuid="a1b06ea3-445f-4068-b84f-816d0e269706"
    />
    <p>Grid - currently uses example content</p>
    <Grid>
      <div v-for="index in 3" :key="index">
        <Container
          title="Super Mario Galaxy 2"
          platform="Wii"
          year="2010"
          :image="imageFile"
          body="Super Mario Galaxy 2 is a platform video game developed and published by Nintendo for the Wii."
          link="https://google.com"
        />
      </div>
    </Grid>
  </div>
</template>

<script>
import Grid from './components/grid/Grid';
import ContainerBlock from './components/container/ContainerBlock';
import Container from './components/container/Container';
import imageFile from './assets/mario.jpg';

export default {
  name: 'App',
  data: function() {
    return {
      imageFile
    }
  },
  components: {
    Grid,
    ContainerBlock,
    Container
  }
}
</script>

