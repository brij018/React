import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addUser, updateUser } from "../api/data";

const initialForm = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  company: "",
};

const Add = ({ editing, onAdd, onUpdate, onCancel }) => {
  const [form, setForm] = useState(
    editing
      ? {
          name: editing.name,
          username: editing.username,
          email: editing.email,
          phone: editing.phone,
          website: editing.website,
          company: editing.company?.name ?? "",
        }
      : initialForm
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, company: { name: form.company } };
    try {
      if (editing) {
        await updateUser(editing.id, payload);
        onUpdate({ id: editing.id, ...payload });
      } else {
        await addUser(payload);
        onAdd({ id: Date.now(), ...payload });
      }
      setForm(initialForm);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container className="py-4">
      <Form onSubmit={handleSubmit}>
        <h4>{editing ? "Edit User" : "Add User"}</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
        </div>
        <Button type="submit" variant="primary" className="mt-3">
          {editing ? "Save" : "Add User"}
        </Button>
        {editing && (
          <Button
            type="button"
            variant="secondary"
            className="mt-3 ms-2"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Add;