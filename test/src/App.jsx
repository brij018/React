import React from "react";
import AddExpense from "./components/AddExpense";
import ListExpense from "./components/ListExpense";
import { Container, Navbar, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar className="app-header py-3 mb-4">
        <Container>
          <Navbar.Brand className="fw-bold text-dark fs-5 m-0 tracking-tight">
            Expense Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="pb-5 flex-grow-1">
        <Row className="g-4">
          <Col lg={4}>
            <div className="card-custom p-4">
              <AddExpense />
            </div>
          </Col>

          <Col lg={8}>
            <div className="card-custom p-4">
              <ListExpense />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
