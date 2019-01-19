import * as React from 'react';
import Helmet from 'react-helmet';
import { Container, Header } from 'semantic-ui-react';

import Oreo from 'containers/Oreo';
import './App.css';

const App: React.SFC<{}> = () => (
  <>
    <Helmet>
      <title>O***RE***O Maker</title>
    </Helmet>
    <Container style={{ margin: 50 }}>
      <Header as="h1" color="teal" textAlign="center" style={{ fontSize: 36 }}>
        O***RE***O Maker
      </Header>
      <p style={{ fontSize: 18, textAlign: 'center' }}>
        * Original illustrations were drawn by{' '}
        <a href="https://twitter.com/773O3">@773O3</a>
      </p>
      <Oreo />
    </Container>
  </>
);

export default App;
