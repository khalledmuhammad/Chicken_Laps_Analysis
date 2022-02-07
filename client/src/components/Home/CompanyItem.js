import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "@mui/material";


const Container = styled.div`
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


function CompanyItem({ item }) {
  return (
    <Container>
      <Info>
        <Title> {item.username} </Title>
        <Button variant="contained"  style={{color:"white"}} component={RouterLink} to={`/${item._id}`}   >view Company</Button>
      </Info>
    </Container>
  );
}

export default CompanyItem;
