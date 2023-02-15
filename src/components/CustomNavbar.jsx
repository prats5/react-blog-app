
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";
import { useEffect } from "react";
import { useState } from "react";

import { doLogout, getCurrentUserDetail, isLoggedIn } from "../components/auth/index";

const CustomNavbar = ()=>{

    //const userContextData = useContext(userContext)
    let navigate = useNavigate()


    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)


    useEffect(() => {

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())

    }, [login])

  const logout=()=>{
      doLogout(()=>{
       setLogin(false)
       navigate("/")

      })
  }
    

    return (

        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed=""
                className="px-5">

                <NavbarBrand tag={ReactLink} to="/">
                    MyBlogs
                </NavbarBrand>
                
                <Collapse navbar>
                    <Nav className="me-auto" navbar>

                        <NavItem>
                            <NavLink tag={ReactLink} to="/" >
                                New Feeds
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about" >
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={ReactLink} to="/services" >
                                Services
                            </NavLink>
                        </NavItem>
                        

                        
                        

                        <UncontrolledDropdown inNavbar  nav>
                            <DropdownToggle caret nav>
                                More
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={ReactLink} to="/services">
                                    Contact Us
                                </DropdownItem>
                                <DropdownItem>
                                    Facebook
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Youtube
                                </DropdownItem>
                                <DropdownItem>
                                    Instagram
                                </DropdownItem>
                                <DropdownItem>
                                    LinkedIn
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>


                    </Collapse>

                    <Nav navbar>

                        {
                          login && (

                            <>

                                   <NavItem>
                                    <NavLink tag={ReactLink} to={`/user/profile-info/${user.id}`} >
                                        Profile Info
                                    </NavLink>
                                </NavItem> 

                                <NavItem>
                                    <NavLink tag={ReactLink} to="/user/dashboard">
                                        {user.email}
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink onClick={logout}>
                                        Logout
                                    </NavLink>
                                </NavItem>

                                
                            </>

                        )
                        }
                          {
                        !login && (

                            <>
                            <NavItem>
                            <NavLink tag={ReactLink} to="/login" >
                                Login
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={ReactLink} to="/signup" >
                                Signup
                            </NavLink>
                        </NavItem>

                            </>
                        )
                          

                    }
                   

                        </Nav>

            </Navbar>
        </div>


    );
}; 

export default CustomNavbar;