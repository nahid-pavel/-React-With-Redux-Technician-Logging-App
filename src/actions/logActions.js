import { GET_LOGS,ADD_LOG,DELETE_LOG,SET_LOADING,ERROR_LOG,SET_CURRENT,CLEAR_CURRENT,UPDATE_LOG,SEARCH_LOGS} from '../actions/types';

export const getLogs=()=>async dispatch=>{
    try {
        
        const res = await fetch('https://technician-logs.firebaseio.com/logs.json');
        let data = await res.json();
        let logs;
        if( data!==null){
            logs = Object.entries(data)
            .map(d=>{
            return {
                    
                        id:d[0],
                        ...d[1]
                    
                    
                    
                }
          })
         

        }else{
            logs = []
        }
       
       
        dispatch({
            type: GET_LOGS,
            payload: logs
        })
        
    } catch (error) {
        console.log(error.message,'from error')
        dispatch({
            type: ERROR_LOG,
            payload: error.message
        })
        
    }   
    

}
export const addLog=(log)=>async dispatch=>{
    try {
        await fetch('https://technician-logs.firebaseio.com/logs.json',{
            method:'POST',
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'Application/JSON'
            }

        });
          
        dispatch({
            type: ADD_LOG,
            payload: log
        })
      
        
    } catch (error) {
        console.log(error,'from error')
        dispatch({
            type: ERROR_LOG,
            payload: error.message
        })
        
    }   
    

}
export const updateLog=(log)=>async dispatch=>{
    try {
        await fetch(`https://technician-logs.firebaseio.com/logs/${log.id}.json`,{
            method:'PUT',
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'Application/JSON'
            }

        });
          
        dispatch({
            type: UPDATE_LOG,
            payload: log
        })
      
        
    } catch (error) {
        console.log(error,'from error')
        dispatch({
            type: ERROR_LOG,
            payload: error.message
        })
        
    }   
    

}

export const deleteLog=(id)=>async dispatch=>{
    try {
        await fetch(`https://technician-logs.firebaseio.com/logs/${id}.json`,{
            method:'DELETE',
             headers:{
                'Content-Type':'Application/JSON'
            }

        });
       
        dispatch({
            type: DELETE_LOG,
            payload: id
            
        })
      
        
    } catch (error) {
        console.log(error,'from error')
        dispatch({
            type: ERROR_LOG,
            payload: error.response.data
        })
        
    }   
    

}

export const setCurrent =(log)=>{
    console.log('from setcurrent')
    return{
        type: SET_CURRENT,
        payload:log
    }
}

export const clearCurrent =(log)=>{
    return{
        type: CLEAR_CURRENT
        
    }
}

export const searchLogs=(text)=>{
    return{
        type: SEARCH_LOGS,
        payload: text
          
       } 
    
    
}
 const setLoading=()=>{
    console.log('from setLoading')
    return{
        type: SET_LOADING
    };
    
};

