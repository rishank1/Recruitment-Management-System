import React from 'react'
import { Table } from 'reactstrap';
import data from '../jsonfiles/customData.json';
import JobData from './jobData'


export class JobList extends React.Component{
	
		constructor(props){
			super(props);
			this.state={numb:0,modal:false}
			this.handleClick = this.handleClick.bind(this);
			this.toggle=this.toggle.bind(this);
		}
		
		handleClick(){
			this.toggle()
		}
		
		
		toggle() {
			this.setState({
			  modal: !this.state.modal
			});
		  }
		  
		update(i){
			this.setState({
				numb:i	
			});
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
								<td onClick={()=>{this.handleClick();this.update(job.id)}}>{job.Title}</td>
								<JobData tog={this.state.modal} closer={this.handleClick} id={this.state.numb} />
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