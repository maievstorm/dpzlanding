import hero_img from '../../images/hero_img.jpeg'
import {Grid, Button, Stack, Box, Typography,
        styled,
        TextField,
        Modal,
        Backdrop,
        Fade
       } from '@mui/material'
import logo from '../../images/logodpz_big.png'
import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function Hero() {
  const CSSTextField = styled(TextField)(({ theme }) => ({
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: theme.palette.secondary.main,
    // },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  }));
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box mb={0} id="hero">
      <Box>
        <Typography variant="h4" sx={{ 
              paddingTop: "120px",
              color: "#800080",
              minwidth: "500px",
              paddingLeft: "40px",
              paddingBottom: "0",
              textTransform: 'uppercase',
              fontWeight: '500'
              }}>Giải pháp dữ liệu cho mọi doanh nghiệp </Typography>
      </Box>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={5}>
          <div style={{ margin: "70px 0px 0px 50px"}} >
            <p style={{textAlign: "left"}}>
              <div>
                <img src={logo} alt="logo" style={{width: "50%", height: "50%"}} />
              </div> 
            </p>
            <Stack spacing={2} direction="row" sx={{ marginTop: "30px"}}>
              <Button variant="contained" color="secondary"><a href="#about" style={{textDecoration: 'none', color: '#fff'}}>Về chúng tôi</a></Button>
              <Button variant="outlined" 
                      color="secondary"
                      onClick={handleOpen}
              >Đến với chúng tôi</Button>
            </Stack>
            {open && 
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'background.paper',
                  boxShadow: 10,
                  p: 4
              }}>
                <div style={{textAlign: 'right'}}>
                  <CloseOutlinedIcon color='secondary' 
                  sx={{cursor: 'pointer'}}
                  onClick={() => setOpen(false)} />
                </div>
                <Typography id="transition-modal-title" 
                            variant="h6" 
                            component="h2" 
                            textAlign="center" 
                            color="secondary" 
                            mb={3}
                            mt={2} 
                >
                  Đăng Ký Liên Hệ
                </Typography>
    
                <Box
                  component="form"
                  noValidate
                  sx={{
                    '& > :not(style)': { m: 1, width: '60ch' },
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '30px',
                    marginRight: '30px',
                    boxSizing: 'border-box',
                    overflow: 'scroll'
                  }}
                  // sx={{
                  //   display: 'grid',
                  //   gridTemplateColumns: { sm: '1fr 1fr' },
                  //   gap: 2,
                  // }}
                >
                    <CSSTextField label="Email" 
                                color='secondary' 
                                focused 
                                />
                  
                  <CSSTextField label="Tên đăng nhập" color='secondary' />
                  <CSSTextField label="Mật khẩu" color='secondary' />
                  <CSSTextField label="Số điện thoại" color='secondary' />
                  <div style={{textAlign:'center', marginTop:'20px', marginBottom: '20px'}}>
                  <Button 
                      variant='contained' 
                      color='secondary'
                      onClick={() => setOpen(false)}
                  >Gửi yêu cầu</Button>
                  </div>
                </Box>
              </Box>
            </Fade>
    
          </Modal>
            }
          </div>
        </Grid>
        <Grid item xs={7}>
          <img src={hero_img} 
               alt="hero" 
               style={{display: "flex", 
                       height: "60%",
                       width: "100%",
                       margin: "70px 0px 10px 0px",
                      }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero