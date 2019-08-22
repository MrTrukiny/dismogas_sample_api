import React from 'react';
import ServiceSummary from './ServiceSummary';
import { Link } from 'react-router-dom';

const ServiceList = ({services}) => {
	return (
		<div className="service-list section">
			{ services && services.map(service => {
				return (
					<Link to={`/service/${service.id}`} key={service.id}>
						<ServiceSummary service={service} key={service.id} />
					</Link>
				)
			})}
		</div>
	)
}

export default ServiceList;