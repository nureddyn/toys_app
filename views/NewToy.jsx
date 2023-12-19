import React from 'react';
import styles from './styles';
import HeaderNav from './HeaderNav';

export default function NewToy({ categories }) {
  return (
    <div style={styles.page}>
      <HeaderNav />
      <form action='/new' method='POST'>
        Name: <input type="text" name='name' />

        <label htmlFor='category'>Category</label>
        <select name='category'>
          {categories.map((category, i) => {
            return (
              <option value={category.name}>{category.name}</option>
            )
          })}
        </select>
        Price: <input type='text' name='price' />
        Image: <input type="text" name='image' />
        Store URL: <input type="text" name='storeURL' />
        <input type="submit" />
      </form>
    </div>
  )
}