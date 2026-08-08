import Tracklist from '../Tracklist/Tracklist'

function SearchResults({ tracks }) {
  return (
    <>
      <h2>Results</h2>
      <Tracklist tracks={tracks} isInPlaylist={false} />      
    </>
  )
}

export default SearchResults
