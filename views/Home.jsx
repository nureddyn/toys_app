import React from 'react';
import styles from './styles';
import HeaderNav from './HeaderNav';
import Categories from './Categories';

export default function Home() {
  return (
    <div style={styles.page}>
      <HeaderNav />
      <h1 style={styles.title}>Christmas Toys App</h1>
      <Categories />
    </div>
  )
}
