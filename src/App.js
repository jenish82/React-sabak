import './App.css';
import { useState } from 'react';

function App() {

const [name, setName] = useState('Jenish')
const [showContent, setShowContent] = useState(true)
const [events, setEvents] = useState([
  {title: "jenish's birthday party", id: 1},
  {title: "Asan's live stream", id: 2},
  {title: "match: manchester united vs barcelona", id: 3}
])


  const handleClick = () => {
    setName('Asan')
  }

  let handleDelete = (id)=>{
    setEvents((prev)=>{
      return prev.filter((event)=>{
        return event.id !==id
      })
    })
  }


  return (
    <div className="App">
      <h1>My name is {name}</h1>
      
      <hr/>
      <br/>
    { showContent && <button onClick={ ()=> setShowContent(false)}> Hide Conent</button> }
    { !showContent && <button onClick={ ()=> setShowContent(true)}> Show Conent</button> }
    {showContent && <div>
      {events.length === 0 && <h4>Not Conent Yer :(</h4>}
      {events.map((event)=>{
        return(
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        )
      })}

      </div>}

    </div>
  );
}

export default App;
 