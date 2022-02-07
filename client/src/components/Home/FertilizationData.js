import React, {useEffect} from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, GetFert } from '../../store/AppStore';
import Moment from "react-moment";



function FertilizationData() {
    const params = useParams()

    const Lid = params.Lid  //المعمل
       const Cid = params.Cid //الشركه
    
       const dispatch = useDispatch()
       useEffect(() => {    
         dispatch(GetFert(Cid , Lid)) 
         return ()=>{
            dispatch(AppActions.EmptyFert())
           }
       } , [dispatch]);
       const FertData= useSelector(state=> state.App.FertData)

  return  (
   
    <table className="table table-striped table-bordered">  
    
      {
        FertData ? 
        FertData.map(Data=>(
          <>
                                <thead class="thead-dark"> 

          <tr>  
              <th>Created At</th>  
              <th> production_date</th> 
              <th>batch_number</th>
                       <th>setting_date </th>
                       <th>hatch_date </th>
                       <th>candling_date </th>
                       <th>farm </th>
                       <th>line </th>
                       <th>house </th>
                       <th>trolly_number </th>
                       <th>tray_1</th>
                       <th>tray_2 </th>
                       <th>tray_3</th>
                       <th>tray_4</th>
                       <th>tray_5 </th>
                       <th>tray_6 </th>
                       <th>tray_7 </th>
                       <th>tray_8 </th>
                       <th>tray_9 </th>
                      

              
             
          
          </tr>  </thead>
        <tr>
          <td key={Data._id}>
                    <Moment to={Data.createdAt}></Moment>
  
                    </td>
                 
                   {
                   Object.values(Data.Data).map(vals=>{
                     return(
                       <>
                       <td> {vals.production_date}</td>
                       
                       <td>{vals.batch_number}</td>
                       <td> {vals.setting_date}</td>
                       <td> {vals.hatch_date}</td>
                       <td> {vals.candling_date}</td>
                       <td> {vals.farm}</td>
                       <td> {vals.line}</td>
                       <td> {vals.house}</td>
                       <td> {vals.trolly_number}</td>
                       <td> {vals.tray_1}</td>
                       <td> {vals.tray_2}</td>
                       <td> {vals.tray_3}</td>
                       <td> {vals.tray_4}</td>
                       <td>{vals.tray_5}</td>
                       <td> {vals.tray_6}</td>
                       <td> {vals.tray_7}</td>
                       <td> {vals.tray_8}</td>
                       <td> {vals.tray_9}</td>
                      






                    </>
                      )
                   })
                     
                     }
                    </tr>
                    </>
        )) : null
      }

    
      </table>  


  )
}

export default FertilizationData;
