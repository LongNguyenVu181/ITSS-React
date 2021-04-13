
import './App.css';

import React, { useState, Fragment } from 'react'
import UpdateForm from './form/UpdateUser'
function App() {
  const usersData = [
    { id: 1, name: 'quanle', username: 'duyngadocton' },
	]

	const initialFormState = { id: null, name: '', username: '' }
  const [ editing, setEditing ] = useState(true)
  const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(users[0])
  
  const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}
	
	
  return (
    <div className="App">
     
      <div className="content">
        {editing ? 
          <div className="Edit-form">
            <h2>Edit user form</h2>
            <UpdateForm
              editing={editing}
              setEditing ={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
          :
          <div className="Edit-form">
            <h2>Edit user form</h2>
            <UpdateForm
              editing={editing}
              setEditing ={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
