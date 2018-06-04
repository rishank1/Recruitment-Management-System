import React from 'react'
import data from '../jsonfiles/customData.json'

export class JobData extends React.Component{
	render(){
		return(
		<div>{data[0]["id"]}</div>
	);
	}
}
