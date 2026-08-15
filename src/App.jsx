import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'
import itunes from './api/itunes'
import styles from './App.module.css'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])

  const handleSearch = async (term) => {
    const results = await itunes.search(term)
    setSearchResults(results)
  }

  const handleAddTrack = track => { 
    const isInPlaylist = playlistTracks.some(
      playlistTrack => playlistTrack.trackId === track.trackId
    )
    if (!isInPlaylist) {
      setPlaylistTracks(prev => [...prev, track])
    }
  }

  const handleRemoveTrack = ({ trackId }) => {
    setPlaylistTracks(prev =>
      prev.filter(track => track.trackId !== trackId)
    )
  }
    
  return (
    <main className={styles.main}>
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.panels}>
        <SearchResults tracks={searchResults} onAddTrack={handleAddTrack}/>
        <Playlist tracks={playlistTracks} onRemoveTrack={handleRemoveTrack}/>
      </div>
    </main>
  )
}

export default App
