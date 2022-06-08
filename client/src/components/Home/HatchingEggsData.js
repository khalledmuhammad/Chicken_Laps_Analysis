import React , {useEffect} from 'react';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, GetHatching } from '../../store/AppStore';
import {  utils, writeFileXLSX } from 'xlsx';



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

       const HandleExport=()=>{
        const data = HatchingData.map(Data=>Object.values(Data.Data).map(vals=>{
          return(vals) })  )
          const newData = data.map(vals=>{
            for(let i = 0 ; i <=vals.lenght ; i ++){
              return vals[i]
            }
            return null

          })
    
          console.log(newData)
         const wb = utils.book_new()
         
          const ws = utils.json_to_sheet(Object.values(data[0]))
        
  
          
        
          utils.book_append_sheet(wb , ws  , "myData")
          writeFileXLSX(wb , "myExcel.xlsx") 
        
      }
  return  (
   
    <table className="table table-striped table-bordered">  
    
                                <thead class="thead-dark"> 

          <tr>  
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
      {
        HatchingData ? 
        HatchingData.map(Data=>(
          <>
          <tbody className='text-dark-50'>

        <tr key={Data._id} >
          
                 
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

<button className='btn btn-primary' onClick={HandleExport}>export Data </button>

      </table>  


  )
}

export default HatchingEggsData;
