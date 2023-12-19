import React from 'react'
import styles from './styles';
import HeaderNav from './HeaderNav';

export default function Category({ category }) {
  return (
    <div style={styles.page}>
      <HeaderNav />
      <h1 style={styles.title}>{category.name}</h1>
    </div>
  )
}
