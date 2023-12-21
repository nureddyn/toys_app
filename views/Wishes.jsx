import React from 'react'
import HeaderNav from './HeaderNav'
import styles from './styles'

export default function Wishes({ wishes }) {
  return (
    <div style={styles.wishPage}>
      <HeaderNav />
      <h1 style={styles.title}>My Wishes</h1>
      <div style={styles.wishList}>
        {wishes.map((toy, index) => {
          return (
            <div style={styles.wishElement} key={index}>
              <h4 style={{textWrap: 'balance', fontSize: '1.5em'}}>{toy.name}</h4>
              <p>Price: ${String(toy.price)}</p>
              {toy.image &&
                <a target='_blank' href={toy.storeURL}>
                  <img style={styles.wishImage} src={toy.image} alt={`${toy.name} image`} />
                </a>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}
