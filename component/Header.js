import React from 'react'
import Planning from "../public/images/icon-planning.svg"
import Todo from  "../public/images/icon-todo.svg"
import Calendar from "../public/images/icon-calendar.svg"
import Reminders from "../public/images/icon-reminders.svg"

import Layout from './Layout'
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap"
function Header() {
  return (
    <>
     <Layout/>
     <div style={{paddingLeft:"20px"}}>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
    <strong>snap</strong>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Features
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
            <Todo />
              Todo List
            </DropdownItem>
            <DropdownItem>
              <Calendar />
              Calendar
            </DropdownItem>
            <DropdownItem >
              <Reminders  />
              Reminders
            </DropdownItem>
            <DropdownItem>
              <Planning />
              Planning
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Company
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              History
            </DropdownItem>
            <DropdownItem>
              Our Team
            </DropdownItem>
          
            <DropdownItem>
              Blog
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="/">
            Careers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            About
          </NavLink>
        </NavItem>
        
      </Nav>
      <div>
        <button type="button" class="btn btn-light">Log in</button>
        </div>
       <div>
          <button className="btn btn-outline-success" type="submit">Register</button>
          </div>
      
    </Collapse>
  </Navbar>
</div>
    </>
  )
}

export default Header