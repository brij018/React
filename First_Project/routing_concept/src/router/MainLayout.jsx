import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Stack>
          <Col>
            <Outlet />
          </Col>
          <Col>
            <Footer />
          </Col>
        </Stack>
      </Container>
    </>
  );
};

export default MainLayout;
