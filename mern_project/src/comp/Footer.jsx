import { Box, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}  alignItems={'center'}>
          <Typography variant="h6"marginTop={"55px"} >About Us</Typography>
          <Typography variant="body2" >
          Building a better tomorrow, today..!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Quick Links</Typography>
          <ul>
            <li>
              <Link href="#" color="inherit">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                About
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                Contact
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="h6" marginTop="40px" >Social Media</Typography>
                   <ul style={{display:'flex', flexWrap:"wrap",justifyContent:"center", listStyle:"none", padding:"0", marginRight:"0"}}>
                    <li style={{ marginRight:"16px"}} ><FacebookIcon/></li>
                   <li style={{ marginRight:"16px"}}><InstagramIcon/></li>
                  <li style={{ marginRight:"16px"}}><LinkedInIcon/></li>
                   <li style={{ marginRight:"16px"}}><TwitterIcon/></li>
                   </ul> 

          
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ marginTop: '40px' }}>
        &copy; 2024 My Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;