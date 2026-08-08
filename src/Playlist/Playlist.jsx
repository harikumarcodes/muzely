import Tracklist from '../Tracklist/Tracklist'

function Playlist({ tracks }) {
  return (
    <>
      <h2>Playlist</h2>
      <input type="text" placeholder="Playlist Name" />
      <Tracklist tracks={tracks} isInPlaylist={true} />
      <button>SAVE TO SPOTIFY</button>
    </>
  )
}

export default Playlist
