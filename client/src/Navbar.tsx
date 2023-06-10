import { NavLink, Navbar, Nav, NavItem, NavbarBrand,  } from "reactstrap";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar className="navbar">
        <Nav navbar>
          <div className="left">
            <NavbarBrand href="/">Reviewer</NavbarBrand>
          </div>
          <div className="center">
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
       
          </div>
       
        </Nav>
      </Navbar>
    </div>
  );
}