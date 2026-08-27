import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlists from './Playlists/Playlists'
import Playlist from './Playlist/Playlist'
import itunes from './api/itunes'
import styles from './App.module.css'

const loadPlaylists = () => {
  const saved = localStorage.getItem('playlists')
  if (!saved) {
    return {}
  }
  return JSON.parse(saved)
}

const emptyPlaylist = {
    name: "",
    tracks: [],
}

function App() {
  const [playlists, setPlaylists] = useState(loadPlaylists)
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)
  const [selectedPlaylist, setSelectedPlaylist] = useState({...emptyPlaylist})
  const [searchResults, setSearchResults] = useState([])
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

  const handleAddTrack = (track)=> { 
    const isInPlaylist = selectedPlaylist.tracks.some(
      playlistTrack => playlistTrack.trackId === track.trackId
    )

    if (isInPlaylist) { return }

    setSelectedPlaylist(prev => ({
      ...prev,
      tracks: [
        ...prev.tracks,
        track
      ]
    }))
  }

  const handleRemoveTrack = ({ trackId }) => {
    setSelectedPlaylist(prev => {
      const tracks = prev.tracks.filter(
        track => track.trackId !== trackId
      )

      return { ...prev, tracks }
    })
  }

  const handleSavePlaylist = () => {
    if (!selectedPlaylist.name) {
      alert('Please enter a playlist name.')
      return
    }

    const newPlaylists = {
      ...playlists,
      [selectedPlaylistId]: selectedPlaylist,
    }

    localStorage.setItem(
      'playlists',
      JSON.stringify(newPlaylists)
    )
    setPlaylists(newPlaylists)
    alert('Playlist Saved.')
  }

  const handlePlaylistSelection = (playlistId) => {
    setSelectedPlaylistId(playlistId)
    setSelectedPlaylist(playlists[playlistId])
  }

  const handlePlaylistNameChange = (name) => {
    setSelectedPlaylist(prev => ({
      ...prev, name
    }))
  }

  const handleCreatePlaylist = () => {
    const playlistId = crypto.randomUUID()
    setSelectedPlaylist({...emptyPlaylist})
    setSelectedPlaylistId(playlistId)
  }

  const handleDeletePlaylist = () => {
    const newPlaylists = {...playlists}
    delete newPlaylists[selectedPlaylistId]
    setPlaylists(newPlaylists)
    localStorage.setItem(
      'playlists',
      JSON.stringify(newPlaylists)
    )
    setSelectedPlaylistId(null)
    setSelectedPlaylist({...emptyPlaylist})
  }

  const handleBack = () => {
    setSelectedPlaylistId(null)
    setSelectedPlaylist({...emptyPlaylist})
  }
    
  return (
    <main className={styles.main}>
      <h1>Muzely</h1>
      <SearchBar onSearch={handleSearch} isSearching={isSearching} />
      <div className={styles.panels}>
        <SearchResults
          tracks={searchResults}
          onAddTrack={handleAddTrack}
          playlistTracks={selectedPlaylist.tracks}
          hideActionButton={selectedPlaylistId === null}
        />
        {selectedPlaylistId === null ? (
          <Playlists
            playlists={playlists}
            onPlaylistSelection={handlePlaylistSelection}
            onCreatePlaylist={handleCreatePlaylist}
          />
        ) : (
          <Playlist
            playlist={selectedPlaylist}
            onRemoveTrack={handleRemoveTrack}
            onNameChange={handlePlaylistNameChange}
            onSave={handleSavePlaylist}
            onBack={handleBack}
            onDelete={handleDeletePlaylist}
          />
        )}
      </div>
    </main>
  )
}

export default App
