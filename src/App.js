import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setSowModal] = useState(false)

  const [name, setName] = useState('Jenish')
  const [showContent, setShowContent] = useState(true)
  const [events, setEvents] = useState([])

  const newEvent = (event)=>{
    setEvents((prev) =>{
      return [...prev, event]
    })

    setSowModal(false)

  }


  const handleClick = () => {
    setName('Asan')
  }

  let handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Title title="Jenishs Kingdom events" subtitle="All events well be here :)" />
      <h1>My name is {name}</h1>
      <hr />
      {showContent && <button onClick={() => setShowContent(false)}> Hide Conent</button>}
      {!showContent && <button onClick={() => setShowContent(true)}> Show Conent</button>}
      {showContent && <EventList events={events} handleDelete={handleDelete}/>}
      {showModal && <Modal>
        <NewEventForm newEvent={newEvent}/>
      </Modal>}
      <br />
      <br />

      <button onClick={() => { setSowModal(true) }}>Nev Event</button>

    </div>
  );
}

export default App;
