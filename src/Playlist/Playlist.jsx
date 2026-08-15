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
      {tracks.length ? (
        <Tracklist
          tracks={tracks}
          isAdded={true}
          onTrackAction={onRemoveTrack}
        />
      ) : (
        <p>No tracks in playlist</p>
      )}
      <button onClick={onSave}>SAVE PLAYLIST</button>
    </section>
  )
}

export default Playlist
