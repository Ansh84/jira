import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { users } from "../data/issueData"
import { changeSearchTerm } from "../Store/kanbanSlice"
import IssueList from "./issueList"
import { Button, ButtonGroup } from "react-bootstrap"
import './kanban.css'
import NewIssueModal from "../../Components/newIssueModal"

function KanbanBoard() {
    
    const [filterValue, setFilteredValue] = useState("")
    const [isModelOpen, setModalState] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {

        const timeout = setTimeout(() => {
            dispatch(changeSearchTerm(filterValue))
        }, 300)

        return () => {
            clearTimeout(timeout)
        }
        
    }, [filterValue])

    

    return (
        <div className="kanbanBoard">
            <div className="kanban-filters">
                <div className="breadcrumb">
                    Hello from Kanban Board
                </div>
                <h1> Kanban Board</h1>
                <div className="issue-filter">
                    <div className="filters">
                        <input className='search-issue' placeholder="Search Issue" type="search" value={filterValue} onChange={(event) => {setFilteredValue(event.target.value)}} />
                        <Button variant="outline-light" className="filter-button" onClick={(event) => {setFilteredValue(event.target.value)}}>Only My Issues</Button>
                        <Button variant="outline-light" className="filter-button" >Recently Updated</Button>
                    </div>
                    <div className="create-issue">
                        <Button variant="primary" onClick={() => {setModalState(true)}}>Create New Issue</Button>
                    </div>
                </div>
            </div>
            <IssueList />
            
            <NewIssueModal show={isModelOpen}  close={() => setModalState(false)}    />
        </div>
    )
}

export default KanbanBoard