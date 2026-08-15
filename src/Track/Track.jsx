import styles from './Track.module.css'

function Track({ track, isAdded, onAction }) {
  return (
    <section className={styles.track}>
      <div className={styles.details}>
        <h3>{track.trackName}</h3>
        <p>{track.artistName} | {track.collectionName}</p>
      </div>
      <button className={styles.button} onClick={() => onAction(track)}>
        {isAdded ? '-' : '+'}
      </button>
    </section>
  )
}

export default Track
