import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import { Link } from "react-router-dom"
import { logo } from '../../rupeya';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-3">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Brand Logo" width="120" height="30" className="d-inline-block align-top" loading="lazy"></img>
                </Navbar.Brand>
                <Link to="/login"><Login /></Link>

            </Container>
        </Navbar>
    )
}
