import React, { useMemo } from 'react'

const Carousel = ({gameList, setCategory, setListLimit}) => {

  const genres = useMemo( () => {
    if (!gameList) return [];
    const allGenres = gameList.map(game => game.genre);
    const newGenres = [... new Set(allGenres)]
    return newGenres;

  }, [gameList])

  const chooseCategory = (genre) =>{
    setCategory(genre)
    // console.log(genre)
    setListLimit(gameList.length)
  }

  return (
    <section className='carousel'>
      <div className='group'>
        {
          genres.map( (genre) => (
            <div key={genre} className='carouselItem' onClick={() => chooseCategory(genre)}>{genre}</div>
          ))

        }
      </div>
      <div className='group' aria-hidden="true">
        {
          genres.map( (genre) => (
            <div key={genre} className='carouselItem' onClick={() => chooseCategory(genre)}>{genre}</div>
          ))

        }
      </div>
    </section>
  )
}

export default Carousel
