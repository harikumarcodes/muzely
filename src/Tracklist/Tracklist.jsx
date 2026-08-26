import Track from '../Track/Track'
import styles from './Tracklist.module.css'

function Tracklist({ tracks, isAdded, onTrackAction }) {
  return (
    <div className={styles.tracklist}>
      {tracks.map(track => 
        <Track
          key={track.trackId}
          track={track}
          isAdded={isAdded}
          onAction={onTrackAction}
        />
      )}
    </div>
  )
}

export default Tracklist
