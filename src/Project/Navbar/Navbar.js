import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faBlackboard, faProjectDiagram, faTruckMoving, faHardDrive, faPager, faLineChart } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {

    return (
        <div className="nav-bar">
            <div className='svg'></div>
            <NavLink className={({isActive})=> isActive ? 'activedLink' : 'navLink'} to='/board'>
                <FontAwesomeIcon size="lg" icon={faBlackboard} />
                Kanban Board
            </NavLink>
            <NavLink to='/editProject' className={({isActive})=> isActive ? 'activedLink' : 'navLink'}>
                <FontAwesomeIcon size="lg" icon={faProjectDiagram} />
                Project Settings
            </NavLink>
            <hr />
            <div className='not-implemented' title='Not Implemented'>
                <FontAwesomeIcon size="lg" icon={faTruckMoving}/>
                Releases
            </div>
            <div className='not-implemented' title='Not Implemented'>
                <FontAwesomeIcon size="lg" icon={faHardDrive} />
                Issues and Filter
            </div>
            <div className='not-implemented' title='Not Implemented'>
                <FontAwesomeIcon size="lg" icon={faPager} />
                Pages
            </div>
            <div className='not-implemented' title='Not Implemented'>
                <FontAwesomeIcon size="lg" icon={faLineChart} />
                Reports
            </div>
            <div className='not-implemented' title='Not Implemented'>
                <FontAwesomeIcon size="lg" icon={faCube} />
                Components
            </div>
        </div>
    )
}

export default Navbar