import React, { useEffect } from 'react';
import {Box} from '@mui/material';
import Aos from 'aos';
import "aos/dist/aos.css";


function About() {
  useEffect(() => {Aos.init({duration: 2000});
}, [])
  return (
    <div id="about" data-aos="fade-up">
      <Box sx={{backgroundColor: "#ede7f6", paddingTop: "20px", paddingBottom: "40px"}} >
      <Box sx={{ flexGrow: 1, color: "#800080", margin: "auto", width: "90%"}}>

      <p style={{ marginTop: "40px", fontWeight: "600", fontSize: "40px" }}>Về DPZ</p>
      <p style={{ fontWeight: "400", fontSize: "20px" }}>DpZ cung cấp giải pháp dữ liệu thông minh dựa trên những công nghệ ưu việt
        để tiếp sức cho sự đột phá của các doanh nghiệp.Chúng tôi tăng cường hệ thống của bạn,
        giúp các phòng nhóm cộng tác dễ dàng cung cấp dịch vụ trải nghiệp khách hàng tốt hơn.
      </p>
    </Box>
    </Box>
  </div>

  )
}

export default About