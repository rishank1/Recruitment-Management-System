import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import data from '../jsonfiles/customData.json'

class JobData extends React.Component{

	render(){
			const id=this.props.id;
			return(
				<Modal isOpen={this.props.tog}>
						<ModalHeader>{data[id]["Title"]}</ModalHeader>
						<ModalBody>
							{data[id]["popped"]}
						</ModalBody>
						<ModalFooter>
							<Button color="primary"  onClick={this.props.closer} >Close</Button>
						</ModalFooter>
				</Modal>
				
		);
		
	}
}

export default JobData;