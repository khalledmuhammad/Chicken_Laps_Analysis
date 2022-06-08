import React , {useEffect} from 'react';

import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, GetBroken } from '../../store/AppStore';
import { read, utils, writeFileXLSX } from 'xlsx';



function BrokenEggsData() {
    const params = useParams()
    const Lid = params.Lid  //المعمل
    const Cid = params.Cid //الشركه

    const dispatch = useDispatch()
    useEffect(() => {    
      dispatch(GetBroken(Cid , Lid)) 
      return ()=>{
        dispatch(AppActions.EmptyBroken())
       }
    }  , [dispatch, Cid , Lid ] );

    const BrokenData= useSelector(state=> state.App.BrokenData)
    const HandleExport=()=>{
      const data = BrokenData.map(Data=>Object.values(Data.Data).map(vals=>{
        return(vals) })  )
  
        console.log(Object.entries(data))
       const wb = utils.book_new()
       
        const ws = utils.json_to_sheet(Object.values(data[0]))
      

        
      
        utils.book_append_sheet(wb , ws  , "myData")
        writeFileXLSX(wb , "myExcel.xlsx") 
      
    }
  return (
   
    <table className="table table-striped table-bordered">  
    
            <thead class="thead-dark"> 
          <tr>  
              <th>رقم الدفعه</th> 
              <th>تاريخ__الايداع</th>
                       <th>مزرعه </th>
                       <th>عنبر </th>
                       <th>age </th>
                       <th>رقم العينه </th>
                       <th>EggCount </th>
                       <th>INFERTILE </th>
                       <th>EARLY </th>
                       <th>BLOOD RING </th>
                       <th>BLACK EYE </th>
                       <th>Ten DAYS</th>
                       <th>FEATHER </th>
                       <th>LATE LIFE </th>
                       <th>LATE DEAD </th>
                       <th>PIP LIFE </th>
                       <th>PIP DEAD </th>
                       <th>SHELLQUALITY </th>
                       <th>ROTTEN </th>
                       <th>CONTAMINATION </th>
                       <th>M_POSETION </th>
                       <th>M_FORMATION </th>
                       <th>CULLS </th>
                       <th>DEAD CHICKS </th>

              
             
          
          </tr>  
          </thead>
      {
        BrokenData ? 
        BrokenData.map(Data=>(
          <>
        <tr key={Data._id} >
  
                    
                 
                   {
                   Object.values(Data.Data).map(vals=>{
                     return(
                       <>
                       <td> {vals.rkmDof3a}</td>
                       
                       <td>{vals.tary5eda3}</td>
                       <td> {vals.mazr3a}</td>
                       <td> {vals.Anbar}</td>
                       <td> {vals.age}</td>
                       <td> {vals.AynaNum}</td>
                       <td> {vals.EggCount}</td>
                       <td> {vals.INFERTILE}</td>
                       <td> {vals.EARLY}</td>
                       <td> {vals.BLOOD_RING}</td>
                       <td> {vals.BLACK_EYE}</td>
                       <td> {vals.Ten_DAYS}</td>
                       <td> {vals.FEATHER}</td>
                       <td>{vals.LATE_LIFE}</td>
                       <td> {vals.LATE_DEAD}</td>
                       <td> {vals.PIP_LIFE}</td>
                       <td> {vals.PIP_DEAD}</td>
                       <td> {vals.SHELLQUALITY}</td>
                       <td> {vals.ROTTEN}</td>
                       <td> {vals.CONTAMINATION}</td>
                       <td> {vals.M_POSETION}</td>
                       <td> {vals.M_FORMATION}</td>
                       <td> {vals.CULLS}</td>
                       <td> {vals.DEAD_CHICKS}</td>






                    </>
                      )
                   })
                     
                     }
                    </tr>
                    </>
        )) : null
      }
<button className='btn btn-primary' onClick={HandleExport}>export Data </button>
    
      </table>  


  )
}

export default BrokenEggsData;
