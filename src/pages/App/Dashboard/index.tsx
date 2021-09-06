import React from "react";
import WrapperKAV from "../../../components/WrapperKAV";
import { DashboardStyled as Styled } from "./styles";

const Dashboard = () => {
  return (
    <WrapperKAV>
      <Styled.Container>
        <Styled.Title>Dashboard</Styled.Title>
      </Styled.Container>
    </WrapperKAV>
  );
};

export default Dashboard;
