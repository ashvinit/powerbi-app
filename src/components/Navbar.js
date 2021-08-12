import {Navbar, Container, Nav} from 'react-bootstrap'
import './Navbar.css';

function NavBar () {
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    {/* <Nav.Link href="/#/">Home</Nav.Link> */}
                    {/* <Nav.Link href="/#/Report">Report</Nav.Link> */}
                    <Nav.Link href="https://ashvinit.github.io/powerbi-app/#/Show-Report">Show Report</Nav.Link>
                    <Nav.Link href="https://ashvinit.github.io/powerbi-app/#/Embedded-Report">Embed-Report</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;

