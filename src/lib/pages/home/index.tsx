import { Grid } from '@chakra-ui/react';

import { CounterDemo } from './components/counter-demo';
import { CTASection } from './components/cta-section';
import { SomeImage } from './components/some-image';
import { SomeText } from './components/some-text';

const Home = () => (
  <Grid gap={4}>
    <SomeText />
    <SomeImage />
    <CounterDemo />
    <CTASection />
  </Grid>
);

export default Home;
