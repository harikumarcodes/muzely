import Track from '../Track/Track'

function Tracklist({ tracks, isInPlaylist }) {
  return (
    <>
      {tracks.map(track => 
        <Track
          key={track.id}
          track={track}
          isInPlaylist={isInPlaylist}
        />
      )}
    </>
  )
}

export default Tracklist
