
import { Fragment } from "react"


const EventList = ({ events, handleDelete }) => {
    return (
        <div>
            {events.length === 0 && <h4>Not Conent Yer :(</h4>}
            {events.map((event) => {
                return (
                    <Fragment key={event.id}>
                        <h2>{event.title}</h2>
                        <button onClick={() => handleDelete(event.id)}>Delete</button>
                    </Fragment>
                )
            })}

        </div>
    )
}

export default EventList
