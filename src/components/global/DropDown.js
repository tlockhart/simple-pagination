import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useRef} from "react";

const actionContext = React.createContext()
function DropDown (props) {
    const actionsRef = useRef(null)
    const handleActionsMenu = () => {
        if(actionsRef.current.classList.contains('show')){
            actionsRef.current.classList.remove('show')
        }  else{
            actionsRef.current.classList.add('show')
        }
    }

    return (
        <div className={'dropdown-container'} style={{position: 'relative'}}>
            <button type="button" className="btn btn-secondary my-2 btn-icon-text" onClick={handleActionsMenu}>
                Manage
                <FontAwesomeIcon className="mg-l-4" icon="fa-solid fa-chevron-down" />
            </button>
            <div ref={actionsRef} className="dropdown-menu animated-menu actions-menu">
                <ul style={{textAlign: 'left'}} onClick={handleActionsMenu}>
                        {props.children}
                </ul>
            </div>
        </div>
    )
}

export default DropDown