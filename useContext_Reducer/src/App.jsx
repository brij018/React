import React from "react";
import AddExpense from "./components/AddExpense";
import ListExpense from "./components/ListExpense";
import { Container, Row, Col, Card } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container className="py-4 text-center">
        <h1 className="fw-bold text-info ">Expense Tracker</h1>
      </Container>

      <Container className="pb-5">
        <Row className="g-4">
          <Col xs={12} lg={4} className="order-lg-1 order-2">
            <Card className="shadow-sm h-100">
              <Card.Header className="bg-primary text-white fw-semibold">
                Add Expense
              </Card.Header>
              <Card.Body>
                <AddExpense />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={8} className="order-lg-2 order-1">
            <Card className="shadow-sm">
              <Card.Header className="bg-success text-white fw-semibold">
                Expense List
              </Card.Header>
              <Card.Body>
                <ListExpense />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
