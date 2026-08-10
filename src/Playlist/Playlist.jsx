import { useState } from 'react'
import Tracklist from '../Tracklist/Tracklist'
import styles from './Playlist.module.css'

function Playlist({ tracks, onRemoveTrack }) {
  const [playlistName, setPlaylistName] = useState('')

  const handlePlaylistNameChange = e => {
    setPlaylistName(e.target.value)
  }

  return (
    <section className={styles.playlist}>
      <h2>Playlist</h2>
      <input
         type="text"
         placeholder="Playlist Name"
         value={playlistName}
         onChange={handlePlaylistNameChange}
       />
      <Tracklist tracks={tracks} isAdded={true} onTrackAction={onRemoveTrack} />
      <button>SAVE TO SPOTIFY</button>
    </section>
  )
}

export default Playlist
