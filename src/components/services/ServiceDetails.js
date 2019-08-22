import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import moment from 'moment';


const ServiceDetails = (props) => {
	const { service, auth } = props;
	if (!auth.uid) return <Redirect to='signin' />

	if (service) {
		return (
			<div className="container section service-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{ service.title }</span>
						<p>{ service.content }</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>Creador por { service.authorFirstName } { service.authorLastName }</div>
						<div>{moment(service.createdAt.toDate()).calendar()}</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="container center">
				<p>Loandin services...</p>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state)
	const id = ownProps.match.params.id;
	const services = state.firestore.data.services;
	const service = services ? services[id] : null
	return {
		service: service,
		auth: state.firebase.auth
	}	
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'services' }
	])
)(ServiceDetails)
