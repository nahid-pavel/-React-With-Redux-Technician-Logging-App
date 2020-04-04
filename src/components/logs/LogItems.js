import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import {deleteLog,setCurrent} from '../../actions/logActions';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';


const LogItems =({log,deleteLog,setCurrent}) => {
    
    const onDelete =()=>{
        deleteLog(log.id);
        M.toast({html:'Logs Deleted'})
    }
    return (
        <li className="collection-item" >
            <div>
                <a href="#edit-log-modal" 
                   className={`modal-trigger ${log.attention?'red-text':'blue-text'}`}
                   onClick={()=>setCurrent(log)}>
                {log.title}</a>
                <br />
                <span className="grey-text">
                   <span className="black-text">ID #{log.tech_id} </span>last updated by{' '}
                   <span className="black-text">{log.author}</span> on <Moment format='MMMM Do YYYY'></Moment>
                </span>
                <a href="#" onClick={onDelete}className="secondary-content">
                   <i className="material-icons grey-text">delete</i>
                </a>
            </div>

        </li>
    )
}

LogItems.propTypes = {

}

export default connect(null,{deleteLog,setCurrent})(LogItems);
