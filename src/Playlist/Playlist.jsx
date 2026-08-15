import Tracklist from '../Tracklist/Tracklist'
import styles from './Playlist.module.css'

function Playlist({ tracks, onRemoveTrack, name, onNameChange, onSave }) {
  const handlePlaylistNameChange = e => {
    onNameChange(e.target.value)
  }

  return (
    <section className={styles.playlist}>
      <input
        className={styles.input}
         type="text"
         placeholder="Playlist Name"
         value={name}
         onChange={handlePlaylistNameChange}
       />
      <Tracklist tracks={tracks} isAdded={true} onTrackAction={onRemoveTrack} />
      <button onClick={onSave}>SAVE PLAYLIST</button>
    </section>
  )
}

export default Playlist
