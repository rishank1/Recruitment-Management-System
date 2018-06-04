import React from 'react';
import {JobList} from './Components/joblist'
import {Resumes} from './Components/resumes'
import {AddResumes} from './Components/addResumes'
import './App.css'
/*
  Here is where we're going to put our front-end logic
  Before beginning delete the render function below (After you have already gotten hello world in the browser)
*/

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state={defaultPage:<JobList/>}
		this.changeStateToJoblist=this.changeStateToJoblist.bind(this);
		this.changeStateToResumes=this.changeStateToResumes.bind(this);
		this.changeStateToAddResumes=this.changeStateToAddResumes.bind(this);
	}
	
	changeStateToJoblist(){
		this.setState({defaultPage:<JobList/>})
	}
	
	changeStateToResumes(){
		this.setState({defaultPage:<Resumes/>})	
	}
	
	changeStateToAddResumes(){
		this.setState({defaultPage:<AddResumes/>})
	}
	
	render(){
		return(
		<div>
			<div
				 className="App-header" >Recruitment Management System
			</div>
			<div>
					<div class="setter" onClick={this.changeStateToJoblist}>JobList</div>
					<div class="setter" onClick={this.changeStateToResumes}>Resumes</div>
					<div class="setter" onClick={this.changeStateToAddResumes}>AddResumes</div><br/><br/>
					<div>{this.state.defaultPage}</div>
			</div>
		</div>
	);
	}
}


export default App;
