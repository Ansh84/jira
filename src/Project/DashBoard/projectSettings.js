import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import { project } from '../data/issueData';
import './projectSettings.css'



const options = [
    { value: 'software', label: 'Software' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'business', label: 'Business'},
  ];


function ProjectSetting () {

    const [selectedOption, setSelectedOption] = useState({value: project.category, label: project.category})

    console.log(selectedOption)

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    }
    const handleSubmit = (event) => {
        event.preventDefault() 
        console.log(event)
        const formData = new FormData(event.target)
        console.log(formData)
    }

    return (
        <Form className="project-settings">
            <Form.Label><h2>Project Details</h2></Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Project Name" value={project.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" placeholder="" value={project.url} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Description</Form.Label>
                <ReactQuill theme="snow" value={project.description}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Project Category</Form.Label>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save Changes
            </Button>
        </Form>
    )
}

export default ProjectSetting