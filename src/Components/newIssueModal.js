import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import {Form, Modal} from 'react-bootstrap';
import 'react-quill/dist/quill.snow.css';
import './modal.css'
import Select from 'react-select';
import { users } from '../Project/data/issueData';
import { useDispatch } from 'react-redux';
import { addNewIssue } from '../Project/Store/kanbanSlice';

const Initial_State = {
    type: '',
    reporter: '',
    assignee: '',
    priority: '',
    description: '',
    title: '',
    status: 'Backlog',
    id: Math.floor(Math.random()*1000)
}


const NewIssueModal = (props) => {

    const [DropdownValues, setDropdownValues] = useState(Initial_State)
    const overlay = document.getElementById('overlays')
    const arr = []

    const dispatch = useDispatch()
    const typeOptions = [
        { value: 'Task', label: 'Task' },
        { value: 'Bug', label: 'Bug' },
        { value: 'Story', label: 'Story'},
    ];    
    
    useEffect(() => {
        users.forEach((user) => {
            arr.push({value: user.name, label:user.name})
        })

    })

    const priority = [
        { value: 'Highest', label: 'Highest' },
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium'},
        { value: 'Low', label: 'Low'},
        { value: 'Lowest', label: 'Lowest'}
    ];    

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        console.log(event.currentTarget);
        dispatch(addNewIssue(DropdownValues))
        setDropdownValues(Initial_State)
        props.close()
      };

    return(
        ReactDOM.createPortal(
            <Modal show={props.show} size="lg" onHide={props.close} aria-labelledby="contained-modal-title-vcenter" centered>
            <Form onSubmit={handleSubmit}>
            <Modal.Header >
                <h4>Create Issue</h4>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="m-3" controlId="issueType" >
                    <Form.Label>Issue Type</Form.Label>
                    <Select
                        options={typeOptions}
                        value={{value: DropdownValues.type, label: DropdownValues.type }}
                        onChange = {(event) => setDropdownValues({...DropdownValues, type: event.label})}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="title">
                    <Form.Label>Short Summary</Form.Label>
                    <Form.Control type="text" placeholder="" required   onChange = {(event) => setDropdownValues({...DropdownValues, title: event.target?.value})}/>
                    <Form.Text className="text-muted">
                        Concisely summarize the issue in one or two sentences.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="m-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <ReactQuill theme="snow" onChange={(event) => setDropdownValues({...DropdownValues, description: event})}/>
                </Form.Group>
                <Form.Group className="m-3" controlId="reporter">
                    <Form.Label>Reporter</Form.Label>
                    <Select
                        options={arr}
                        value={{value: DropdownValues.reporter, label: DropdownValues.reporter }}
                        onChange = {(event) => setDropdownValues({...DropdownValues, reporter: event.label})}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="assignee">
                    <Form.Label>Assignees</Form.Label>
                    <Select
                        options={arr}
                        value={{value: DropdownValues.assignee, label: DropdownValues.assignee }}
                        onChange = {(event) => setDropdownValues({...DropdownValues, assignee: event.label})}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="priorty">
                    <Form.Label>Priority</Form.Label>
                    <Select
                        options={priority}
                        value={{value: DropdownValues.priority, label: DropdownValues.priority }}
                        onChange = {(event) => setDropdownValues({...DropdownValues, priority: event.label})}
                    />
                    <Form.Text className="text-muted">
                        Priority in relation to other issues.
                    </Form.Text>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' variant="primary">Save Changes</Button>
                <Button className='close-button' onClick={props.close} variant="outline-light">Close</Button>
            </Modal.Footer>
            </Form>
            </Modal>
            , overlay
        )
    )
}

export default NewIssueModal;

