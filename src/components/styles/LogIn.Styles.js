import styled from "styled-components";

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h3 {
    margin-top: 20px;
  }
`;

export const LoginNav = styled.div`
  display: flex;
  width: 65vw;
  justify-content: space-evenly;
`;

export const LoginSignUpButton = styled.div`
  border-bottom: ${(props) =>
    props.isActive ? "0.5px solid #ffd530" : "0.5px solid black"};
  font-weight: bold;
  padding: 5px;
  margin: 20px;
  cursor: pointer;
`;
