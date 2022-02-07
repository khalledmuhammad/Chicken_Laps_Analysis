import React , {useEffect} from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, GetEggData } from '../../store/AppStore';
import Moment from "react-moment";


function EggsData() {
   
const params = useParams()
    const Lid = params.Lid  //المعمل
    const Cid = params.Cid //الشركه

    const dispatch = useDispatch()
    useEffect(() => {    
      dispatch(GetEggData(Cid , Lid)) 
      return ()=>{
        dispatch(AppActions.EmptyEggData())
       }

    } , [dispatch]);
    const EggData= useSelector(state=> state.App.EggData)

  return (
   
    <table className="table table-striped table-bordered">  
    
      {
        EggData ? 
        EggData.map(Data=>(
          <>
                      <thead class="thead-dark"> 

          <tr>  
                      <th>Created At</th>  
                      <th> production_date</th> 
                       <th>age </th>
                       <th>farm </th>
                       <th>flock </th>
                       <th> line </th>
                       <th>house </th>
                       <th>floor_egg </th>
                       <th>dirty </th>
                       <th>small  </th>
                       <th> crack </th>
                       <th>misshape</th>
                       <th>white </th>
                       <th>broken </th>
                       <th>nest_egg </th>
                      

              
             
          
          </tr>  
          </thead>
        <tr>
          <td key={Data._id}>
                    <Moment to={Data.createdAt}></Moment>
  
                    </td>
                 
                   {
                   Object.values(Data.Data).map(vals=>{
                     return(
                       <>
                       
                       <td>{vals.production_date}</td>
                       <td> {vals.age}</td>
                       <td> {vals.farm}</td>
                       <td> {vals.flock}</td>
                       <td> {vals.line}</td>
                       <td> {vals.house}</td>
                       <td> {vals.floor_egg}</td>
                       <td> {vals.dirty}</td>
                       <td> {vals.small}</td>
                       <td> {vals.crack}</td>
                       <td> {vals.misshape}</td>
                       <td> {vals.white}</td>
                       <td>{vals.broken}</td>
                       <td> {vals.nest_egg}</td>
                     






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

export default EggsData;
