import React from 'react';
import '../../public/Stats.css';

function Stats(props) {
	const { height, weight } = props.stats;
	return (
		<div className="stats">
			<div className="stats__left">
				<h4>Weight</h4>
				<h2>
					{weight / 10} <span>kg</span>
				</h2>
			</div>
			<div className="stats__right">
				<h4>Height</h4>
				<h2>
					{height / 10} <span>m</span>
				</h2>
			</div>
		</div>
	);
}

export default Stats;
