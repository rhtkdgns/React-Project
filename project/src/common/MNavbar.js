/* eslint-disable */
import { Navbar, Nav, Container} from 'react-bootstrap';
// import { Routes, Route, Link } from "react-router-dom";
import Notice from '../page/Notice';
const MNavbar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/notice">게시판</Nav.Link>  
                </Nav>
            </Container>
            </Navbar>
        </>
    );
}
export default MNavbar; 