

async function Game({ params}: {params: {game: string}}) {
  const { game } = await params
  return (
    <div>
      <h1>Wel come to ${game}</h1>
    </div>
  )
}

export default Game