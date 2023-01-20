import { Box, Grid, Table, TableContainer, Typography } from '@mui/material'
import CarImg1 from '../Product/img/car1.jpg'
import CarImg2 from '../Product/img/car4.jpg'
import CarImg3 from '../Product/img/cart3.jpg'
import './Cart.css'

function Cart() {
    return (
        <Box sx={{
            padding: { xl: '100px 6% 100px 0', lg: '100px 6% 100px 0', md: '100px 0', sm: '100px 0', xs: '100px 0' }
        }}>
            <Box>
                <Box sx={{ marginTop: '50px', padding: '0 15px' }}>
                    <Typography id='CartBoshYoz1'>
                        Shopping Cart
                    </Typography>
                </Box>
                <Box >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ padding: '0 15px' }}>
                            <Box>
                                <TableContainer>
                                    <Table sx={{ minWidth: '100%' }} aria-label="custom pagination table">
                                        <Box id='CartBoshYoz2'>
                                            <Typography id='CartBoshYoz3'>
                                            </Typography>
                                            <Typography id='CartBoshYoz3'>
                                                Name
                                            </Typography>
                                            <Typography id='CartBoshYoz3'>
                                                Price
                                            </Typography>
                                            <Typography id='CartBoshYoz3'>
                                                Quantity
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            scrollbarWidth: '900px'
                                        }}>
                                            <Typography id='CartBoshYoz4'>
                                                <img src={CarImg1} alt="" width={'100%'} />
                                            </Typography>
                                            <Typography id='CartBoshYoz5'>
                                                White Modern Chair
                                            </Typography>
                                            <Typography id='CartBoshYoz6'>

                                                $130
                                            </Typography>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '25%',
                                                padding: '0.75rem'
                                            }}>
                                                <Typography id='CartBoshYoz7'>
                                                    Qty
                                                </Typography>
                                                <Box id='CartBoshYoz8'>
                                                    <Typography id='CartBoshYoz9'>
                                                        -
                                                    </Typography>
                                                    <Typography id='CartBoshYoz9'>
                                                        1
                                                    </Typography>
                                                    <Typography id='CartBoshYoz9'>
                                                        +
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <Typography id='CartBoshYoz4'>
                                                <img src={CarImg2} alt="" width={'100%'} />
                                            </Typography>
                                            <Typography id='CartBoshYoz5'>
                                                Minimal Plant Pot
                                            </Typography>
                                            <Typography id='CartBoshYoz6'>

                                                $10
                                            </Typography>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '25%',
                                                padding: '0.75rem'
                                            }}>
                                                <Typography id='CartBoshYoz7'>
                                                    Qty
                                                </Typography>
                                                <Box id='CartBoshYoz8'>
                                                    <Typography id='CartBoshYoz9'>
                                                        -
                                                    </Typography>
                                                    <Typography id='CartBoshYoz9'>
                                                        1
                                                    </Typography>
                                                    <Typography id='CartBoshYoz9'>
                                                        +
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <Typography id='CartBoshYoz4'>
                                                <img src={CarImg3} alt="" width={'100%'} />
                                            </Typography>
                                            <Typography id='CartBoshYoz5'>
                                                Minimal Plant Pot
                                            </Typography>
                                            <Typography id='CartBoshYoz6'>

                                                $10
                                            </Typography>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '25%',
                                                padding: '0.75rem'
                                            }}>
                                                <Typography id='CartBoshYoz7'>
                                                    Qty
                                                </Typography>
                                                <Box id='CartBoshYoz8'>
                                                    <Typography id='CartBoshYoz9'>
                                                        -
                                                    </Typography>
                                                    <Typography id='CartBoshYoz9'>
                                                        1
                                                    </Typography>
                                                    <Typography id='CartBoshYoz9'>
                                                        +
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ padding: '0 15px' }}>
                            <Box>
                                <Box id='CartBoshYoz10'>
                                    <Typography id='CartBoshYoz11'>
                                        Cart Total
                                    </Typography>
                                    <Box id='CartBoshYoz12'>
                                        <Typography id='CartBoshYoz13'>Subtotal:</Typography>
                                        <Typography id='CartBoshYoz14'>$140.00</Typography>
                                    </Box>
                                    <Box id='CartBoshYoz12'>
                                        <Typography id='CartBoshYoz13'>Delivery:</Typography>
                                        <Typography id='CartBoshYoz14'>Free</Typography>
                                    </Box>
                                    <Box id='CartBoshYoz12'>
                                        <Typography id='CartBoshYoz13'>Total:</Typography>
                                        <Typography id='CartBoshYoz14'>$140.00</Typography>
                                    </Box>
                                    <button id='CartBoshYoz15'>
                                        Checkout
                                    </button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
export default Cart;