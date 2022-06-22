import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createGame, getGameTypes } from './GameManager.js'


export const GameForm = () => {
    const history = useHistory()
    const [gameTypes, setGameTypes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        title: "",
        maker: "",
        numberOfPlayers: 0,
        skillLevel: 1,
        gameTypeId: 0
    })

    useEffect(() => {
        getGameTypes()
            .then(setGameTypes)
    }, [])

    const changeGameState = (domEvent) => {
        const newGameState = { ...currentGame }
        newGameState[domEvent.target.name] = domEvent.target.value
        setCurrentGame(changeGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maker">Maker: </label>
                    <input type="text" name="maker" required autoFocus className="form-control"
                        value={currentGame.maker}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input type="number" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skillLevel">Skill Level: </label>
                    <input type="number" min="1" max="5" name="skillLevel" required autoFocus className="form-control"
                        value={currentGame.skillLevel}
                        onChange={changeGameState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gameTypeId">Game Type:</label>
                    <select name="gameTypeId" required className="form-control"
                        value={currentGame.gameTypeId}
                        onChange={changeGameState}>
                        {
                            gameTypes.map(gameType => <option key={gameType.id} value={gameType.id}>
                                {gameType.label}
                            </option>)
                        }

                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        maker: currentGame.maker,
                        title: currentGame.title,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        skillLevel: parseInt(currentGame.skillLevel),
                        gameTypeId: parseInt(currentGame.gameTypeId)
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}