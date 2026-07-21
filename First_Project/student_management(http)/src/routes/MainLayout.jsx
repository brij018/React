import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavbarComponents from "../components/UI/Navbar";

const MainLayout = () => {
  return (
    <Container className="school-shell">
      <NavbarComponents />

      <div className="school-content">
        <Outlet />
      </div>
    </Container>
  );
};

export default MainLayout;
