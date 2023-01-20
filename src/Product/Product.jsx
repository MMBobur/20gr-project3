import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Car1 from './img/car1.jpg';
import Car2 from './img/car2.jpg';
import Car3 from './img/car3.jpg';
import Car4 from './img/car4.jpg';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Product.css';
import TextField from '@mui/material/TextField';
import { FaStar,FaCaretUp,FaCaretDown } from "react-icons/fa";

function Product() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{
            padding: { xl: '100px 6% 100px 0', lg: '100px 6% 100px 0', md: '100px 0', sm: '100px 0', xs: '0px' }
        }}>
            <Box>
                <Box sx={{ padding: '0 15px' }}>
                    <Box sx={{
                        display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' },
                        marginTop: '50px',
                        padding: '12px 0px 12px 16px',
                        alignItems: 'center',
                        marginBottom: '16px'
                    }}>
                        <Box sx={{ display: 'flex' ,alignItems:'center'}}>
                            <Typography id='protepyoz1'>
                                HOME
                            </Typography>
                            <Typography id='protepyoz2'>
                            >
                            </Typography>
                            <Typography id='protepyoz1'>
                                FURNITURE
                            </Typography>
                            <Typography id='protepyoz2'>
                            >
                            </Typography>
                            <Typography id='protepyoz1'>
                                CHAIRS
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex',alignItems:'center' }}>
                            <Typography id='protepyoz2'>
                            >
                            </Typography>
                            <Typography id='protepyoz3'>
                                WHITE MODERN CHAIR
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{ padding: '0 12px' }}>
                            <Box sx={{ width: '100%', paddingBottom: '70px' }}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <TabPanel value="1" sx={{ padding: '0 3px' }}>
                                                <Box>
                                                    <Typography sx={{ cursor: 'zoom-in' }}>
                                                        <img src={Car1} alt="" width={'100%'} />
                                                    </Typography>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <Box>
                                                    <Typography>
                                                        <img src={Car2} alt="" width={'100%'} />
                                                    </Typography>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <Box>
                                                    <Typography>
                                                        <img src={Car3} alt="" width={'100%'} />
                                                    </Typography>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value="4">
                                                <Box>
                                                    <Typography>
                                                        <img src={Car4} alt="" width={'100%'} />
                                                    </Typography>
                                                </Box>
                                            </TabPanel>
                                            <Box id='TabZzz' sx={{ marginTop: '15px !important' }}>
                                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                    <Tab label={<img src={Car1} id='TabPasRas2' />} value="1" id='TabPasRas' />
                                                    <Tab label={<img src={Car2} id='TabPasRas2' />} value="2" id='TabPasRas' />
                                                    <Tab label={<img src={Car3} id='TabPasRas2' />} value="3" id='TabPasRas' />
                                                    <Tab label={<img src={Car4} id='TabPasRas2' />} value="4" id='TabPasRas' />
                                                </TabList>
                                            </Box>
                                        </TabContext>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <Box>
                                <Box sx={{
                                    padding: '0 15px'
                                }}>
                                    <Typography id='proidbosh1'>
                                    </Typography>
                                    <Typography id='proidbosh2'>
                                        $180
                                    </Typography>
                                    <Typography id='proidbosh3'>
                                        White Modern Chair
                                    </Typography>
                                    <Box sx={{
                                        marginBottom: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}>
                                        <Typography sx={{ display: 'flex', width: '50%' }}>
                                            <FaStar id='proidbosh4' />
                                            <FaStar id='proidbosh4' />
                                            <FaStar id='proidbosh4' />
                                            <FaStar id='proidbosh4' />
                                            <FaStar id='proidbosh4' />
                                        </Typography>
                                        <Typography id='proidbosh5'>
                                            Write A Review
                                        </Typography>
                                    </Box>
                                    <Typography id='proidbosh6'>
                                        <Typography id='proidbosh7'></Typography>
                                        In Stock
                                    </Typography>
                                    <Box id='proidbosh8'>
                                        <Typography id='proidbosh9'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?
                                        </Typography>
                                    </Box>
                                    <Box id='proidbosh10'>
                                        <Typography id='proidbosh11'>
                                            Qty
                                        </Typography>
                                        <Box id='proidbosh12'>
                                            <TextField
                                                id="standard-number"
                                                defaultValue="1"
                                                type="number"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant="standard"
                                            />
                                            <Box id='asfdgfhj'>
                                                <FaCaretUp style={{
                                                    position:'absolute',
                                                    marginLeft:'-13.5px',
                                                    marginTop:'-10px',
                                                    fontSize:'12px'
                                                }} />
                                                <FaCaretDown style={{
                                                    position:'absolute',
                                                    marginLeft:'-13.5px',
                                                    marginTop:'-4px',
                                                    fontSize:'12px'
                                                }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <button id='proidbosh13'>
                                        Add to cart
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
export default Product;