import Container from './Container.vue';
import data  from './Container.json';

export default { title: 'Container' };

export const defaultComponent = () => ({
  components: { Container },
  template:
    `<Container
      title="${data.title}"
      platform="${data.platform}"
      year="${data.year}"
      image="${data.image}"
      body="${data.body}"
      link="${data.link}"
    />`
});