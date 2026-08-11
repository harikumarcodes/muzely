import styles from './Track.module.css'

function Track({ track, isAdded, onAction }) {
  return (
    <section className={styles.track}>
      <div className={styles.details}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className={styles.button} onClick={() => onAction(track)}>
        {isAdded ? '-' : '+'}
      </button>
    </section>
  )
}

export default Track
