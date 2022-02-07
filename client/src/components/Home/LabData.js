import React  from 'react';
import styled from "styled-components";
import { useParams} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "@mui/material";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LabItem = styled.div`
  display: flex;

  flex-direction: row;
  flex: 1;
  margin: 0 1em 0 10px;
  height: 50%;

  // position: relative;
  @media (max-width: 768px) {
    margin-bottom: 20px;

    div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #cecece;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  border-radius: 5%;
  box-shadow: 7px 6px 18px -1px rgba(0, 0, 0, 0.55);
`;
const Title = styled.h1`
  color: #fd0002;
  font-weight: 900;
  margin-bottom: 20px;
`;






function LabData() {

    const params = useParams()
    const Lid = params.Lid  //المعمل
    const Cid = params.Cid //الشركه
   
    

  return (
    <Container>
  
     <LabItem>
     <Info>
       <Title>بيانات البيض</Title>
       <Button variant="contained"  style={{color:"white"}} component={RouterLink} to={`/${Cid}/${Lid}/eggsData`}   >اظهر بيانات المعمل</Button>
     </Info>
   </LabItem>
   <LabItem>
     <Info>
       <Title>بيانات الاخصاب</Title>
       <Button variant="contained"  style={{color:"white"}} component={RouterLink} to={`/${Cid}/${Lid}/fertData`}   >اظهر بيانات المعمل</Button>
     </Info>
   </LabItem>  <LabItem>
     <Info>
       <Title>بيانات التكسير</Title>
       <Button variant="contained"  style={{color:"white"}} component={RouterLink} to={`/${Cid}/${Lid}/brokenData`}   >اظهر بيانات المعمل</Button>
     </Info>
   </LabItem>  <LabItem>
     <Info>
       <Title>بيانات الفقس</Title>
       <Button variant="contained"  style={{color:"white"}} component={RouterLink} to={`/${Cid}/${Lid}/hatchingData`}   >اظهر بيانات المعمل</Button>
     </Info>
   </LabItem>


    </Container>
   )

     
  
  }
export default LabData;
