import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from './hoc/Layout/Layout';
import styles from './App.scss';

const App = props => (
  <div className={styles.name}>
    <Layout>
      <p>Test</p>
    </Layout>
  </div>
);

export default hot(module)(App);
