
import './NewEventForm.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const NewEventForm = ({newEvent}) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const resetInput = ()=>{
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
      
        const event = {
            title: title,
            date: date,
            id: uuidv4()
        }
        newEvent(event)
        resetInput()
    }
    
    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
            </label>
        
            <button>Submit</button>
         

        </form>
    )
}

export default NewEventForm
