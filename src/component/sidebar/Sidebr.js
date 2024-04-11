import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./SideBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo1 from "../../Assets/std-logo.png"
import tedAi from "../../asstes/AI-1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai"
import { HiUserGroup } from "react-icons/hi"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";

const drawerWidth = 270;
const Sidebar = ({ children }) =>{
  // const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isColor, setIsColor] = useState("Dashboard")
  const { pathname } = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const changeRoute = () => {
    try {
      // console.log("pathname", pathname);
      if (pathname) {
        if (pathname == "/dashboard") {
          setIsColor("Dashboard")
        } else if (pathname == "/buy-token") {
          setIsColor("Users")
        } else if (pathname == "/profile") {
          setIsColor("Schedule")
        } 
      }
    } catch (e) {
      console.log("e", e);
    }
  }
  useEffect(() => {
    changeRoute()
  })
 
  const drawer = (
    <div className="stakenmsColor1" style={{ color: "white", zIndex: "11" }}>
      <Toolbar className="text-start d-flex align-items-center justify-content-start pb-3 pt-3 logo-css text-white">
      <img src={tedAi} alt="logo" width={60} height={60}/> TedAI
      </Toolbar>
      <List>

        <Link to="/dashboard" style={{ textDecoration: "none" }} >
          <ListItem button href="#deshborad" key="Dashboard"
            onClick={() => {
              setIsColor("Dashboard");
              setMobileOpen(!mobileOpen);
            }}
            className={isColor == "Dashboard" ? "staking-btn_active pt-3 pb-3" : "staking-btn pt-3 pb-3"}
          >
            <ListItemIcon >
              <LuLayoutDashboard color={isColor == "Dashboard" ? "#fff" : "#fff"}
                className='ms-3 icon-color' size={23} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/buy-token" style={{ textDecoration: "none" }}
        >
          <ListItem button key="Users"
            className={isColor == "Users" ? "staking-btn_active pt-3 pb-3" : "staking-btn pt-3 pb-3"}
          >

            <ListItemIcon>
              <MdOutlineShoppingCart color={isColor == "Users" ? "#fff" : "#fff"}
                className='ms-3' size={23} />
            </ListItemIcon>
            <ListItemText primary="Buy Token" />
          </ListItem>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}
        >
          <ListItem button key="Schedule"
            className={isColor == "Schedule" ? "staking-btn_active pt-3 pb-3" : "staking-btn pt-3 pb-3"}>
            <ListItemIcon>
              <CgProfile color={isColor == "Schedule" ? "#fff" : "#fff"}
                className='ms-3' size={23} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <ListItem button key="Schedule"
        onClick={()=>{
          navigate("/")
          localStorage.clear();
        }}
            className={isColor == "" ? "staking-btn_active pt-3 pb-3" : "staking-btn pt-3 pb-3"}>
            <ListItemIcon>
              <BiLogOutCircle color={isColor == "" ? "#fff" : "#fff"}
                className='ms-3' size={23} />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItem>
        {/* <img src={aiman} className="img-fluid mt-4" width={200}/> */}
      </List>
     
    </div>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{backgroundColor: "#fff",}}
      >
        <Toolbar style={{
          backgroundColor: "#fff", width: '100%',
        }}>
          <Typography style={{ color: "white", display: "flex", width: '100%',  zIndex: "11",  }} >
            <div style={{ width: '100%' }} >
              <Navbar collapseOnSelect sticky="top" variant="light" style={{ width: "100%", backgroundColor: '#fff', }} >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                  style={{color: "black", background: "black"}}
                >
                  <MenuIcon style={{ color: "white" }} />
                </IconButton>
                <Navbar.Brand href="#home" className="newProject-span d-flex" >
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className=" nav  d-flex justify-content-evenly nav-one-width" >
                  </Nav>
                  <Nav className=' d-flex align-items-center justify-content-start'>
                    <Nav.Link href="">
                      
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        style={{background: "#f7f6fb", minHeight: "100vh", color: "#000"}}
      >
        {/* <Toolbar /> */}
        { children }
      </Box>
    </Box>
  );
}


export default Sidebar;