import React from 'react';
import styles from './styles';

export default function HeaderNav() {
  return (
    <div style={styles.header}>
      <a style={styles.a} href="/">Home</a>
      <a style={styles.a} href="/wish">Your Wishes</a>
      <a style={styles.a} href="/new">Add New Toy</a>
    </div>
  )
}
