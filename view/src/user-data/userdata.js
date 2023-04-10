import react, { useState } from 'react'

import axios from 'axios';
const UserData = () => {
  const [state, setState] = useState({})

  const updateState = (e) => {
    state[e.target.id] = e.target.value
    setState({ ...state })

  }


  const callHunder = (e) => {

    e.preventDefault()
    axios.post("http://localhost:4000/userdata", state).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })

  }
  return (
    <div>

      <form>
        Name  <input id="name" onChange={updateState} />
        fatherName <input id="fname" onChange={updateState} />
  


        <button onClick={callHunder}>Function for send Request</button>
      </form>



    </div>
  )

}
export default UserData