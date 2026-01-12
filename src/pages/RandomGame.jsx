import React from 'react'
import { Navigate } from 'react-router-dom';
import { useFetchGames } from '../hooks/useFetchGames';


const RandomGame = () => {

  const {games, isLoading, error} = useFetchGames()

  if (isLoading){
    return (<><h1>Loading...</h1></>)
  }

  if (error || !games){
    return(<>
    
    <h1>
      Error with Loading Page
    </h1>

    </>)
  }

  const randomIndex = Math.random();
  const index = Math.floor(randomIndex * games.length);

  const targetPath = "/game/" + index;

  return(
    <>
    <Navigate to={targetPath} replace={true} />
    </>
  );
};

export default RandomGame
