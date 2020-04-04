import {GET_TECHNICIANS,ADD_TECHNICIAN,UPDATE_TECHNICIANS,DELETE_TECHNICIAN,ERROR_TECHNICIANS } from '../actions/types';

const initialState={
    technicians: null,
    loading:true,
    error:null
}

const techReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_TECHNICIANS:
            return{
               ...state,
               technicians: action.payload,
               loading:false
            }
        case ADD_TECHNICIAN:
                return{
                   ...state,
                   technicians: [...state.technicians,action.payload],
                   
                }
        case DELETE_TECHNICIAN:
                return{
                     ...state,
                    technicians: state.technicians.filter(technician=> technician.id !== action.payload),
                    
                }
        case ERROR_TECHNICIANS:
                return{
                   ...state,
                   error:action.payload
               }
         default:
            return state;
    }
}

export default techReducer;