import React from 'react'
import { Table } from 'reactstrap';
import data from '../jsonfiles/customData.json';
import {JobData} from './jobData';

export class JobList extends React.Component{
	
		constructor(props){
			super(props);
			this.state={numb:0}
			this.handleClick = this.handleClick.bind(this);
		}
		
		handleClick(){
			const dats=<JobData/>
			alert(dats[0]);
		}
		
		render(){
		
				return (
				<div>
					<Table bordered>
						<thead>
							<th>ID No.</th>
							<th>Title</th>
							<th>Description</th>
							<th>Location</th>
							<th>Skills</th>
						</thead>{
						data.map((job)=>{
							return (
							<tr>
								<td>{job.id+1}</td>
								<td onClick={this.handleClick}>{job.Title}</td>
								<td>{job.Description}</td>
								<td>{job.Location}</td>
								<td>{job.Skills}</td>
							</tr>
							)
						})}
					</Table>
				</div>
		);
		}
}