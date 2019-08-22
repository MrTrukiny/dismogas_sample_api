import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createService } from '../../store/actions/serviceActions';
import { Redirect } from 'react-router-dom'

class CreateService extends Component {
	state = {
		title: "",
		content: ""
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state)
		this.props.createService(this.state)
		this.props.history.push('/');
	}
	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='signin' />

		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Nuevo Servicio</h5>
					<div className="input-field">
						<label htmlFor="title">Título</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="content">Contenido del servicio</label>
						<textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<button className="btn green lighten-1">Crear servicio</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createService: (service) => dispatch(createService(service))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateService)
