import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import BreadcrumbComponent from '../../Components/breakcrumb';
import { project } from '../data/issueData';
import { updateProjectName } from '../Store/kanbanSlice';
import './projectSettings.css'



const options = [
    { value: 'software', label: 'Software' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'business', label: 'Business'},
  ];


function ProjectSetting () {
    const [selectedOption, setSelectedOption] = useState({value: project.category, label: project.category})
    const [projectName, setprojectName] = useState(project.name)
    const dispatch = useDispatch()

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        project.name = projectName
        dispatch(updateProjectName(projectName))

    }

    return (
        <Form className="project-settings" onSubmit={handleSubmit}>
            <BreadcrumbComponent page="Project Details" />
            <Form.Label><h2>Project Details</h2></Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Project Name" defaultValue={projectName} onChange={(event) => setprojectName(event.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" placeholder="" defaultValue={project.url} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Description</Form.Label>
                <ReactQuill theme="snow" defaultValue={project.description}/>
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