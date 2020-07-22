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
    fetch(`http://decoupled-component-sandbox.lndo.site/jsonapi/node/game/${this.uuid}?include=field_image`)
      .then(response => response.json())
      .then(data => {
        this.title = data.data.attributes.title
        this.platform = data.data.attributes.field_platform
        this.year = data.data.attributes.field_year.toString()
        this.body = data.data.attributes.body.processed
        this.image = `http://decoupled-component-sandbox.lndo.site${data.included[0].attributes.uri.url}`
      });
  },
  components: {
    Container
  }
}
</script>