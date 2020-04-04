import React,{useState, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {addTechnician} from '../../actions/techActions';
import {connect} from 'react-redux';
 

 const AddTechModal = ({addTechnician}) => {
     
     
     const [firstName,setFirstName]  = useState('');
     const [lastName,setLastName]=useState('');
     

     
     const onSubmit= async()=>{
        if(firstName ==='' && lastName===''){
           M.toast({html:'Please enter firstname and lastname'})
        }else{
           let data={
              first_name:firstName,
              last_name:lastName
           }
           addTechnician(data);
           M.toast({html: `${firstName} ${lastName} has been added`})

        }
        

     }
    
    return (
        <div id="tech-modal" className="modal">
           <div clasName="modal-content">
              <h4 style={{textAlign:'center'}}>Add Techncians</h4>
              <div clasName="row">
                 <div class="input-field" style={{'margin-left':'10px','margin-right':'10px'}}>
                        <input 
                           type="text"
                           name="first_name"
                           value={firstName}
                           onChange={(e)=>setFirstName(e.target.value)}/>
                        <label htmlFor="firstName" className="active">Enter First Name</label>
                 </div>
                </div>
                <div clasName="row">
                  <div class="input-field" style={{'margin-left':'10px','margin-right':'10px'}}>
                           <input 
                              type="text"
                              name="last_name"
                              value={lastName}
                              onChange={(e)=>setLastName(e.target.value)}/>
                           <label htmlFor="lastName" className="active">Enter Last Name</label>
                  </div>
                </div>
                
           </div>
            <div className="modal-footer">
               <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn">Enter</a>
            </div>
       </div>
    )
}



export default connect(null,{addTechnician})(AddTechModal);
