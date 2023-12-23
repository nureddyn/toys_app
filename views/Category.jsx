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

                <form action="/wish" method='POST'>
                  <input hidden type="text" value={toy.name} name="name" />
                  <input hidden type="text" value={toy.price} name="price" />
                  <input hidden type="text" value={toy.image} name="image" />
                  <input hidden type="text" value={toy.storeURL} name='storeURL' />
                  <button style={styles.formyButton} type="submit">Add to wishes</button>
                </form>
                
                <h4 style={{textWrap: 'balance', fontSize: '1.5em'}}>{toy.name}</h4>
                <p style={styles.goldColor}>Price: ${String(toy.price)}</p>
                {toy.image &&
                  <a target='_blank' href={toy.storeURL}>
                    <img style={styles.toyImage} src={toy.image} alt={`${toy.name} image`} />
                  </a>
                }
              </div>
            )
          })}
        </div>
      : "No toys found"}
    </div>
  )
}
