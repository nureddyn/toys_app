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
              <p style={styles.goldColor}>Price: ${String(toy.price)}</p>
              <div style={styles.imageBlock}>
                {toy.image &&
                  <a target='_blank' href={toy.storeURL}>
                    <img style={styles.wishImage} src={toy.image} alt={`${toy.name} image`} />
                  </a>
                }
                <form style={styles.formy} action={`/remove/${toy._id}?_method=DELETE`} method='POST'>
                  <input hidden type="text" value={toy.name} name="name" />
                  <button style={styles.formyButton} type="submit">Remove from wishes</button>
              </form>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
