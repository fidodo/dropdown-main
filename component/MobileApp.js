import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav } from "reactstrap"

function MobileApp() {
  return (
    <div>
    <Navbar
      color="faded"
      light
    >
      <NavbarBrand
        className="me-auto"
        href="/"
      >
      <strong>Snap</strong> 
      </NavbarBrand>
      <NavbarToggler
        className="me-2"
        onClick={function noRefCheck(){}}
      />
      <Collapse navbar>
        {/* <Nav navbar>
          <NavItem>
            <NavLink href="/components/">
              Components
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav> */}
      </Collapse>
    </Navbar>
  </div>
  )
}

export default MobileApp


