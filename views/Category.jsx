import React from 'react'
import styles from './styles';
import HeaderNav from './HeaderNav';

export default function Category({ category, toys }) {
  return (
    <div style={styles.page}>
      <HeaderNav />
      <h1 style={styles.title}>{category.name}</h1>
      {toys ?
        <ul>
          {toys.map((toy, i) => {
            return (
              <li key={i}>
                <p>{toy.name}</p>
                <p>${String(toy.price)}</p>
                {toy.image &&
                  <img src={toy.image} alt={`${toy.name} image`} />
                }
              </li>
            )
          })}
        </ul>
      : "No toys found"}
    </div>
  )
}
