import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "../games/GameProvider.js"
import { EventContext } from "./EventProvider"


export const EventForm = props => {
    const { getGames, games } = useContext(GameContext)
    const { createEvent } = useContext(EventContext)
    const [currentEvent, setEvent] = useState({
        gameId: 1,
        description: "",
        date: "",
        time: "",
    })

    useEffect(() => {
        getGames()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEventState = currentEvent
        newEventState[event.target.name] = event.target.value
        setEvent(currentEvent)

    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        defaultValue={currentEvent.gameId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id} key={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <select name="description" className="form-control"
                        defaultValue={currentEvent.description}
                        onChange={handleControlledInputChange}>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" className="form-control"
                        value={currentEvent.time}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" className="form-control"
                        defaultValue={currentEvent.date}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createEvent({
                        gameId: currentEvent.gameId,
                        description: currentEvent.description,
                        date: currentEvent.date,
                        time: currentEvent.time
                    }).then(() => props.history.push({pathname: "/events"}))
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}