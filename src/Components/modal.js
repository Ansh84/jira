import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBook, faExclamationCircle, faTrashCan, faXmark, faUpLong ,faDownLong} from '@fortawesome/free-solid-svg-icons'
import { users } from '../Project/data/issueData';
import { updateIssueData } from '../Project/Store/kanbanSlice';
import {Modal} from 'react-bootstrap';
import 'react-quill/dist/quill.snow.css';
import './modal.css'

const ModalComponent = (props) => {

    const overlay = document.getElementById('overlays')

    const dispatch = useDispatch()

    const issueType = props.issueData?.type
    const issueStatus = props.issueData?.status

    const changeValue = ($event, type) => {
        console.log($event.target?.value);
        if(type === 'title'){
            dispatch(updateIssueData({id: props.issueData?.id, value: $event.target?.value, type: type}))
        }else if($event.target?.innerText !== undefined){
            dispatch(updateIssueData({id: props.issueData?.id, value: $event.target?.innerText, type: type}))
        }
        if(type === 'description'){
            dispatch(updateIssueData({id: props.issueData?.id, value: $event, type: type}))
        }
    }
    
    return(
        ReactDOM.createPortal(
            <Modal show={props.show} size="xl" onHide={props.close} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header >
                <div className='issue-type'>
                <Dropdown onClick={($event) => changeValue($event, 'type')}>
                    <Dropdown.Toggle variant={issueType === 'TASK' ? 'outline-primary' : (issueType === 'STORY' ? 'outline-success' : 'outline-danger')} id="dropdown-basic">
                        {issueType?.toUpperCase()}-{props.issueData?.id}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><FontAwesomeIcon icon={faCheckSquare} color='deepskyblue'/>TASK</Dropdown.Item>
                        <Dropdown.Item><FontAwesomeIcon icon={faBook} color='green' />STORY</Dropdown.Item>
                        <Dropdown.Item ><FontAwesomeIcon icon={faExclamationCircle} color='red' />BUG</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className='issue-actions'>
                    <Button variant="outline-light"><FontAwesomeIcon icon={faTrashCan} color='black' /></Button>
                    <Button variant="outline-light" onClick={props.close}><FontAwesomeIcon icon={faXmark} color='black' /></Button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className='body'>
                    <div className="body-description">
                        <textarea type="text" placeholder='Short Summary' onBlur={($event) => changeValue($event, 'title')}>{props.issueData?.title}</textarea>
                        <label>Description</label>
                        <div className='quill'>
                            <ReactQuill theme="snow" value={props.issueData?.description} onChange={($event) => changeValue($event, 'description')}/>
                        </div>
                    </div>
                    <div className="body-right-content">
                        <label>STATUS</label>
                        <DropdownButton variant={issueStatus === 'inprogress' ? 'outline-primary' : (issueStatus === 'DONE' ? 'outline-success' : 'outline-secondary')} title={issueStatus?.toUpperCase()} onClick={($event) => changeValue($event, 'status')}>
                            <Dropdown.Item>DONE</Dropdown.Item>
                            <Dropdown.Item>BACKLOG</Dropdown.Item>
                            <Dropdown.Item>SELECTED FOR DEVELOPMENT</Dropdown.Item>
                            <Dropdown.Item>IN PROGRESS</Dropdown.Item>
                        </DropdownButton>
                        <label>ASSIGNEES</label>
                        <DropdownButton variant="outline-secondary" title={users[0].name} onClick={($event) => changeValue($event, 'assignee')}>
                            {users.map((user) => 
                               <Dropdown.Item>
                                   <img src={user.avatarUrl} width="10%" height="10%"/>
                                   <label>{user.name}</label>
                               </Dropdown.Item>
                            )}
                        </DropdownButton>
                        <label>REPORTER</label>
                        <DropdownButton variant="outline-secondary" title={users[1].name} onClick={($event) => changeValue($event, 'reporter')}>
                            {users.map((user) => 
                               <Dropdown.Item>
                                   <img src={user.avatarUrl} width="10%" height="10%"/>
                                   <label>{user.name}</label>
                               </Dropdown.Item>
                            )}
                        </DropdownButton>
                        <label>PRIORITY</label>
                        <DropdownButton variant={props.issueData?.priority > 2 ? 'outline-danger' : 'outline-success'} title="Lowest" onClick={($event) => changeValue($event, 'priority')}>
                            <Dropdown.Item><FontAwesomeIcon icon={faUpLong} color='red'/>Highest</Dropdown.Item>
                            <Dropdown.Item><FontAwesomeIcon icon={faUpLong} color='red'/>High</Dropdown.Item>
                            <Dropdown.Item><FontAwesomeIcon icon={faUpLong} color='orange'/>Medium</Dropdown.Item>
                            <Dropdown.Item><FontAwesomeIcon icon={faDownLong} color='green'/>Low</Dropdown.Item>
                            <Dropdown.Item><FontAwesomeIcon icon={faDownLong} color='green'/>Lowest</Dropdown.Item>
                        </DropdownButton>
                        <label>ORIGINAL ESTIMATE (HOURS)</label>
                        <input type="text" value="12" disabled />
                    </div>
                </div>
            </Modal.Body>
            </Modal>
            , overlay
        )
    )
}

export default ModalComponent;

