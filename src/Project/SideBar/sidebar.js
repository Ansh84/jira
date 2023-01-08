import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import './sidebar.css'


function Sidebar() {


    return (
        <div className="side-bar">
            <div className='container'>
                <FontAwesomeIcon size="lg" icon={faSearch} />
                Search Issues
            </div>
            <div className='container'>
                <FontAwesomeIcon size="xl" icon={faPlus} />
                Create Issue
            </div>
            <div className='question'>
                <div className='question-content'>
                    <FontAwesomeIcon size='2xl' icon={faQuestionCircle}  />
                    About
                </div>
            </div>
        </div>
    )
}

export default Sidebar