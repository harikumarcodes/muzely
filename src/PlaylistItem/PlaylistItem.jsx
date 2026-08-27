import styles from './PlaylistItem.module.css'

function PlaylistItem({ id, name, onPlaylistSelection }) {
  return (
    <button
      className={styles.playlistItem}
      onClick={() => onPlaylistSelection(id)}
    >
      {name}
    </button>
  )
}

export default PlaylistItem
