import React, { useEffect } from 'react';
import { Box, 
         Grid, 
         Card,
         CardMedia,
} from '@mui/material';
import acb from '../../images/partners/acb.png';
import aws from '../../images/partners/aws.png';
import ibm from '../../images/partners/ibm.jpeg';
import mic from '../../images/partners/microsoft.jpg';
import orc from '../../images/partners/oracle.png';
import shb from '../../images/partners/shb.png';
import vietcom from '../../images/partners/vietcombank.png';
import vietin from '../../images/partners/vietinbank.jpeg';
import woori from '../../images/partners/wooribank.jpeg';

import AOS from "aos";
import "aos/dist/aos.css";

function Partners() {
  // backgroundColor: "#ede7f6"

  useEffect(()=>{
    AOS.init({duration: 2000})
    }, [])
    
 

  const partners = {
      global: [aws, ibm, mic, orc],
      bank: [acb, shb, vietcom, vietin, woori]
}
  

  return (
    <div id="partners" data-aos="fade-up">
      <Box sx={{backgroundColor: "#fff", paddingTop: "0", paddingBottom: "0", marginTop: "-90px"}}>
        <Box sx={{ flexGrow: 1, color: "#800080", margin: "auto", width: "90%"}}>

        <p style={{ marginTop: "40px", fontWeight: "600", fontSize: "40px" }}>Đối tác</p>
      </Box>
        <Box sx={{ width: '100%', marginBottom: '40px', marginTop: '60px' }}>
          <Grid container rowSpacing={2}>
            {
              partners.global.map((company) => (
                <Grid item xs={2} 
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        marginLeft: '55px',
                        padding: '10px',
                        marginBottom: '30px',
                        }}>
                  <Card elevation={0}>
                    <CardMedia component="img" image={company} 
                              alt="partners" 
                              sx={{backgroundColor: "#fff"}}/>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Box>
        <Box sx={{ width: '100%', marginBottom: '150px' }}>
          <Grid container rowSpacing={2}>
            {
              partners.bank.map((company) => (
                <Grid item xs={2} 
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        marginLeft: '25px',
                        }}>
                  <Card elevation={0}>
                    <CardMedia component="img" image={company} 
                              alt="partners" 
                              sx={{backgroundColor: "#fff",
                              }}/>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>


  </div>

  )
}

export default Partners