import React from 'react';
import styles from './styles';
import HeaderNav from './HeaderNav';

export default function EditToy({ toys }) {

  return (
    <div style={styles.page}>
      <HeaderNav />
      <h1 style={styles.title}>Edit Toy</h1>
      <form action='/edit' method='POST'>
        <div style={styles.form}>
          <div style={styles.formFirst}>
            <select name='name'>
              <option disabled selected>Select Toy</option>
              {toys ? toys.map((toy, i) => {
                return (
                  <option key={i} value={toy.name}>{toy.name}</option>
                )
                }) : <option>No Data</option>
              }
            </select>
            <input type="text" placeholder='New name' name='newName'/>
          </div>
          <div>
            <input type="text" placeholder='New price' name='newPrice' />
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
