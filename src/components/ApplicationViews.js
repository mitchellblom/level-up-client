import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./games/GameList.js"
import { GameProvider } from "./games/GameProvider.js"
import { GameForm } from "./games/GameForm.js"
import { EventProvider } from "./events/EventProvider.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <GameProvider>
                <Route exact path="/" render={ props => <GameList {...props}/>}/>
                <EventProvider>
                    <Route exact path="/events">
                        <EventList />
                    </Route>
                    <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                </EventProvider>
            </GameProvider>
        </main>
    </>
}