import React from 'react';
import TechListItems from './TechListItems';
import {connect} from 'react-redux';
import {getTechnicians} from '../../actions/techActions';

 const TechOptions = ({technicians}) => {
    return (
        <>
          {technicians !==null && technicians.map(t=>{
            const tech_name=`${t.first_name}  ${t.last_name}`;
            return(
             <option value={tech_name}>{tech_name}</option>
            )
          })}
        </>
 
        
    )
}

const mapStateToProps=state=>{
    return{
        technicians: state.tech.technicians
    }
}

export default connect(mapStateToProps,{getTechnicians})(TechOptions);


