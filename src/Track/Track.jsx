function Track({ track, isAdded, onAction }) {
  return (
    <>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      <button onClick={() => onAction(track)}>
        {isAdded ? '-' : '+'}
      </button>
    </>
  )
}

export default Track
