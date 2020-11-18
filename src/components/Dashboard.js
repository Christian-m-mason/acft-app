import React from "react";
import styled from "styled-components";
import { FiAlignLeft, FiSettings } from "react-icons/fi";

import { ReactComponent as RankLogo } from "../staff_sergeant.svg";

const DashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 10px;
  height: 300px;
  background-color: #fec325;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;

  display: flex;
  justify-content: space-between;
  h3 {
    align-self: center;
  }
`;

const RankContainer = styled.div`
  width: 200px;
  height: 200px;
  transform: translateY(-100px);
  align-self: center;
  border-radius: 50%;

  background: #3a3a47;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transform: translateY(-5px);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  border: 1px solid red;
`;

export default function Dashboard({ user }) {
  return (
    <DashboardLayout>
      <Header>
        <h2>
          <FiAlignLeft />
        </h2>
        <h3>Dashboard</h3>
        <h2>
          <FiSettings />
        </h2>
      </Header>
      <RankContainer>
        <RankLogo />
      </RankContainer>
      <Main>
        <h3>{user.firstName}</h3>
      </Main>
    </DashboardLayout>
  );
}
