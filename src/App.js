import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showModal, setSowModal] = useState(true)

  const [name, setName] = useState('Jenish')
  const [showContent, setShowContent] = useState(true)
  const [events, setEvents] = useState([
    { title: "jenish's birthday party", id: 1 },
    { title: "Asan's live stream", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 }
  ])


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

  const closeModal = () => {
    setSowModal(false)
  }

  return (
    <div className="App">
      <Title title="Jenishs Kingdom events" subtitle="All events well be here :)" />
      <h1>My name is {name}</h1>
      <hr />
      {showContent && <button onClick={() => setShowContent(false)}> Hide Conent</button>}
      {!showContent && <button onClick={() => setShowContent(true)}> Show Conent</button>}
      {showContent && <EventList events={events} handleDelete={handleDelete}/>}
      {showModal && <Modal closeModal={closeModal} isModeModal={false}>
        <h2>Janybaev Jenishbek Youtube Channel❤️</h2>
        <p>Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptatum vero voluptate
          totam distinctio est expedita quo, sequi,
          accusamus nemo maxime, ea corrupti? Aliquid
          eius maxime repellendus optio eum, maiores,
          odio, vitae ea incidunt laborum fugiat enim
          ipsum accusamus delectus aperiam assumenda
          dolore dolores distinctio facilis? Asperiores
          harum beatae perferendis ullam.</p>
        <a href="">Subscripbe</a>
      </Modal>}
      <br />
      <br />

      <button onClick={() => { setSowModal(true) }}>Show Modal</button>

    </div>
  );
}

export default App;
