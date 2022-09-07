import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useAuthLogin } from "../context/AuthProvider";
import imageLogo from "../assets/images/koala-3d.jpg";
import '../stylescomp/stylenav.scss';


export const Navbar = () => {
  
  const { openCart, cartQuantity } = useShoppingCart();
  const { switchLogin, usrEmail, toggle, eraseAll } = useAuthLogin()

  const handleChange = () => {
    toggle()
    eraseAll()
  }
  return (
    <NavbarBs className="bg-white shadow-sm">
      <Container>
        <Nav className="me-auto h4">
          <div className="m-auto">
            <img 
              width="90px" height="60px"
              style={{marginRight: "40px", borderRadius: "50%", opacity: "0.85"}}
              src={imageLogo} alt="logo_koala" />
          </div>
          <Nav.Link to='/' as={NavLink} 
            className="fs-2" 
            style={{marginRight: '20px'}}>Home</Nav.Link>
          <Nav.Link to='/store' as={NavLink} 
            className="fs-2" 
            style={{marginRight: '20px'}}>Store</Nav.Link>
          <Nav.Link to='/about' as={NavLink} 
            className="fs-2" 
            style={{marginRight: '20px'}}>About</Nav.Link>
          <Nav.Link to='/contact' as={NavLink} 
            className="fs-2" 
            style={{marginRight: '20px'}}>Contact</Nav.Link>
          <Nav.Link to='/subscribe' as={NavLink} 
            className="fs-2" 
            style={{marginRight: '20px'}}>Subscribe</Nav.Link>
        </Nav>

        {usrEmail ? (
          <span 
            style={{
              margin: "0px 20px",
              padding: "10px",
              fontFamily: "Consolas",
              textShadow: "1px 1px 1px purple",
              background: "steelblue",
              borderRadius: "10px",
              boxShadow: "0px 3px 5px grey",
              color: "white"
            }}
          >
            {usrEmail}
          </span>

          ) : (
          
          <span
            style={{
              margin: "0px 20px",
              padding: "10px",
              background: "red",
              borderRadius: "10px",
              color: "white"
            }}> &#8614; </span>
          )}

        {switchLogin ? (
          <Nav.Link
            to="/subscribe" as={NavLink}
            style={{
              marginRight: "20px",
              width: "55px", 
              height: "55px", 
              position: "relative", 
              display: "flex", 
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Consolas",
              fontSize: "0.8rem",
              color: "black", 
              border: "1px solid grey",
              borderRadius: "50%"
            }}

          >
            Login
          </Nav.Link>

          ) : (
          
          <Nav.Link
            to="/subscribe" as={NavLink}
            onClick={() => handleChange()}
            style={{
              marginRight: "20px",
              width: "55px", 
              height: "55px", 
              position: "relative", 
              display: "flex", 
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Consolas",
              fontSize: "0.8rem",
              color: "black", 
              border: "1px solid grey",
              borderRadius: "50%",
            }}

          >
            Logout
          </Nav.Link>
        )}

        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 
                32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 
                288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 
                488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 
                10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 
                464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 
                512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 
                437.5 512 464z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                fontFamily: 'One-serif',
                fontSize: "1rem",
                transform: "translate(25%, 25%)",
              }}
            >
             {cartQuantity}
            </div>
          </Button>
          )}
      </Container>
    </NavbarBs>
  );
}
