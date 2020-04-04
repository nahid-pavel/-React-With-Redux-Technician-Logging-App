import React,{useState,useEffect} from 'react';
import LogItems from './LogItems';
import PreLoader from '../layouts/PreLoader';
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logActions';
import PropTypes from 'prop-types';


const Logs = ({logs,loading,getLogs,filteredLogs}) => {
   
    useEffect(()=>{
      
       getLogs();
      

       
       // eslint-disable-next-line
    },[])
    

    if( loading && logs===null){
        return <PreLoader />
    }
   
    
    return (
        
        
        <>
           <ul class="collection with-header">
                <li class="collection-header">
                   <h4 className="center">System Logs</h4>
                </li>
                {!loading && logs.length ===0 ?<p className='center'>There is No Logs</p>:
                  logs.map(log=>{
                    return(
                      <LogItems  log={log}/>
                    )
                      
                  })
                
                }
              </ul>
                  
              
            
         
            
        </>
    );
    
    
};

const mapStateToProps= (state)=>{
  return{
    logs: state.log.logs,
    loading: state.log.loading,
    filteredLogs:state.log.filteredLogs
  }
}


export default connect(mapStateToProps,{getLogs})(Logs);
