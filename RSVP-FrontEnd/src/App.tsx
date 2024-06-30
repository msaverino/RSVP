import { useState } from 'react'
import './App.css'
import Attending from './Components/Attending/Attending'
import Decline from './Components/Decline/Decline'

function App() {
  const [showYesPopup, setYesPopup] = useState(false);
  const [showDeclinePopup, setDeclinePopup] = useState(false);

  const toggleYesPopup = () => {
    setYesPopup(!showYesPopup);
  }

  const toggleNoPopup = () => {
    setDeclinePopup(!showDeclinePopup);
  }

  return (
    <div>
      Some image here
      <h1>John Doe's 1st Birthday Party</h1>
      <p>When: Thursday, July 18th, 2024
        <br></br>Time: 1 PM
      <br></br>Where: My House</p>
      <p>Will you be attending?</p>
      <button onClick={toggleYesPopup} className="Accept">Yes</button>
      <button onClick={toggleNoPopup} className="Decline">No</button>

      {showYesPopup && <Attending togglePopup={toggleYesPopup} />}
      {showDeclinePopup && <Decline togglePopup={toggleNoPopup} />}
    </div>
  )
}

export default App
