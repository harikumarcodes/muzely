import Tracklist from '../Tracklist/Tracklist'
import styles from './SearchResults.module.css'

function SearchResults({ tracks, onAddTrack, playlistTracks }) {
  const filteredTracks = tracks.filter(track =>
    !playlistTracks.some(playlistTrack =>
      playlistTrack.trackId === track.trackId
    )
  )
  
  return (
    <section className={styles.results}>
      <h2>Results</h2>
      
      {filteredTracks.length ? (
        <Tracklist tracks={filteredTracks} isAdded={false} onTrackAction={onAddTrack}/>      
      ) : (
        tracks.length ? (
          <p>All results are already in the playlist</p>
        ) : (
          <p>Try searching for something</p>
        )
      )}
    </section>
  )
}

export default SearchResults
