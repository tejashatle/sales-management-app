import { Component } from "react";
import { Icon } from "@iconify/react";
import { Container, Navbar, NavbarBrand, Nav} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Switch, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Frame from 'react-frame-component';
import Dashboard from "./Dashboard";
import FrameComponent from "react-frame-component";
import HeaderView from "./HeaderView";



class SideBar extends Component{

    render(){
        return(
            <div>
                <Router>
            <TopBar title={<HeaderView/>} />    

                </Router>
            <div className="side-bar">
                <Navbar>
                    <Container>
                        <NavbarBrand><Icon icon="material-symbols:settings-applications-outline" style={{ marginRight: "10px"}}/>SMA</NavbarBrand>
                        {/* <NavbarBrand>SMA</NavbarBrand> */}
                        <Nav className="navigation">
                             
                            <Nav.Link href="dashboard"><Icon icon="mdi-light:view-dashboard" color="#6A40DF"/>Dashboard</Nav.Link>
                            <Nav.Link href="stock"><Icon icon="healthicons:stock-out-outline" color="#6A40DF"/>Stock</Nav.Link>
                            <Nav.Link href="orders"><Icon icon="ph:shopping-cart-light" color="#6A40DF"/>Orders</Nav.Link>
                            <Nav.Link href="customers"><Icon icon="ph:user-circle-light" color="#6A40DF"/>Customer</Nav.Link>
                            <Nav.Link href="settings"><Icon icon="mdi-light:settings" color="#6A40DF"/>Settings</Nav.Link>
                            <Nav.Link href="logout"><Icon icon="mdi-light:logout" color="#6A40DF"/>Logout</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
                <Frame>
                    {/* <Dashboard/> */}
                    <Router>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                            <Route path="/stock" element={<TopBar/>}/>
                            <Route path="/orders" element={<Frame/>}/>
                            <Route path="/customer" element={<Frame/>}/>
                            <Route path="/settings" element={<Frame/>}/>
                        </Routes>
                    </Router>
                </Frame>
                {/* <FrameComponent comp={<Dashboard/>}/> */}
            </div>
        );
    }
}

export default SideBar