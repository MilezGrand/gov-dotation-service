import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


function Header() {
    return(
        <div>
            <Navbar bg="dark" variant="dark" className="NavBar">
                    <Nav className="me-auto">
                        <Nav.Link href="/list" className="NavLink">Список</Nav.Link>
                        <Nav.Link href="/profile" className="NavLink">Мои заявки</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Button variant="danger" size="sm">Выйти</Button>
                    </Nav>
                
            </Navbar>

        </div>
    );
}

export default Header;