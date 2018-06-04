import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class AddResumes extends React.Component{
		render(){
				return (
				<div>
					<Form>
						<FormGroup>
						  <Label for="exampleEmail">Name</Label>
						  <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
						</FormGroup>
						<FormGroup>
						  <Label for="exampleEmail">Email</Label>
						  <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
						</FormGroup>
						<FormGroup>
						  <Label for="exampleText">Skills</Label>
						  <Input type="text" name="email" id="exampleText" placeholder="Skills" />
						</FormGroup>
						<FormGroup>
						  <Label for="exampleFile">File</Label>
						  <Input type="file" name="file" id="exampleFile" />
						  <FormText color="muted">
							Upload The Resume in PDF Format only
						  </FormText>
						</FormGroup>
						<Button>Submit</Button>
					</Form>
				</div>
		);
		}
}