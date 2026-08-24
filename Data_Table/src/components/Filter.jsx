import { Container, Form, Row, Col } from "react-bootstrap";

const Filter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <Container className="py-4">
      <Form>
        <h4>Filter Users</h4>
        <Row className="g-3">
          <Col md={3}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={filters.name}
                onChange={handleChange}
                placeholder="Filter by name"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={filters.username}
                onChange={handleChange}
                placeholder="Filter by username"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={filters.email}
                onChange={handleChange}
                placeholder="Filter by email"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={filters.company}
                onChange={handleChange}
                placeholder="Filter by company"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Filter;