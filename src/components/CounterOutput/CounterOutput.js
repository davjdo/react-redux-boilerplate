import React from 'react';
import styles from './CounterOutput.css';

const counterOutput = props => (
  <div className={styles.CounterOutput}>Current Counter: {props.value}</div>
);

export default counterOutput;
