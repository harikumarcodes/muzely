import Tracklist from '../Tracklist/Tracklist'

function SearchResults({ tracks, onAddTrack }) {
  return (
    <>
      <h2>Results</h2>
      <Tracklist tracks={tracks} isAdded={false} onTrackAction={onAddTrack}/>      
    </>
  )
}

export default SearchResults
