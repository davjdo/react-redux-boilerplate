import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from './hoc/Layout/Layout';
import Counter from './containers/Counter/Counter';
import styles from './App.css';

const App = props => (
  <div className={styles.App}>
    <Counter />
    <Layout />
  </div>
);

export default hot(module)(App);
