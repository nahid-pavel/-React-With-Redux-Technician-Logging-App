import { GET_LOGS,ADD_LOG,DELETE_LOG,SET_LOADING,ERROR_LOG,SET_CURRENT,CLEAR_CURRENT,UPDATE_LOG,SEARCH_LOGS} from '../actions/types';
const initialState={
     logs:null,
     current:null,
     loading:true,
     error:null,
     filteredLogs:null,
     newLogs:null
     

}

const logReducer= (state=initialState,action)=>{
     switch(action.type){
        
       
        case GET_LOGS:
          console.log('from get_logs reducer')
          return{
               ...state,
               logs:action.payload,
               newLogs:action.payload,
               loading:false
          }
         case ADD_LOG:
              console.log('addcurrent reducer')
              return{
                   ...state,
                   logs:[...state.logs,action.payload],
                   newLogs:[...state.newLogs,action.payload],
                   loading:false
              }
         case SET_CURRENT:
              console.log('setcurrent reducer')
               return{
                    ...state,
                    current:action.payload
               }
        case CLEAR_CURRENT:
               return{
                   ...state,
                   current: null
               }
         case UPDATE_LOG:
               return{
                  ...state,
                 logs: state.logs.map(log=>log.id ===action.payload.id ? action.payload: log)
               }
         case DELETE_LOG:
               return{
                    ...state,
                    logs: state.logs.filter(log=> log.id !== action.payload)
                    
               }
         case SET_LOADING:
           return{
               ...state,
              loading:true
               
          }
         
         case ERROR_LOG:
          return{
               ...state,
               error:action.payload
             }
         case SEARCH_LOGS:{
              
              let filteredLogs = state.logs.filter(log=> 
                    log.title.toLowerCase().includes(action.payload.toLowerCase())
                    
               )
               
              
              return{
                   ...state,
                  logs: action.payload===''? state.newLogs: filteredLogs
                   
              }
              
         }
        
         default:
            console.log(action.type)
            return state;
     }
}

export default logReducer;