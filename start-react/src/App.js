import './App.css';
import EnrolmentForm from './EnrolmentForm';
import { useState } from 'react';

function App() {
  const [program, setProgram] = useState("UG");
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40);
  
  const handleChange = (event) => {
    setProgram(event.target.value);
  }

  const setUpdatedSeats = (updateSeats) => {
    program === 'UG' ? setUgSeats(updateSeats) : setPgSeats(updateSeats);
  }

  return (
    <div className='App'>
      <div className='programs'>
        <label>Remaining UG Seats - {ugSeats}</label>
        <br />
        <br />
        <label>Remaining PG Seats - {pgSeats}</label>
        <br />
        <br />
        <label>Choose Program:</label>
        <select className='appDropDowns' onChange={handleChange} value={program} >
          <option value='UG'>Undergraduate</option>
          <option value='PG'>Postgraduate</option>
        </select>
      </div>
      <EnrolmentForm 
        choosenProgram={program}
        currentSeats={program === 'UG'? ugSeats : pgSeats}
        setUpdatedSeats={setUpdatedSeats}
      />
    </div>
  )
}

export default App;
