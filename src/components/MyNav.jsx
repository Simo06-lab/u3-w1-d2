import { Navbar, Container, Nav } from "react-bootstrap"

const MyNav = ({ onShowBooks, onAllBooks }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">HorrorBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={onAllBooks}>Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>

            <Nav.Link onClick={onShowBooks}>Libri</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
