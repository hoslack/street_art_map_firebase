import React from 'react';
import { Form } from './Form';
import { InfoWindow } from "react-google-maps";

export const PopUp = props => {
	return (
		<div>
			<InfoWindow position={props.position} onCloseClick={() => props.closePopUp()}>
				<Form onSubmit={props.onSubmit}/>
			</InfoWindow>
		</div>
	);
};

PopUp.propTypes = {
	position: PropTypes.object.isRequired,
	closePopUp: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};
