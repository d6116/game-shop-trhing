


export const fetchGames = async () => {
      const API_URL = '/api/games';

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Data failure: ', response.statusText)
      }

      const data = await response.json();


      return data;

    } catch (error) {
      console.error('Failed to fetch games: ', error)
      throw error
    }
}

export const fetchGameById = async (id) => {
    const API_URL = '/api/game?id=' + id;

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Data failure: ', response.statusText)
      }

      const data = await response.json();

      return data;

    } catch (error) {
      console.error(`Failed to fetch game by id: ${id} error: `, error)
      throw error
    }
}
 