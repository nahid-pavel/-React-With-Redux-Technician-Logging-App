import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTechnician} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';



const TechListItems = ({tech,deleteTechnician}) => {
   
    const onDelete =(id)=>{
        console.log('from techitem',tech)
        deleteTechnician(id);
        M.toast({html:`${tech.first_name} ${tech.last_name} has been deleted`})

    }
    return(
                
        <li className="collection-item">
          <div>
            {tech.id} {tech.first_name} {tech.last_name}
             <a href="!#"  className="secondary-content">
                <i onClick={()=>onDelete(tech.id)} className="material-icons grey-text">delete</i>
             </a>
          </div>
        </li>
  )
}

TechListItems.propTypes = {
   
    tech: PropTypes.object.isRequired

}
export default connect(null,{deleteTechnician})(TechListItems);
