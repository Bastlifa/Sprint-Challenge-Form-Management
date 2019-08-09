import React from 'react';
import RegistrationForm from './components/RegistrationForm'
import UserCards from './components/UserCards'
import axios from "axios"
import './App.css';

class App extends React.Component {
  constructor()
  {
    super()
    this.state =
    {
      users: []
    }
  }

  getUsers = () =>
  {
    axios.get("http://localhost:5000/api/restricted/data")
    .then(response =>
        {
          console.log("response", response)
          this.setState({users: response.data})
        })
  }

  componentDidMount()
  {
    this.getUsers()
  }
  
  render()
  {
    console.log("users",this.state.users)
    return (
      <div className="App">
        <RegistrationForm setUsers={this.getUsers}/>
        <h2>Users:</h2>
        <UserCards users={this.state.users} />
      </div>
    );
  }
}

export default App;
