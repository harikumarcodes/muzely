import Track from '../Track/Track'

function Tracklist({isInPlaylist}) {
  return (
    <>
      <Track isInPlaylist={isInPlaylist}/>
      <Track isInPlaylist={isInPlaylist}/>
    </>
  )
}

export default Tracklist
