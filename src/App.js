import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProductInfo from './components/productInfo/ProductInfo';
import DichVu from './components/DichVu/DichVu';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styles/theme';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { Fab, Fade, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline /> 
            <Header />
            <Hero />
            <About /> 
            <ProductInfo /> 
            <DichVu /> 
            <Partners /> 
            <Footer /> 
            <ScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon color="secondary"/>
              </Fab>
            </ScrollTop>           
    </ThemeProvider>
  );
}

export default App;
