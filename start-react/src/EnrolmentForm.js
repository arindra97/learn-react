import {useState} from 'react';
import './App.css';

function EnrolmentForm (props) {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLasttName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (event) => {
    setWelcomeMessage(`Welcome ${firstName} ${lasttName}`);
    event.preventDefault();
  }

  return(
    <div>
      <form className='enrolForm' onSubmit={handleSubmit}> 
        <h1>{props.choosenProgram} Student Details</h1>
        <label>First Name :</label>
        <input 
          type="text" 
          name="fname" 
          onBlur={(event) => setFirstName(event.target.value)}/>
        <br />
        <label>Last Name :</label>
        <input 
          type="text" 
          name="lname" 
          onBlur={(event) => setLasttName(event.target.value)}/>
        <br />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
        <br />
        <br />
        <label id="studentMsg" className="message">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
};

export default EnrolmentForm;