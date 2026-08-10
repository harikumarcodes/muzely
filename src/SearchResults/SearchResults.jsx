import Tracklist from '../Tracklist/Tracklist'
import styles from './SearchResults.module.css'

function SearchResults({ tracks, onAddTrack }) {
  return (
    <section className={styles.results}>
      <h2>Results</h2>
      <Tracklist tracks={tracks} isAdded={false} onTrackAction={onAddTrack}/>      
    </section>
  )
}

export default SearchResults
