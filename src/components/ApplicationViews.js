import React from "react"
import { Route, useState } from "react-router-dom"
import { GameList } from "../game/GameList.js"
import { EventList } from "../event/EventList.js"
import { GameForm } from "../game/GameForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <GameList />
            </Route>

            <Route exact path="/events">
                <EventList />
            </Route>

            <Route exact path="/games/new">
                <GameForm />
            </Route>

        </main>
    </>
}