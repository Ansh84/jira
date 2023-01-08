import { useEffect, useMemo, useState } from 'react'
import { issueData, users } from '../data/issueData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBook, faExclamationCircle, faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'
import './issueList.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { sortDragData } from '../Store/kanbanSlice'
import ModalComponent from '../../Components/modal'
import axios from 'axios'

const IssueStatusCopy = {
    BACKLOG: 'Backlog',
    SELECTED: 'Selected for development',
    INPROGRESS: 'In progress',
    DONE: 'Done',
  };


function IssueList(){
    const [modelData, setModalData] = useState({id: '', isModelOpen: false})
    const dispatch = useDispatch()

    const listOfIssues = useSelector((state) => {
        console.log(state.kanban);
        return state.kanban.data.filter((issue) => issue.title.toLowerCase().includes(state.kanban.searchTerm.toLowerCase()))
    })
    
    const renderIssueUsers = (issueList) => {
        if(!issueList.userIds){return}
        return (
            users.map((user) =>
                (issueList.userIds.includes(user.id) && <img src={user.avatarUrl} alt='' width="20%" height="80%"/>)
            )
        )
    }

    const handleOnDragEnd = (result) =>{
        dispatch(sortDragData({id:Number(result.draggableId), status: result.destination.droppableId}))
    }

    return (
        <>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                        <div className="issue-list">    
                            {Object.keys(IssueStatusCopy).map((issue) =>
                                <Droppable droppableId={`${issue}`}>
                                    {(provided) => (
                                        <div className="dnd-box" key={issue} {...provided.droppableProps} ref={provided.innerRef}>
                                            <h5>{IssueStatusCopy[issue]}</h5>
                                            <hr />
                                            {
                                                listOfIssues.map((issueList, index) => 
                                                    ((issueList.status.toLowerCase()).includes(issue.toLowerCase()) && 
                                                    <Draggable key={issueList.id} draggableId={issueList.id.toString()} index={Number(issueList.priority)}>
                                                        {(provided) => (
                                                            <div className='card' key={issueList.id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}  onClick={()=> {setModalData({data: issueList, isModelOpen: true})}}>
                                                                <h5>{issueList.title}</h5>
                                                                <div className='description'>
                                                                    <div className='status'>
                                                                        {issueList.type?.toLowerCase() === 'task'&&<FontAwesomeIcon icon={faCheckSquare} color='deepskyblue' />}
                                                                        {issueList.type?.toLowerCase() === 'story'&&<FontAwesomeIcon icon={faBook} color='green' />}
                                                                        {issueList.type?.toLowerCase() === 'bug'&&<FontAwesomeIcon icon={faExclamationCircle} color='red' />}
                                                                        {issueList.priority > 2 ? <FontAwesomeIcon icon={faUpLong} color='red' /> : <FontAwesomeIcon icon={faDownLong} color='green' />  }
                                                                    </div>
                                                                    <div className='users-icons'>
                                                                        {renderIssueUsers(issueList)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                    )
                                                )
                                            }
                                        {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            )}
                        </div>
            </DragDropContext>
            {<ModalComponent issueData={modelData.data} show={modelData.isModelOpen} close={()=> {setModalData({...modelData, isModelOpen: false})}}/>}
        </>
    )
}

export default IssueList