import React,{useState, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import { updateLog } from '../../actions/logActions';
import TechOptions from '../tech/TechOptions';


 const EditLogModal = ({current,updateLog}) => {
      
     const [title,setTitle]  = useState('');
     const [attention,setAttention]=useState(false);
     const [authors,setAuthors] =useState([])
     const [author,setAuthor] =useState('')

     useEffect(()=>{
       getTechnicians();
       if(current){
          console.log(current)
          setTitle(current.title);
          setAttention(current.attention);
          setAuthor(current.author)
          
        }
       
     },[current])
     const getTechnicians = async ()=>{
      const res = await fetch('https://technician-logs.firebaseio.com/technicians.json');
      const data = Object.entries(await res.json()).map((Object)=>{
          return{
             
             ...Object[1]
             
          }
      })
      console.log(data)

       data.map(d=>{
          setAuthors(data)
       })
      
   }

    const onSubmit= async()=>{
        if(title==='' ||author ===''){
            M.toast({html:'Please enter message and technicians'})
        }else{
         const data ={
            id:current.id,
            tech_id:current.tech_id,
            title,
            author,
            attention
         }
         updateLog(data);
         setTitle('')
         setAuthor('')
         setAttention(false)
        }
        
        
        

     }
    
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
           <div className="modal-content">
              <h4 style={{textAlign:'center'}}>Edit System Log</h4>
              <div clasName="row">
                <div class="input-field" style={{'margin-left':'10px','margin-right':'10px'}}>
                        <input 
                           type="text"
                           name="title"
                           value={title}
                           onChange={(e)=>setTitle(e.target.value)}/>
                       
                </div>
                </div>
                <div className="row">
                  <select name="tech" value={author} className='browser-default' onChange={(e)=> setAuthor(e.target.value)}>
                           <option value='' disabled>Select Technicians</option>
                           <TechOptions />
                  </select>
                </div>
                <div className="row">
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
               <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn">Enter</a>
            </div>
       </div>
    )
}

const modalStyle={
    width:'75%',
    height:'75%'
}
function mapStateToProps(state){
   return{
      current: state.log.current
   }
}


export default connect(mapStateToProps,{updateLog})(EditLogModal);
