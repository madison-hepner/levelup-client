import React, { useEffect } from "react"
import { getEvents } from "./EventManager.js"

export const EventList = (props) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__title">{event?.game.title}</div>
                        <div className="event__date_time">{game.date} at {game.time} players needed</div>
                        <div className="event__organizer">Hosted by: {game.organizer}</div>
                    </section>
                })
            }
        </article>
    )
}