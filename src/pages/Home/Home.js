import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  });

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button href="/login">Login Page</Button>
      <Button href="/dashboard">Dashboard</Button>
    </div>
  );
};

export default Home;
