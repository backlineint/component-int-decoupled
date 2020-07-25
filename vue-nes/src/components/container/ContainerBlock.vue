<template>
  <Container
    :title=title
    :platform=platform
    :year=year
    :body=body
    :image=image
    link="#"
  />
</template>

<script>
import Container from './Container';

export default {
  data () {
    return {
      title: null,
      platform: null,
      year: null,
      image: null,
      body: null
    }
  },
  props: {
    uuid: String
  },
  mounted () {
    const drupalProvider = document.querySelector(".nes_container");
    const config = drupalProvider.dataset;
    fetch(`http://decoupled-component-sandbox.lndo.site/jsonapi/node/game?filter[drupal_internal__nid]=${config.game}&include=field_image`)
      .then(response => response.json())
      .then(data => {
        this.title = data.data[0].attributes.title
        this.platform = data.data[0].attributes.field_platform
        this.year = data.data[0].attributes.field_year.toString()
        this.body = data.data[0].attributes.body.processed
        this.image = `http://decoupled-component-sandbox.lndo.site${data.included[0].attributes.uri.url}`
      });
  },
  components: {
    Container
  }
}
</script>