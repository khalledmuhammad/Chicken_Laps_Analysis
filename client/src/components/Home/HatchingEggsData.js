import React , {useEffect} from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, GetHatching } from '../../store/AppStore';
import Moment from "react-moment";



function HatchingEggsData() {

    const params = useParams()
    
    const Lid = params.Lid  //المعمل
       const Cid = params.Cid //الشركه
    
       const dispatch = useDispatch()
       useEffect(() => {    
         dispatch(GetHatching(Cid , Lid)) 
         return ()=>{
            dispatch(AppActions.EmptyHatching())
           }
       } , [dispatch , Cid , Lid]);
       
       const HatchingData= useSelector(state=> state.App.HatchingData)

  return  (
   
    <table className="table table-striped table-bordered">  
    
      {
        HatchingData ? 
        HatchingData.map(Data=>(
          <>
                                <thead class="thead-dark"> 

          <tr>  
              <th>Created At</th>  
              <th>farm</th> 
              <th>line</th>
                       <th>house </th>
                       <th>eggs_count </th>
                       <th>chicks_count </th>
                       <th>trays_count</th>
                       <th>hatch_date </th>
                       <th>setting_date </th>
                       <th>candling_date </th>
                       <th>batch_number</th>
                       <th>trolly_number</th>
                       <th>breeder_count</th>
                       <th>boilers_count </th>
                       <th>culls_count</th>
                     

              
             
          
          </tr>  
          </thead>
          <tbody className='text-dark-50'>

        <tr>
          <td key={Data._id}>
                    <Moment to={Data.createdAt}></Moment>
  
                    </td>
                 
                   {
                   Object.values(Data.Data).map(vals=>{
                     return(
                       <>
                       <td> {vals.farm}</td>
                       
                       <td>{vals.line}</td>
                       <td> {vals.house}</td>
                       <td> {vals.eggs_count}</td>
                       <td> {vals.chicks_count}</td>
                       <td> {vals.trays_count}</td>
                       <td> {vals.hatch_date}</td>
                       <td> {vals.setting_date}</td>
                       <td> {vals.candling_date}</td>
                       <td> {vals.batch_number}</td>
                       <td> {vals.trolly_number}</td>
                       <td> {vals.breeder_count}</td>
                       <td> {vals.boilers_count}</td>
                       <td>{vals.culls_count}</td>
                      





                    </>
                      )
                   })
                     
                     }
                    </tr>
                    </tbody>
                    </>
        )) : null
      }

    
      </table>  


  )
}

export default HatchingEggsData;
