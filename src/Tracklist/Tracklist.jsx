import Track from '../Track/Track'
import styles from './Tracklist.module.css'

function Tracklist({ tracks, isAdded, onTrackAction, hideActionButton}) {
  return (
    <div className={styles.tracklist}>
      {tracks.map(track => 
        <Track
          key={track.trackId}
          track={track}
          isAdded={isAdded}
          onAction={onTrackAction}
          hideActionButton={hideActionButton}
        />
      )}
    </div>
  )
}

export default Tracklist
