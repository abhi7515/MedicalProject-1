/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './style.css';
// import data from '../../Data/DiseasesDetailData';

class DiseaseDetail extends React.Component {
	constructor(title) {
		super();
		this.title = title;
	}

	render() {
		return (
			<div className="container main">
				<div className="mt-2">
					<div>
						<h1 className="diseases_title">
							{this.props.title} {this.props.id}
						</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default DiseaseDetail;