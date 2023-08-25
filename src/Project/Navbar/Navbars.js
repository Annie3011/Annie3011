import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import '../Navbar/Navbar.css'
import { useState } from 'react';
import axios from 'axios';
// import Cart from './Cart';
function NavScrollExample() {
  const Navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [_, setSearchParams] = useSearchParams();

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });

    try {
      const response = await axios.get(
        `http://localhost:3000/products?q=${searchQuery}`
      );
      // Handle the response and update the search results in the UI
      console.log("jbj:", response.data); // Assuming the API returns data in the expected format
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error fetching search results:", error);
    }
    Navigate(`/search?q=${searchQuery}`);
  };
  return (
    <div>
    <Navbar  expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="#" style={{color:'#4E4187',fontSize:'x-large'}}>PRENDERE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>Navigate('/Dashboard')}>Home</Nav.Link>
            <Nav.Link onClick={()=>{Navigate(`/Dashboard/cart`)}}>My Cart</Nav.Link>
            <Nav.Link onClick={()=>{Navigate(`/profile`)}}>Profile</Nav.Link>
            {/* <NavDropdown title="Profile" id="navbarScrollingDropdown"> */}
              {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link href="#" disabled>
              Have a good shopping /:)/
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;