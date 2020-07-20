import Grid from './Grid';
import Container from '../container/Container.vue';
import data from '../container/Container.json';
import imageFile from '../../assets/mario.jpg';

export default { title: 'Grid' };

export const defaultComponent = () => ({
  components: { Grid, Container },
  template:
    `<Grid>
      <div v-for="index in 3" :key="index">
        <Container
          title='${data.title}'
          platform='${data.platform}'
          year='${data.year}'
          image='${imageFile}'
          body='${data.body}'
          link='${data.link}'
        />
      </div>
    </Grid>`
});