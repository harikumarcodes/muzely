import PlaylistItem from '../PlaylistItem/PlaylistItem'
import styles from './Playlists.module.css'

function Playlists({ playlists, onPlaylistSelection, onCreatePlaylist }) {
  return (
    <div className={styles.playlists}>
      <h2>Playlists</h2>
      <div className={styles.items}>
        {Object.entries(playlists).map(([ id, playlist ]) => 
          <PlaylistItem
            key={id}
            id={id}
            name={playlist.name}
            onPlaylistSelection={onPlaylistSelection} 
          />
        )}
      </div>
      <button onClick={onCreatePlaylist}>CREATE PLAYLIST</button>
    </div>
  )
}

export default Playlists
