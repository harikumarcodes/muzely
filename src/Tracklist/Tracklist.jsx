import Track from '../Track/Track'

function Tracklist({ tracks, isAdded, onTrackAction }) {
  return (
    <>
      {tracks.map(track => 
        <Track
          key={track.id}
          track={track}
          isAdded={isAdded}
          onAction={onTrackAction}
        />
      )}
    </>
  )
}

export default Tracklist
