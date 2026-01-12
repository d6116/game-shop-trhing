import { useParams, Link } from 'react-router-dom'
import { useFetchGameById } from '../hooks/useFetchGames'


const GamePage = () => {
  const {gameId} = useParams()
  const {game, isLoading, error} = useFetchGameById(gameId)

  if (isLoading){
    return (<><h1>Loading...</h1></>)
  }

  if (error || !game){
    return(<>
    
    <h1>
      Error with Loading Page
    </h1>

    </>)
  }

  
  return (
    <section className="game-page">
      <div className="game-layout">
        {/* LEFT SIDE: text content */}
        <div className="game-left">
          <header className="game-header">
            <Link to="/" className='game-genre-pill'>⬅️ Back To Main</Link>
            <h1 className="game-title">{game.title}</h1>

            <div className="game-genres">
              <span className="game-genre-pill">{game.genre}</span>
              {/* if you later have multiple genres, map them here */}
            
            </div>
            <a
              href={game.game_url}
              target="_blank"
              rel="noreferrer"
              className="game-play-button"
            >
              Play Game
            </a>
            
          
          </header>

          <div className="game-text-content">
            <p className="game-short-description">
              {game.short_description}
            </p>

            <div className="game-description">
              {game.description
                ?.split(/\r?\n\r?\n/)
                .filter(Boolean)
                .map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
            </div>
            {
              game.publisher && (
                <div>
                  <h3 className='minimum'>Publisher:</h3>
                  <p>{game.publisher}</p>
                </div>
              )

            }
            {
              game.minimum_system_requirements && (
                <div>
                  <h3 className='minimum'>Minimum System Requirements:</h3>
                  <p><b>OS: </b> {game.minimum_system_requirements.os}</p>
                  <p><b>Graphics: </b> {game.minimum_system_requirements.graphics}</p>
                  <p><b>Memory: </b> {game.minimum_system_requirements.memory}</p>
                  <p><b>Processor: </b> {game.minimum_system_requirements.processor}</p>
                  <p><b>Storage: </b> {game.minimum_system_requirements.storage}</p>
                </div>
              )

            }
          </div>

          
        </div>

        {/* RIGHT SIDE: screenshots */}
        <div className="game-right">
          {Array.isArray(game.screenshots) && game.screenshots.length > 0 && (
            <div className="game-screenshots">
              {game.screenshots.map((shot) => (
                <figure key={shot.id} className="game-screenshot-item">
                  <img
                    src={shot.image}
                    alt={`${game.title} screenshot`}
                    className="game-screenshot-image"
                  />
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default GamePage
