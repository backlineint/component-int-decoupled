<template>
  <Container
    title="Super Mario Galaxy 2"
    platform="Wii"
    year="2010"
    image="https://placeimg.com/640/480/any"
    body="Super Mario Galaxy 2 is a platform video game developed and published by Nintendo for the Wii."
    link="https://google.com"
  />
</template>

<script>
import Container from './container/Container'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Container
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
