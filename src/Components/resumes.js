import React from 'react'
import { Table } from 'reactstrap';

export class Resumes extends React.Component{
		render(){
				return (
					<div>
						<Table bordered>
						<thead>
							<th>Name</th>
							<th>Main Skills</th>
							<th>Resume</th>
						</thead>
						<tr>
							<td>Luffy</td>
							<td>Captain</td>
							<td>File1</td>
						</tr>
						<tr>
							<td>Zoro</td>
							<td>Swordsman</td>
							<td>File2</td>
						</tr>
						<tr>
							<td>Nami</td>
							<td>Navigator</td>
							<td>File3</td>
						</tr>
						</Table>
					</div>
		);
		}
}