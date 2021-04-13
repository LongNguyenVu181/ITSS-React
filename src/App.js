import React, { useState} from 'react'
import AddUserForm from './form/AddUserForm'
import UpdateUser from './form/UpdateUser'
import UserTable from './table/UsersTable'
import useStorage from "./hook/storage";

const App = () => {
	const initialFormState = { id: null, name: '', username: '' };
	const [ users, setUsers ] = useStorage();
	const [ currentUser, setCurrentUser ] = useState(initialFormState);
	const [ editing, setEditing ] = useState(false);
	const addUser = user => {
		user.id = users.length + 1;
		setUsers([ ...users, user ])
	};
	const deleteUser = id => {
		setEditing(false);
		setUsers(users.filter(user => user.id !== id))
	};
	const updateUser = (id, updatedUser) => {
		setEditing(false);
		setUsers(users.map(user => (user.id === id ? updatedUser : user)));
	};
	const editRow = user => {
		setEditing(true);
		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	};
	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<>
							<h2>Edit user</h2>
							<UpdateUser
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App