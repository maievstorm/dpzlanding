import React, { useEffect } from 'react';
import { Grid, 
         Typography, 
         Box,
         Paper,
         styled
} from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

import AOS from "aos";
import "aos/dist/aos.css";

function ProductInfo() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  const sectionItems = [
    {
      id: 1,
      icon: <CloudQueueOutlinedIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Truy cập Thế giới Dữ liệu và Dịch vụ',
      sentence:
        `Dễ dàng khám phá và chia sẻ dữ liệu live an toàn với doanh nghiệp, 
        khách hàng, đối tác kinh doanh, và các tổ chức tham gia 
        trên Đám mây dữ liệu.`,
    },
    {
      id: 2,
      icon: <ShieldOutlinedIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Hệ thống Quản trị và Bảo mật Dữ liệu Hiện đại',
      sentence: 
        `Hợp nhất dữ liệu để tuân thủ các quy định về quyền riêng tư 
        của dữ liệu như GDPR và CCPA.
      `,
    },
    {
      id: 3,
      icon: <ShowChartOutlinedIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Xây dựng và Thúc đẩy Doanh nghiệp của bạn Phát triển với Dữ liệu', 
      sentence: 
        `Dân chủ hóa việc phân tích dữ liệu trên toàn doanh nghiệp, 
        qua đó giúp người dùng ở mọi cấp độ và chuyên môn đưa ra quyết định 
        dựa vào dữ liệu. 
        `,
    },
    {
      id: 4,
      icon: <AllInclusiveIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Kết nối Không giới hạn với Nền tảng của DpZ', 
      sentence: 
        `Tích hợp, phân tích và chia sẻ dữ liệu đã được lưu trữ với 
        nền tảng quản lý gần như bằng không mang lại quy mô và tính đồng 
        thời hầu như không giới hạn.`,
    }
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderColor: '#ede7f6'
  }));


  return (
    <div data-aos="fade-up" id="productinfo">
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff", paddingLeft: "40px", paddingRight: "40px" }}>
      <Box sx={{ margin: "30px auto" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }} alignItems="stretch">
          
          { sectionItems.map((item) => 
            (<Grid item 
                    xs={6}>
              <Item 
                elevation={0} 
                variant='outlined'
                sx={{
                  // backgroundColor: '#f2f0f1',
                  display: 'block',
                  minWidth: '200px',
                  borderRadius: '10px',
                  margin: '15px !important',
                  height: '100%',                  
                }}>
              {item.icon}
            <Typography color="secondary" fontWeight={500} fontSize={22} mb={2}>{item.name}</Typography>
            <Typography fontSize={17.2}>{item.sentence}</Typography>
              </Item>
            </Grid>))
          }
        </Grid>
      </Box>
    </Box>
    </div>
  )
}

export default ProductInfo