import React, { useEffect, useMemo, useState } from 'react'
import Title from '../componments/Title'
import Carousel from '../componments/Carousel'
import GameList from '../componments/GameList'
import { useFetchGames } from '../hooks/useFetchGames'

const HomePage = () => {

  const [gameListLimit, setListLimit] = useState(4)
  const {games, isLoading, error} = useFetchGames()

  const [category, setCategory] = useState(null)
  const filteredGame = useMemo(() => {
    if (!category || category === ''){
      return games
    }

    return games.filter((game) => game.genre === category)
  }, [category, games])

  

  // console.log(games)


  const showMoreGames = () =>{
    setListLimit(gameListLimit + 8)
  }

  const clearCategory = () =>{
    setCategory(null)
    setListLimit(4)
  }


  if (isLoading)
  {
    return(
      <>
      <h1>Loading</h1>
      </>
    )
  }
  if (error)
  {
    return(
      <>
      <h1>Error: {error.message}</h1>
      </>
    )
  }

  return (
    <main className='center'>

        <Carousel gameList={games} setCategory={setCategory} setListLimit={setListLimit}/>

        <GameList games={filteredGame} gameListLimit={gameListLimit}/>

        { /*
        <button onClick={
          category
          ?showAllGames
          : ()=>{setCategory(null)}
        } className='showMoreGamesButton' >{'Show More Games'}</button>
        */}

        { 
          category
          ? <button onClick={clearCategory} className='showMoreGamesButton'>{'Clear Category'}</button>
          : <button onClick={showMoreGames} className='showMoreGamesButton'>{'Show More Games'}</button>
        }

    </main>
  )
}

export default HomePage
