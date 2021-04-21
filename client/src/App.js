import './App.css';
import React, { useState } from 'react'


function App() {
  const [users, setUsers] = useState([])
  return (
    <div>
      <form>
        <input type="text" />
        <input type="number" />
        <div className='button'>
          <button>Create</button>
          <button>Receive</button>
        </div>
      </form>
      <div>
        {users.map((user) => {
          <div className='user'>{user.id} {user.name} {user.age}</div>
        })}
      </div>
    </div>
  )
}

export default App;
