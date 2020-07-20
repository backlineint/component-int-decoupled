import Container from './Container.vue';
import data from './Container.json';
import imageFile from '../../assets/mario.jpg';

export default { title: 'Container' };

export const defaultComponent = () => ({
  components: { Container },
  template:
    `<Container
      title="${data.title}"
      platform="${data.platform}"
      year="${data.year}"
      image="${imageFile}"
      body="${data.body}"
      link="${data.link}"
    />`
});