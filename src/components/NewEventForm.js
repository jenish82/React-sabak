
import './NewEventForm.css'
import { useState } from 'react'

const NewEventForm = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    
    return (
        <form className='new-event-form'>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)}/>
            </label>
            <button type='button'>reset inputs</button>
            <br />
            <br />
            <button>Submit</button>
            <hr />
            <p>Title:{ title}</p>
            <p>Date:{ date}</p>

        </form>
    )
}

export default NewEventForm
