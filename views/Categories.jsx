import React from 'react';
import styles from './styles';
import categories from '../models/categories';

export default function Categories() {
  return (
    <>
      <h2>Categories:</h2>
      <div style={styles.categories}>
        {categories.map((category, i) => {
          return (
              <div key={i} style={styles.category}>
                <h2>{category.name}</h2>
                <div style={styles.categoryImageContainer}>
                  <a href={`/${i}`}>
                    <img style={styles.categoryImage} src={category.image} alt="Toy Image" />
                  </a>
                </div>
              </div>
          )
        })}
      </div>
    </>
  )
}
