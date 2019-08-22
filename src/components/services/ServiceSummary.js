import React from 'react';
import moment from 'moment';

const ServiceSummary = ({service}) => {
	return (
		<div className="card z-depth-0 service-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{service.title}</span>
				<p>Creado por {service.authorFirstName} {service.authorLastName}</p>
				<p className="grey-text">{moment(service.createdAt.toDate()).calendar()}</p>
			</div>
		</div>
	)
}

export default ServiceSummary;