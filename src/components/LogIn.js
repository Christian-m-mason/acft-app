import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import {
  LoginLayout,
  LoginNav,
  LoginSignUpButton,
} from "./styles/LogIn.Styles";
import { SubmitButton } from "./styles/SharedStyles";
import { ReactComponent as ArmyLogo } from "../LogoArmy.svg";

function LogIn({ user, setUser }) {
  const [isNewUser, setisNewUser] = useState(true);
  function updateField(e) {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  }

  function handleFormSwitch(e) {
    return setisNewUser(!isNewUser);
  }
  return (
    <LoginLayout>
      <ArmyLogo />
      <h3>Army Combat Fitness Test</h3>

      <LoginNav>
        <LoginSignUpButton isActive={!isNewUser} onClick={handleFormSwitch}>
          Log In
        </LoginSignUpButton>
        <LoginSignUpButton isActive={isNewUser} onClick={handleFormSwitch}>
          Sign Up
        </LoginSignUpButton>
      </LoginNav>

      <Form className="w-75 mt-4" style={{ height: "200px" }}>
        <Form.Group>
          <Form.Control
            type="email"
            id="email"
            onChange={updateField}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            id="password"
            onChange={updateField}
            placeholder="Password"
          />
        </Form.Group>
        {isNewUser && (
          <Form.Group>
            <Form.Control
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </Form.Group>
        )}
        <Link to={!isNewUser ? "/dashboard" : "/profile"}>
          <SubmitButton className="w-100">
            {isNewUser ? "Sign Up" : "Sign In"}
          </SubmitButton>
        </Link>
      </Form>
    </LoginLayout>
  );
}
export default LogIn;
