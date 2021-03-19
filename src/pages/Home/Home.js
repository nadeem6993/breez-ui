import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button href="/login">Login Page</Button>
      <Button href="/new-billing-entry">New Billing Entry</Button>
      <Button href="/profile">Profile</Button>
    </div>
  );
};

export default Home;
