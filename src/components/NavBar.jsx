
import * as reactBoot from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <reactBoot.Navbar bg="light" expand="lg">
            <reactBoot.Container>
            <reactBoot.Navbar.Brand href="#home">CODERHOUSE-SHOP</reactBoot.Navbar.Brand>
            <reactBoot.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <reactBoot.Navbar.Collapse id="basic-navbar-nav">
                <reactBoot.Nav className="me-auto">
                    {/* <reactBoot.Nav.Link href="#home" to="/" >Home</reactBoot.Nav.Link> */}
                               <Link to="/">Volver a Items</Link>
                    {/* <reactBoot.Nav.Link href="#link">Link</reactBoot.Nav.Link> */}
                    <reactBoot.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        {/* <reactBoot.NavDropdown.Item href="#action/3.1">Action</reactBoot.NavDropdown.Item>
                        <reactBoot.NavDropdown.Item href="#action/3.2">Another action</reactBoot.NavDropdown.Item>
                        <reactBoot.NavDropdown.Item href="#action/3.3">Something</reactBoot.NavDropdown.Item>
                        <reactBoot.NavDropdown.Divider />
                        <reactBoot.NavDropdown.Item href="#action/3.4">Separated link</reactBoot.NavDropdown.Item> */}
                    </reactBoot.NavDropdown>
                </reactBoot.Nav>
            </reactBoot.Navbar.Collapse>

            <CartWidget />   

            </reactBoot.Container>                                 
            </reactBoot.Navbar>
    )      
}

export default NavBar;


// import { Link } from "react-router-dom";

// export default function NavBar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Items</Link>
//         </li>
//         <li>
//           <Link to="/">Categories</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
