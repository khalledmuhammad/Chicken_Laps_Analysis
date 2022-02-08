import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useParams} from "react-router-dom";

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
    width: 50%;
  }
`;
const Title = styled.h1`
  padding-bottom: 30px;
`;

function MaamelTsmynData() {
  const params = useParams()


  return (
    <Container>
      <Content>
        <Title>ادخل بيانات الفقس</Title>
        <Button
          style={{ fontSize: "20px" }}
          variant="outlined"
          component={RouterLink}
          to={`/mamelTfry5/${params.mid}/hatching`}
        >
          الي هناك
        </Button>
      </Content>
      <Content>
        <Title>ادخل بيانات التكسير</Title>
        <Button
          style={{ fontSize: "20px" }}
          variant="outlined"
          component={RouterLink}
          to={`/mamelTfry5/${params.mid}/broken`}
        >
          الي هناك
        </Button>
      </Content>
      <Content>
        <Title>ادخل بيانات الاخصاب</Title>
        <Button
          style={{ fontSize: "20px" }}
          variant="outlined"
          component={RouterLink}
          to={`/mamelTfry5/${params.mid}/fert`}
        >
          الي هناك
        </Button>
      </Content>
      <Content>
        <Title>ادخل بيانات البيض</Title>
        <Button
          style={{ fontSize: "20px" }}
          variant="outlined"
          component={RouterLink}
          to={`/mamelTfry5/${params.mid}/eggData`}
        >
          الي هناك
        </Button>
      </Content>
    </Container>
  );
}

export default MaamelTsmynData;
