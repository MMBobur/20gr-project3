import { Box, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CheckImg from './paypal.png'
import './Checkout.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkout() {
    return (
        <Box sx={{
            padding: { xl: '100px 6% 100px 0', lg: '100px 6% 100px 0', md: '100px 0', sm: '100px 0', xs: '100px 0' },
            width: '100%',
        }}>
            <Box>
                <Box sx={{ marginTop: '50px', padding: '0 15px' }}>
                    <Typography id='checkyozbosh1'>
                        Checkout
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ width: '100%' }}>
                                    <Grid container >
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} id='checkyozbosh3'>
                                            <input type="text" placeholder='First Name' id='checkyozbosh4' />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} id='checkyozbosh3'>
                                            <input type="text" id='checkyozbosh4' placeholder='Last Name' />
                                        </Grid>
                                    </Grid>
                                    <Box id='checkyozbosh3'>
                                        <input type="text" id='checkyozbosh4' placeholder='Company Name' />
                                    </Box>
                                    <Box id='checkyozbosh3'>
                                        <input type="text" id='checkyozbosh4' placeholder='Email' />
                                    </Box>
                                    <Box id='checkyozbosh3'>
                                        <input type="text" id='checkyozbosh4' placeholder='United States' />
                                    </Box>
                                    <Box id='checkyozbosh3'>
                                    </Box>
                                    <Box id='checkyozbosh3'>
                                        <input type="text" id='checkyozbosh5' placeholder='Address' />
                                    </Box>
                                    <Box id='checkyozbosh3'>
                                        <input type="text" id='checkyozbosh4' placeholder='Twon' />
                                    </Box>
                                    <Grid container >
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} id='checkyozbosh3'>
                                            <input type="text" placeholder='Zip Code' id='checkyozbosh4' />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} id='checkyozbosh3'>
                                            <input type="text" placeholder='Phone No' id='checkyozbosh4' />
                                        </Grid>
                                    </Grid>
                                    <Box id='checkyozbosh3'>
                                        <textarea cols="30" rows="10" placeholder="Leave a comment about your order" id='checkyozbosh6' />
                                    </Box>
                                </Box>
                                <Box id='checkceck1'>
                                    <input type="checkbox" id='checkceck2' />
                                    <Typography id='checkceck3'>
                                        Create an accout
                                    </Typography>
                                </Box>
                                <Box id='checkceck1'>
                                    <input type="checkbox" id='checkceck2' />
                                    <Typography id='checkceck3'>
                                        Ship to a different address
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ padding: '0 15px' }}>
                            <Box id='checkyonzz1'>
                                <Typography id='checkyonzz2'>
                                    Cart Total
                                </Typography>
                                <Box id='checkyonzz3'>
                                    <Box id='checkyonzz4'>
                                        <Typography id='checkyonzz5'>Subtotal:</Typography>
                                        <Typography id='checkyonzz6'>$140.00</Typography>
                                    </Box>
                                    <Box id='checkyonzz4'>
                                        <Typography id='checkyonzz5'>Delivery:</Typography>
                                        <Typography id='checkyonzz6'>Free</Typography>
                                    </Box>
                                    <Box id='checkyonzz4'>
                                        <Typography id='checkyonzz5'>Total:</Typography>
                                        <Typography id='checkyonzz6'>$140.00</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex' }} id='checkyonzz7'>
                                        <Checkbox {...label} defaultChecked />
                                        <Typography id='checkyonzz8'>
                                            Cash on Delivery
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }} id='checkyonzz7'>
                                        <Checkbox  />
                                        <Typography id='checkyonzz8'>
                                        Paypal
                                        </Typography>
                                        <Typography>
                                            <img src={CheckImg} alt="" style={{
                                                width:'66px',
                                                height:'21px',
                                                marginLeft:'15px'
                                            }} />
                                        </Typography>
                                    </Box>
                                    <Box sx={{marginTop:'100px'}}>
                                        <button id='checkyonzz9'>Checkout</button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
export default Checkout;