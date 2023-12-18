import React from 'react';
import styles from './styles';
import categories from '../models/categories';

export default function Categories() {
  return (
    <div style={styles.categories}>
      <div style={styles.category}>
        <h2>{categories[0].name}</h2>
        <div>
          <img style={styles.categoryImage} src={categories[0].image} alt="Toy Image" />
        </div>
      </div>
      <div style={styles.category}>
      <h2>{categories[1].name}</h2>
        <div>
          <img style={styles.categoryImage} src={categories[1].image} alt="Toy Image" />
        </div>
      </div>
      <div style={styles.category}>
        <h2>{categories[2].name}</h2>
        <div>
          <img style={styles.categoryImage} src={categories[2].image} alt="Toy Image" />
        </div>
      </div>
      <div style={styles.category}>
        <h2>{categories[3].name}</h2>
        <div>
          <img style={styles.categoryImage} src={categories[3].image} alt="Toy Image" />
        </div>
      </div>
      <div style={styles.category}>
        <h2>{categories[4].name}</h2>
        <div>
          <img style={styles.categoryImage} src={categories[4].image} alt="Toy Image" />
        </div>
      </div>
    </div>
  )
}
