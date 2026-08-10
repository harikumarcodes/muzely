import { useState } from 'react'
import Tracklist from '../Tracklist/Tracklist'

function Playlist({ tracks, onRemoveTrack }) {
  const [playlistName, setPlaylistName] = useState('')

  const handlePlaylistNameChange = e => {
    setPlaylistName(e.target.value)
  }

  return (
    <>
      <h2>Playlist</h2>
      <input
         type="text"
         placeholder="Playlist Name"
         value={playlistName}
         onChange={handlePlaylistNameChange}
       />
      <Tracklist tracks={tracks} isAdded={true} onTrackAction={onRemoveTrack} />
      <button>SAVE TO SPOTIFY</button>
    </>
  )
}

export default Playlist
