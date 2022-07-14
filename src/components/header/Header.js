import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../images/logodpz.png';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
 

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 3,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function Header(props) {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    setState({ ...state, [anchor]: open });
  };

  const reference = ['#about', '#dichvu', '#partners', '#hero']

  const list = (anchor) => (
    <Box
     // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      sx={{ width : 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List sx={{paddingTop: "200px"}}>
        {['Về DpZ', 'Dịch vụ', 'Đối tác', 'Liên hệ'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
                <ListItemText primary={
                              <Typography fontSize={20} ml={3} mb={-2} color="secondary">
                                <a href={reference[index]}
                                  style={{textDecoration: "none"}}>
                                  {text}
                                </a>
                                </Typography>
                              }
                              sx={{
                                  color : "#2096f3",
                                  paddingBottom: "10px",
                                }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      

    </Box>
  );

  const anchor = 'left';

  return (
    <Box sx={{ flexGrow: 1 }} id='header'>
      <ElevationScroll {...props}>
      <AppBar sx={{backgroundColor: "#fff"}}>
        <Toolbar>
          <IconButton
            color="secondary"
            onClick={toggleDrawer(anchor, true)}
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            // anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#fff" }}>
            <img src={logo} alt="logo"/>
          </Typography>
          <Button 
            variant="outlined" 
            color="secondary" 
            href='https://dpaportal.apps.xplat.fis.com.vn/'
            target="_blank"
            >Đăng Nhập</Button>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
    </Box>
  );
}
