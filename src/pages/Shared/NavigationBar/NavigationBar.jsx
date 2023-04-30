import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLoggedOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing"><Link to='/about'>About</Link></Nav.Link>
                            <Nav.Link to='/about'>Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#"> <FaUserCircle size={30}></FaUserCircle> </Nav.Link>}

                            {user ? <Button onClick={handleLoggedOut} variant="secondary">Log Out  </Button> : <Link to='/login'><Button variant="secondary">Log in</Button></Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;