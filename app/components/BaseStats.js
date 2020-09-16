import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../public/BaseStats.css';

function BaseStats({ pokeId }) {
	const [baseStats, setBaseStats] = useState([]);

	useEffect(() => {
		const fetchStats = async () => {
			const { data } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${pokeId}`
			);
			let { stats } = data;
			let outputArr = [];
			for (let i = 0; i < 5; i++) {
				outputArr.push(stats[i].base_stat);
			}
			setBaseStats(outputArr);
		};
		fetchStats();
	}, []);

	return (
		<div className="baseStats">
			<h4>Base Stats</h4>

			<div>
				<div className="baseStats__progress">
					<div className="baseStats__header">
						<label>HP</label>
						<label>{baseStats[0]}</label>
					</div>
					<progress max="300" value={baseStats[0]} />
					<div className="baseStats__header">
						<label>Attack</label>
						<label>{baseStats[1]}</label>
					</div>
					<progress max="300" value={baseStats[1]} />
					<div className="baseStats__header">
						<label>Defense</label>
						<label>{baseStats[2]}</label>
					</div>
					<progress max="300" value={baseStats[2]} />
					<div className="baseStats__header">
						<label>Special-Attack</label>
						<label>{baseStats[3]}</label>
					</div>
					<progress max="300" value={baseStats[3]} />
					<div className="baseStats__header">
						<label>Special-Defense</label>
						<label>{baseStats[4]}</label>
					</div>
					<progress max="300" value={baseStats[4]} />
				</div>
			</div>
		</div>
	);
}

export default BaseStats;
