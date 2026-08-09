import Tracklist from '../Tracklist/Tracklist'

function Playlist({ tracks, onRemoveTrack }) {
  return (
    <>
      <h2>Playlist</h2>
      <input type="text" placeholder="Playlist Name" />
      <Tracklist tracks={tracks} isAdded={true} onTrackAction={onRemoveTrack} />
      <button>SAVE TO SPOTIFY</button>
    </>
  )
}

export default Playlist
