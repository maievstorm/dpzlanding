import React from "react";
import {
    Toolbar,
    Typography,
    Grid,
    Box,
    List,
    ListItemText,
    ListItem
} from "@mui/material";


const Footer = () => 
    <div data-aos="fade-up">
    <Box sx={{ marginTop: "50px" ,backgroundColor: "#800080"}}>
        <Grid container spacing={2} sx={{textAlign: "left", margin: "20px auto"}}>
            <Grid item xs>
                <List sx={{paddingTop: "20px"}}>
                    <ListItem key="products">
                        <ListItemText primary={<Typography ml={3} mb={-2} fontSize={16} fontWeight={500} sx={{color:"#fff"}} disablePadding>Sản phẩm</Typography>}
                                        />

                    </ListItem>
                    {['Dpz Platform', 'Dpz Data Services', 'Apache Kafka on Dpz', 'Dpz Connect', 'DpZ Teams', 'Pricing'].map((text, index) => (
                    <ListItem key={text} href="#">
                            <ListItemText primary={<Typography fontSize={13} ml={3} mb={-2} sx={{color:"#fff"}} disablePadding>{text}</Typography>}
                                        />
                    </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs>
                <List sx={{paddingTop: "20px"}}>
                    <ListItem key="resources">
                        <ListItemText primary={<Typography ml={3} mb={-2} fontSize={16} fontWeight={500} sx={{color:"#fff"}} disablePadding>Tài Nguyên</Typography>}
                                        />

                    </ListItem>
                    {['Documentation', 'Training & Education', 'Blog', 'Get Started'].map((text, index) => (
                    <ListItem key={text}>
                            <ListItemText primary={<Typography fontSize={13} ml={3} mb={-2} sx={{color:"#fff"}} disablePadding>{text}</Typography>}
                                        />
                    </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs>
                <List sx={{paddingTop: "20px"}}>
                    <ListItem key="about">
                        <ListItemText primary={<Typography ml={3} mb={-2} fontSize={16} fontWeight={500} sx={{color:"#fff"}} disablePadding>Về DpZ</Typography>}
                                        />

                    </ListItem>
                    {['Về Chúng Tôi', 'DpZ là gì', 'Khách Hàng của DpZ', 'Sự Nghiệp', 'Đối Tác'].map((text, index) => (
                    <ListItem key={text}>
                            <ListItemText primary={<Typography fontSize={13} ml={3} mb={-2} sx={{color:"#fff"}} disablePadding>{text}</Typography>}
                                        />
                    </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs>
                <List sx={{paddingTop: "20px"}}>
                    <ListItem key="support">
                        <ListItemText primary={<Typography ml={3} mb={-2} fontSize={16} fontWeight={500} sx={{color:"#fff"}} disablePadding>Hỗ Trợ</Typography>}
                                        />
                    </ListItem>
                    {['DpZ Support', 'Hỗ Trợ hạng Ưu', 'Liên Hệ'].map((text, index) => (
                    <ListItem key={text}>
                            <ListItemText primary={<Typography fontSize={13} ml={3} mb={-2} sx={{color:"#fff"}} disablePadding>{text}</Typography>}
                                        />
                    </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
        <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="caption" sx={{fontWeight: "500", fontSize: "13px", color: "#fff"}}>©2022 DpZ</Typography>
        </Toolbar>
    </Box>
    </div>
        

export default Footer;