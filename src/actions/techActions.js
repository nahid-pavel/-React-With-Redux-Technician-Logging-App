import {GET_TECHNICIANS,ADD_TECHNICIAN,UPDATE_TECHNICIANS,DELETE_TECHNICIAN,ERROR_TECHNICIANS } from './types';

export const getTechnicians=()=>async dispatch=>{
    try {
        console.log('from gettechncians')

        const res = await fetch('https://technician-logs.firebaseio.com/technicians.json');
        let data = await res.json();
        let technicians;
        if( data!==null){
            technicians = Object.entries(data)
            .map(d=>{
            return {
                        id:d[0],
                        ...d[1]
                    }
             })
             
         

        }else{
            technicians = []
        }

        console.log(technicians)
       
       
        dispatch({
            type: GET_TECHNICIANS,
            payload: technicians
        })
        
    } catch (error) {
        console.log(error.message,'from error')
        dispatch({
            type: ERROR_TECHNICIANS,
            payload: error.message
        })
        
    }   
    

}

export const addTechnician=(technician)=>async dispatch=>{
    try {
        await fetch('https://technician-logs.firebaseio.com/technicians.json',{
            method:'POST',
            body:JSON.stringify(technician),
            headers:{
                'Content-Type':'Application/JSON'
            }

        });
          
        dispatch({
            type: ADD_TECHNICIAN,
            payload: technician
        })
      
        
    } catch (error) {
        console.log(error,'from error')
        dispatch({
            type: ERROR_TECHNICIANS,
            payload: error.message
        })
        
    }    
    

}

export const deleteTechnician=(id)=>async dispatch=>{
    console.log('from delete',id)
    
    try {
        
        await fetch(`https://technician-logs.firebaseio.com/technicians/${id}.json`,{
            method:'DELETE',
             headers:{
                'Content-Type':'Application/JSON'
            }

        });
       
        dispatch({
            type: DELETE_TECHNICIAN,
            payload: id
            
        })
      
        
    } catch (error) {
        console.log(error,'from error')
        dispatch({
            type: ERROR_TECHNICIANS,
            payload: error.response.data
        })
        
    }   
    

}