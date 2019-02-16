import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Helmet from 'react-helmet';

import Oreo from 'containers/Oreo';
import './App.css';

import 'typeface-roboto';

const App: React.FC<{}> = () => (
  <>
    <Helmet>
      <title>O***RE***O Maker</title>
    </Helmet>

    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Typography variant="h2" align="center" color="primary">
          O***RE***O Maker
        </Typography>
      </Grid>
      <Grid item={true} xs={12}>
        <p style={{ fontSize: 18, textAlign: 'center' }}>
          * Original illustrations were drawn by fffff
          <a href="https://twitter.com/773O3">@773O3</a>
        </p>
      </Grid>
      <Grid item={true} xs={12}>
        <Oreo />
      </Grid>
    </Grid>
  </>
);

export default App;
