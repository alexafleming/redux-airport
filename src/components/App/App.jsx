import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const reduxStore = useSelector(store => store)
  const [newAirline, setNewAirline] = useState('')
  const airlinesList = useSelector(store => store.airlinesList)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: 'ADD_AIRLINE',
      payload: newAirline
    });


    setNewAirline('')
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Redux Airport</h1>
        <input
          type='text'
          placeholder='Airline Name'
          value={newAirline}
          onChange={event => setNewAirline(event.target.value)}
        />
        <button>Add Airline</button>
      </form>
      <table> 
        <tbody>
        {airlinesList.map((airline, i) => (
        <tr key={i}><td>{airline}</td>
        </tr>
      ))}
      </tbody>
      </table>

    </div>
  );
}

export default App;
