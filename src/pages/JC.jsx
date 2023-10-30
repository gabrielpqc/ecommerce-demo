import React, {useState, useEffect, useCallback} from "react";
import Header from "../components/Header";

const JC = () => {

    const [games, setGames] = useState([]);
    const [gameIds, setGameIds] = useState([]);

    const debounceRequests = useCallback(debounce(fetchGame, 400), []);

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
          const context = this;
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        };
      }

    const fetchGameIds = () => {
        fetch('')
            .then(response => response.json())
            .then(json => {
                setGameIds(json);
            })
            .catch(error => console.error(error));
    }

    const fetchGame = (game) => {
         fetch(`https://europe.api.riotgames.com/tft/match/v1/matches/${game}?api_key=`)
            .then(response => response.json())
            .then(json => {setGames(games =>[...games, json]); console.log(json)})
            .catch(error => console.error(error));
    }

    useEffect(() => {
        gameIds.map((game) => {
            debounceRequests(fetchGame(game), 500);
        })
       
    },[gameIds])


    //debounce(fetch,500);

    return (
        <div>
            <Header />
            <h1>How many games were played today:</h1>
            <button onClick={fetchGameIds}>Check</button>
            <div>{games.length > 0 ? games.map((game) => {
                return <p>{game}</p>
            }) : ''}</div>
        </div>
        
    )
}

export default JC;
