import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'
import itunes from './api/itunes'
import styles from './App.module.css'

const loadPlaylist = () => {
  const saved = localStorage.getItem('playlist')
  if (!saved) {
    return {
      name: "",
      tracks: []
    }
  }
  return JSON.parse(saved)
}

function App() {
  const [playlist] = useState(loadPlaylist)
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState(playlist.name)
  const [playlistTracks, setPlaylistTracks] = useState(playlist.tracks)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (term) => {
    const searchTerm = term.trim()
    if (!searchTerm) {
      return
    }

    setIsSearching(true)

    try {
      const results = await itunes.search(searchTerm)
      if (!results.length) {
        alert('Nothing found. Please try searching for something else.')
      }
      setSearchResults(results)
    } catch (e) {
      console.error(e)
      alert('Unable to search for music. Please try again.')
    } finally {
      setIsSearching(false)
    }
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

  const handleSavePlaylist = () => {
    const playlist = {
      name: playlistName,
      tracks: playlistTracks,
    }

    localStorage.setItem(
      'playlist',
      JSON.stringify(playlist)
    )
  }
    
  return (
    <main className={styles.main}>
      <h1>Muzely</h1>
      <SearchBar onSearch={handleSearch} isSearching={isSearching} />
      <div className={styles.panels}>
        <SearchResults tracks={searchResults} onAddTrack={handleAddTrack} playlistTracks={playlistTracks}/>
        <Playlist
          tracks={playlistTracks}
          onRemoveTrack={handleRemoveTrack}
          name={playlistName}
          onNameChange={setPlaylistName}
          onSave={handleSavePlaylist}
        />
      </div>
    </main>
  )
}

export default App
