import { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar({ onSearch, isSearching }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <section className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search music"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        onClick={() => onSearch(searchTerm)}
        disabled={isSearching}
      >
        {isSearching ? 'SEARCHING...' : 'SEARCH'}
      </button>
    </section>
  )
}

export default SearchBar
