import React, { Component } from 'react';

class Login extends Component {
  state = {
    name: null,
    email: null,
    id: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="email">Correo:</label>
          <input type="text" id="email" onChange={this.handleChange} />
          <label htmlFor="id">Cédula:</label>
          <input type="text" id="id" onChange={this.handleChange} />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    )
  }
}

export default Login;