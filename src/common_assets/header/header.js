import React from 'react';
import "./header.css";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <header style={{textAlign:"center"}}>
      <MDBNavbar className="marg" expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav  className='mb-2 mb-lg-0'>
            <MDBNavbarItem active>
                  <MDBNavbarLink className="ts"  aria-current='page' href='/'> Home </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                  <MDBNavbarLink className="ts"  aria-current='page' href='/diagnosis'> Diagnosis </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                  <MDBNavbarLink className="ts" href='/Register'> Register </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                  <MDBNavbarLink className="ts" href='/Login'>Login</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem >
                  <MDBNavbarLink className="ts" href='/Contactus'>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

    </header>
  );
}

export default Header;