import React,{useState, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import {addLog} from '../../actions/logActions';
import TechOptions from '../tech/TechOptions';


 const AddLogModal = ({addLog}) => {
     
     useEffect(()=>{
        M.AutoInit();
        
       
     },[])

     const [title,setTitle]  = useState('');
     const [attention,setAttention]=useState(false);
     const [author,setAuthor] =useState('')

     
     const onSubmit= async()=>{
        if(title==='' ||author ===''){
            M.toast({html:'Please enter message and technicians'})
        }else{
         const data ={
            tech_id:Date.now().toString(),
            title,
            author,
            attention
         }
         addLog(data)
         M.toast({html:'Log added'})
         setTitle('')
         setAuthor('')
         setAttention(false)
        }
        
        
        

     }
    
    return (
        <div id="add_log_modal" className="modal" style={modalStyle}>
           <div clasName="modal-content">
              <h4 style={{textAlign:'center'}}>Enter System Log</h4>
              <div clasName="row">
                <div class="input-field" style={{'margin-left':'10px','margin-right':'10px'}}>
                        <input 
                           type="text"
                           name="title"
                           value={title}
                           onChange={(e)=>setTitle(e.target.value)}/>
                        <label htmlFor="title" className="active">Log Message</label>
                </div>
                </div>
                <div clasName="row">
                  <select name="tech" value={author} className='browser-default' onChange={(e)=> setAuthor(e.target.value)}>
                           <option value='' disabled>Select Technicians</option>
                           <TechOptions />
                           
                             
                           })}
                  </select>
                </div>
                <div clasName="row">
                    <label>
                     <input type="checkbox" 
                            className="filled-in"
                            checked={attention}
                            value={attention}
                            onChange={(e)=>setAttention(!attention)}
                     />
                     <span>Need Attention</span>
                     </label>
                  
                </div>
           </div>
            <div className="modal-footer">
               <button onClick={onSubmit} className="modal-close waves-effect waves-green btn">Enter</button>
            </div>
       </div>
    )
}

const modalStyle={
    width:'75%',
    height:'75%'
}

export default connect(null, {addLog})(AddLogModal);
