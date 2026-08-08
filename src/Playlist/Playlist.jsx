import Tracklist from '../Tracklist/Tracklist'

function Playlist() {
  return (
    <>
      <h2>Playlist</h2>
      <input type="text" placeholder="Playlist Name" />
      <Tracklist />
      <button>SAVE TO SPOTIFY</button>
    </>
  )
}

export default Playlist
