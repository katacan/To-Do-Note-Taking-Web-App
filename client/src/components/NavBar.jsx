import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todos">Todos</Nav.Link>
            <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;