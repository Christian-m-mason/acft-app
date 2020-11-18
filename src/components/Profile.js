import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";

import { SubmitButton } from "./styles/SharedStyles";

const ProfileLayout = styled.div`
  padding-top: 20px;
  margin: 2rem;
  h3 {
    margin-bottom: 75px;
  }
  input,
  select {
    background-color: #f5f5f5;
  }
`;

function Profile({ user, setUser }) {
  function updateField(e) {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <ProfileLayout>
      <h3>Update your profile</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control
              type="text"
              id="firstName"
              placeholder="First Name"
              onChange={updateField}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={9}>
            <Form.Control
              type="text"
              id="lastName"
              placeholder="Last Name"
              onChange={updateField}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              id="middleInitial"
              placeholder="MI"
              onChange={updateField}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              type="text"
              id="age"
              placeholder="Age"
              onChange={updateField}
            />
          </Col>
          <Col xs={9}>
            <Form.Control
              as="select"
              id="gender"
              defaultValue="Gender"
              onChange={updateField}
            >
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={7}>
            <Form.Control
              type="text"
              id="mos"
              placeholder="MOS"
              onChange={updateField}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              id="rank"
              placeholder="Rank"
              onChange={updateField}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              type="text"
              id="uic"
              placeholder="UIC"
              onChange={updateField}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              type="text"
              id="unitName"
              placeholder="Unit"
              onChange={updateField}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              as="select"
              id="profile"
              defaultValue="none"
              onChange={updateField}
            >
              <option>Profile</option>
              <option>None</option>
              <option>Permanent</option>
              <option>Temporary</option>
            </Form.Control>
          </Col>
        </Row>
        <br />
        <Link to="/dashboard">
          <SubmitButton>Save Profile</SubmitButton>
        </Link>
      </Form>
    </ProfileLayout>
  );
}

export default Profile;
