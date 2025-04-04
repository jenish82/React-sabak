
import style from './EventList.module.css'


const EventList = ({ events, handleDelete }) => {
    return (
        <div>
            {events.length === 0 && <h4>Not Conent Yer :(</h4>}
            {events.map((event) => {
                return (
                    <div className={style.card} key={event.id}>
                        <h2>{event.title}</h2>
                        <button onClick={() => handleDelete(event.id)}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default EventList
