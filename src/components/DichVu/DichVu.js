import {useEffect} from 'react';
import {Box, 
        Grid,
        Avatar,
        Typography,
        List,
        ListItemText,
        ListItem,
        ListItemIcon
      } from '@mui/material';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import Aos from 'aos';
import "aos/dist/aos.css";


function DichVu() {
  useEffect(() => {Aos.init({duration: 2000});
}, [])
  const serviceItems = [
    {
      id: 1,
      icon: <DiamondOutlinedIcon sx={{ fontSize: 100 }} color="secondary" />,
      name: 'Khai thác',
      subsections: ['Trí Tuệ Nhân Tạo', 'Xây Dựng BCTC', 'Trực Quan Dữ Liệu']
    },
    {
      id: 2,
      icon: <BackupTableOutlinedIcon sx={{ fontSize: 100 }} color="secondary" />,
      name: 'Tích Hợp',
      subsections: ['Lưu Chuyển Dữ Liệu', 'Truyền Tải Trực Tiếp', 'Sao Lưu']
    },
    {
      id: 3,
      icon: <CloudQueueOutlinedIcon sx={{ fontSize: 100 }} color="secondary" />,
      name: 'Nền Tảng',
      subsections: ['Lưu Trữ Đám Mây', 'Kho Dữ Liệu', 'Big Data']
    }
  ]
  // backgroundColor: "#ede7f6"
  return (

    <div id="dichvu" data-aos="fade-up"> 
    <Box sx={{backgroundColor: "#fff", paddingTop: "50px", paddingBottom: "30px"}}>
      <Box sx={{ flexGrow: 1, color: "#800080", margin: "auto", width: "90%"}}>
      <p style={{ marginTop: "40px", fontWeight: "600", fontSize: "40px" }}>Dịch vụ của DPZ</p>
    </Box>

    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container 
            spacing={3} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              minHeight: '500px'
            }}>
        {
          serviceItems.map((item) => (
            <Grid item 
                  key={item.id}
                  sx={{
                    textAlign: 'center',
                    padding: '30px',
                    borderRadius: '10px',
                    margin: '10px !important',
                    alignItems: 'stretch'
                  }}
                  >
            <Typography 
                    color="secondary" 
                    fontWeight={500} 
                    fontSize={22} 
                    paddingLeft={6}
                    paddingBottom={3}
                    sx={{textTransform: "uppercase"}}
                    >{item.name}</Typography>
              <Box sx={{paddingLeft: '70px'}}>
                <Avatar sx={{ backgroundColor: "#ede7f6", width: 130, height: 130 }}>
                  {item.icon}
                </Avatar>
              </Box>
    
              
              <List>
                  {item.subsections.map((subsection) => (
                    <ListItem>
                      <ListItemIcon>
                        <CheckOutlinedIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText primary={<Typography color='secondary'>
                        {subsection}
                        </Typography>}>
                      </ListItemText>
                    </ListItem>
                  ))}
              </List>
              
            </Grid>
          ))
        }
      </Grid>
        
      </Box>
    </Box>
    </div>
  )
}

export default DichVu;