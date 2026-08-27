import Tracklist from '../Tracklist/Tracklist'
import styles from './Playlist.module.css'

function Playlist({ playlist, onRemoveTrack, onNameChange, onSave, onBack, onDelete }) {
  const handlePlaylistNameChange = e => {
    onNameChange(e.target.value)
  }

  return (
    <section className={styles.playlist}>
      <input
        className={styles.input}
        type="text"
        placeholder="Playlist Name"
        value={playlist.name}
        onChange={handlePlaylistNameChange}
      />
      {playlist.tracks.length ? (
        <Tracklist
          tracks={playlist.tracks}
          isAdded={true}
          onTrackAction={onRemoveTrack}
        />
      ) : (
        <p>No tracks in playlist</p>
      )}
      <button onClick={onSave}>SAVE PLAYLIST</button>
      <button onClick={onBack}>BACK</button>
      <button onClick={onDelete}>DELETE</button>
    </section>
  )
}

export default Playlist
