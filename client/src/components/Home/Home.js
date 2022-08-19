import React  from "react";
import CompanyItem from "./CompanyItem";
/* import { Link as RouterLink } from 'react-router-dom';
 */import styled from "styled-components";
import { useSelector  } from "react-redux";
/* import { Button } from "@mui/material"; */

const Container = styled.div`
  height: 70vh;
  width: 100%;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function Home() {
  const Companies = useSelector((state) => state.Users.companies);

 
  
  return (
    
    <Container>
     
      {Companies &&
        Companies.map((item) => <CompanyItem key={item.id} item={item}  />)
        }
       {/*  <Button variant="contained" component={RouterLink} to={`/Add-Company`} >اضافة شركة</Button> */}
    </Container>
  );
}

export default Home;
