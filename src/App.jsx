import { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'

const tracks = [
  {
    id: 1,
    name: 'Beat It',
    artist: 'Michael Jackson',
    album: 'Thiller'
  },
  {
    id: 2,
    name: 'Smooth Criminal',
    artist: 'Michael Jackson',
    album: 'Bad'
  },
  {
    id: 3,
    name: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thiller'
  },
]

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([])

  const handleAddTrack = track => { 
    const isInPlaylist = playlistTracks.some(t => t.id === track.id)
    if (!isInPlaylist) {
      setPlaylistTracks(prev => [...prev, track])
    }
  }

  const handleRemoveTrack = ({ id }) => {
    setPlaylistTracks(prev =>
      prev.filter(track => track.id != id)
    )
  }
    
  return (
    <>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults tracks={tracks} onAddTrack={handleAddTrack}/>
      <Playlist tracks={playlistTracks} onRemoveTrack={handleRemoveTrack}/>
    </>
  )
}

export default App
