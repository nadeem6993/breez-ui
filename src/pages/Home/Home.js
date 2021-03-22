import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button href="/login">Login Page</Button>
      <Button href="/dashboard">Dashboard</Button>
    </div>
  );
};

export default Home;
