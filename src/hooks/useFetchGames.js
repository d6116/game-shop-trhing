import { useEffect, useState } from "react"
import { fetchGameById, fetchGames } from "../api/games"


export const useFetchGames = () =>
{
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getGames = async () =>{
            try{
                const data = await fetchGames()
                setGames(data)
            }
            catch(err)
            {
                setError(err)
            }
            finally
            {
                setIsLoading(false)
            }
            
        }
        
        getGames()

    }, [])



    return { games, isLoading, error }
}

export const useFetchGameById = (id) =>
{
    const [game, setGame] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        if (!id){
            setIsLoading(false)
            return
        }

        const getGame = async () =>{
            try{
                const data = await fetchGameById(id)
                setGame(data)
            }
            catch(err)
            {
                setError(err)
            }
            finally
            {
                setIsLoading(false)
            }
            
        }
        
        getGame()

    }, [])



    return { game, isLoading, error }
}