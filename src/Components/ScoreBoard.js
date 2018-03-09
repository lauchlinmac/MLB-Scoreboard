import React from 'react';
import {connect} from 'react-redux';

import './components.css';

class ScoreBoard extends React.Component{
	
	render(){		
		const createBoard = (team)=>{		
			var re = this.props.details['linescore']['inning_line_score'].map(
				(item,index)=><td key={index}>{item[team]}</td>
			);
			return (
				<React.Fragment>
					{re}
					<td>{this.props.details['linescore'][team+'_team_runs']}</td>
					<td>{this.props.details['linescore'][team+'_team_hits']}</td>					
					<td>{this.props.details['linescore'][team+'_team_errors']}</td>
				</React.Fragment>
			)
		}

		return (
			<div id="score-board">
				<table>
					<thead>
						<tr>
							<th>Team Name</th>
							{
								this.props.details['linescore']['inning_line_score'].map((item,index)=><th key={index}>{index+1}</th>)
							}
							<th>R</th>
							<th>H</th>
							<th>E</th>
						</tr>
					</thead>					
					<tbody>	
						<tr>
							<th>{this.props.details['home_fname']}</th>
							{createBoard('home')}
						</tr>			
						<tr>
							<th>{this.props.details['away_fname']}</th>
							{createBoard('away')}							
						</tr>		

					</tbody>
				</table>
			</div>
		)
	}

}

const mstp = state =>({
	details: state.details.data
})

export default connect(mstp)(ScoreBoard);