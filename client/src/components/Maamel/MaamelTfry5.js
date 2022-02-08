import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useSelector  } from "react-redux";


const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;
const Content = styled.div`
  display: flex;
  height: 50%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 4%;
  box-shadow: 2px 10px 14px -2px rgba(0, 0, 0, 0.74);
  @media (max-width: 768px) {
    width:50%
  }
`;
const Title = styled.h1`
  padding-bottom: 30px;
`;
function MaamelTfry5() {
  const labNames = useSelector(state=>state.Users.labs)
  return (
    <Container>
                        {labNames.map(lab=>(
                            <Content key={lab._id} >
                            <Title>{lab.Labname}</Title>
                            <Button
                              style={{ fontSize: "20px" }}
                              variant="outlined"
                              component={RouterLink}
                              to={`/mamelTfry5/${lab._id}`}
                            >
                              الي هناك
                            </Button>
                          </Content>
                        )) }

    
    </Container>
  );
}

export default MaamelTfry5;
