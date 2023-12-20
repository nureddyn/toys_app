import React from 'react'
import styles from './styles';
import HeaderNav from './HeaderNav';

export default function Category({ category, toys }) {
  return (
    <div style={styles.page}>
      <HeaderNav />
      <h1 style={styles.title}>{category.name}</h1>
      {toys ?
        <div style={styles.toyList}>
          {toys.map((toy, i) => {
            return (
              <div style={styles.toyElement} key={i}>
                <h4 style={{textWrap: 'balance', fontSize: '1.5em'}}>{toy.name}</h4>
                <p>Price: ${String(toy.price)}</p>
                {toy.image &&
                  <img style={styles.toyImage} src={toy.image} alt={`${toy.name} image`} />
                }
              </div>
            )
          })}
        </div>
      : "No toys found"}
    </div>
  )
}
