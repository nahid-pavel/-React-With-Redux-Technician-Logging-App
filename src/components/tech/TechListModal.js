import React,{useState, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechListItems from './TechListItems';
import {connect} from 'react-redux';
import {getTechnicians} from '../../actions/techActions';



 const TechListModal = ({techs,loading,getTechnicians}) => {
     
     useEffect(()=>{
        
        M.AutoInit();
        getTechnicians();
       

     },[])

     return (
        <div id="tech-list-modal" className="modal" >
          <div className="modal-content">
             <h4>Technicians List</h4>
             <ul className="collection">
                {!loading && techs.map(tech=>{
                    return(
                        <TechListItems key={tech.id} tech={tech}   />
                    )
                   
                })}
              </ul>
            </div>
       </div>
    )
}

const mapStateToProps= state=>{
    return{
        techs:state.tech.technicians,
        loading: state.tech.loading
    }
}


export default connect(mapStateToProps,{getTechnicians})(TechListModal);

