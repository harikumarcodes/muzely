import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <section className={styles.searchBar}>
      <input type="text" placeholder="Search Spotify" />
      <button>SEARCH</button>
    </section>
  )
}

export default SearchBar
