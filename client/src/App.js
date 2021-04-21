import './App.css';
import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './query/user';



function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS)
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
    if (loading) {
      return <h1>LOading...</h1>
    }
  }, [data])

  return (
    <div>
      <form>
        <input value={username} onChange={e => SetUsername(e.target.value)} type="text" />
        <input value={age} onChange={e => SetAge(e.target.value)} type="number" />
        <div className='button'>
          <button>Create</button>
          <button>Receive</button>
        </div>
      </form>
      <div>
        {users.map((user) =>
          <div className="user">{user.id} {user.username} {user.age}</div>
        )}
      </div>

    </div>
  )
}

export default App;
