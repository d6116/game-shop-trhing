import React from 'react'
import GamePreview from './GamePreview'

const GameList = ({games, gameListLimit}) => {
  return (
    <section>
      <div className='gameList'>
        {
          games.map((game, index)=> (
            index < gameListLimit &&
            <GamePreview key={game.id} game={game}>
              {game.title}
            </GamePreview>
          ))
        }
      </div>
    </section>
  )
}

export default GameList
