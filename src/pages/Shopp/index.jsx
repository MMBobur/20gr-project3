import { Box, Grid, Typography } from "@mui/material"
import { ShopMap } from '../../assents/shopmap'
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { FaThLarge } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import rasm from "../../img/bg-img/1.jpg"
import rasm1 from "../../img/core-img/cart.png"
import "./style.css"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Date",
    "Newest",
    "Popular"
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function valuetext(value) {
    return `${value}°C`;
}


function Shopp() {


    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange1 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container rowspacing={2}>
                <Grid item xl={2.5} lg={2.7} md={4} sm={4.8} xs={12}>
                    <Box sx={{
                        background: "#f5f7fa",
                        height: "100%",
                        p: { lg: "100px 40px", md: "100px 40px   ", sm: "100px 15px   ", xs: "100px 40px   " }
                    }}>
                        <Box>

                            <Typography sx={{ fontSize: "16px", color: "#242424", fontWeight: "600", lineHeight: "1.3", m: "0 0 30px" }}>
                                Categories
                            </Typography>
                            <Box >
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "15px 0 15px 20px", color: "#fbb710", cursor: "pointer" }}>
                                    Chairs
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "15px 0 15px 20px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    Beds
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "15px 0 15px 20px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    Accesories
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "15px 0 15px 20px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    Furniture
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "15px 0 15px 20px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    Home Deco
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "15px 0 15px 20px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    Dressings
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "15px 0 15px 20px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    Tables
                                </Typography>

                            </Box>
                        </Box>
                        <Box>

                            <Typography sx={{ fontSize: "16px", color: "#242424", fontWeight: "600", lineHeight: "1.3", m: "20px 0 30px" }}>
                                Brands
                            </Typography>
                            <Box >
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "1px 0 15px 0px", color: "#959595", cursor: "pointer" }}>
                                    <Checkbox {...label} style={{ width: "10px" }} />   Amado
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "1px 0 15px 0px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    <Checkbox {...label} style={{ width: "10px" }} /> Ikea
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "1px 0 15px 0px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    <Checkbox {...label} style={{ width: "10px" }} /> Furniture
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "1px 0 15px 0px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    <Checkbox {...label} style={{ width: "10px" }} />The factory
                                </Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: "600", p: "1px 0 15px 0px", color: "#959595", "&:hover": { color: "#fbb710" }, cursor: "pointer" }}>
                                    <Checkbox {...label} style={{ width: "10px" }} /> Artdeco
                                </Typography>


                            </Box>

                            <Box>

                                <Typography sx={{ fontSize: "16px", color: "#242424", fontWeight: "600", lineHeight: "1.3", m: "20px 0 30px" }}>
                                    Color
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "white", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "grey", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "Black", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "blue", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "red", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "yellow", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "pink", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography sx={{ width: { lg: "120%", md: "120%", sm: "120%", xs: "50px", xl: "40px" }, backgroundColor: "brown", height: { lg: "30px", md: "30px", sm: "30px", xs: "50px", xl: "40px" }, borderRadius: "50%" }}> </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>


                            <Box>
                                <Typography sx={{ fontSize: "16px", color: "#242424", fontWeight: "600", lineHeight: "1.3", m: "50px 0 30px" }}>
                                    Price
                                </Typography>
                            </Box>

                            <Box sx={{ width: "100%" }}>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                            </Box>

                            <Typography sx={{ color: "#959595" }}>
                                $10 - $1000
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xl={9.5} lg={9.3} md={8} sm={7.2} >
                    <Box sx={{ p: { lg: "15px", md: "10px", sm: "0px", xs: "0px" } }}>

                        <Box sx={{ width: "100%", mb: "80px", p: "10px" }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, }}>
                                <Grid item xl={12} lg={12} sx={{ width: "100%", height: "150px", display: "flex" }}>
                                    <Box sx={{ width: "100%", background: "white", height: "120px ", mt: "100px" }}>
                                        <Typography sx={{ mb: "15px", fonttSize: "14px", color: "#242424", textTransform: "uppercase" }}>
                                            SHOWING 1-8 0F 25
                                        </Typography>

                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, }}>
                                                <Grid item xl={6} lg={6} md={12} xs={12} sm={12}>

                                                    <Box sx={{ display: "flex", cursor: "pointer", }}>

                                                        <Typography sx={{ width: "40px", height: "40px", background: "#fbb710", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                                            <FaThLarge />
                                                        </Typography>
                                                        <Typography sx={{ width: "40px", height: "40px", background: "#131212", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                                            <FaBars />
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={12} xs={12} sm={12}>
                                                    <Box sx={{ display: "flex", justifyContent: { lg: "right", md: "start" }, }}>
                                                        <Box sx={{ width:{lg:"160px", md:"160px" , sm:"150px", xs:"150px"}, height: "40px", background: "#f5f7fa", }}>
                                                            <Typography sx={{ fontSize: "14px", display: "flex" , justifyContent:"right",alignItems:"center", width:"100%" }}>
                                                                <span style={{ marginRight: "12px", color: "#959595",  }}>
                                                                    Sort by
                                                                </span>
                                                                <Typography sx={{ width: { lg: "80px", md: "80px" } , fontSize:"14px"}}>
                                                                    <select style={{ width: "100%", height: "40px", border: "none", background: "#f5f7fa" }}>
                                                                        <option selected>Date</option>

                                                                        <option value="2">Newest</option>
                                                                        <option value="3">Popular</option>
                                                                    </select>
                                                                </Typography>
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ width:{lg:"160px", md:"160px" , sm:"120px", xs:"150px"}, height: "40px", background: "#f5f7fa", m: "0 0 0 15px" }}>
                                                            <Typography sx={{ fontSize: "14px", display: "flex", justifyContent:"right", alignItems:"center" }}>
                                                                <span style={{ marginRight: "25px", color: "#959595" }}>
                                                                    View
                                                                </span>
                                                                <Typography sx={{ width: { lg: "80px", md: "80px", sm:"50px" , xs:"70px "}, fontSize:"14px"}}>

                                                                    <select style={{ width: "100%", height: "40px", border: "none", background: "#f5f7fa" }}>
                                                                        <option selected>12</option>

                                                                        <option value="2">24</option>
                                                                        <option value="3">48</option>
                                                                    </select>
                                                                </Typography>
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box >

                            <Box >
                                <Grid container  >
                                    {ShopMap.map((v, i) => (
                                        <Grid item xl={6} lg={6} sm={12} md={12} xs={12} key={i} >
                                            <Box sx={{ display: "flex", justifyContent: "center", p: "10px" }}>
                                                <Box sx={{ width: "100%" }}>
                                                    <Typography sx={{ height: { lg: '470px', md: '470px', sm: "auto", xs: '470px', xl: "81%" } }}>
                                                        <img src={v.rasm} alt="" style={{ width: "100%", height: "100%" }} />
                                                    </Typography>
                                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                                        <Box sx={{ width: "120px" }}>
                                                            <Typography sx={{ width: "80px", height: "3px", background: "#fbb710", position: "relative", m: "20px 0px 15px 0px", display: "block" }}>  </Typography>
                                                            <Typography sx={{ color: "#fbb710", fontSize: "24px", lineHeight: "1", mb: "10px" }}>{v.price}</Typography>
                                                            <Typography sx={{ color: "#242424", fontWeight: "500" }}>{v.nomi}</Typography>
                                                        </Box>
                                                        <Box sx={{ width: "auto", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                                            <Typography >
                                                                <Stack spacing={1}>
                                                                    <Rating name="size-small" defaultValue={5} size="small" />
                                                                </Stack>
                                                                <Typography sx={{ m: "10px 0 0 65px" }}>
                                                                    <img src={rasm1} alt="" />
                                                                </Typography>
                                                            </Typography>


                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}

                                </Grid>
                            </Box>
                        </Box>
                        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
                            <Grid item lg={12} sx={{ display: "flex", width: "100%", height: "150px" }}>
                                <Box sx={{ width: "100%", height: "100%", background: "white", display: "flex", justifyContent: "right" }}>
                                    <Typography sx={{ width: "40px", height: "40px", background: "#fbb710", fontSize: "22px", p: "5px", color: "white" }}>
                                        01.
                                    </Typography>
                                    <Typography sx={{ width: "40px", height: "40px", fontSize: "22px", p: "5px", color: "black" }}>
                                        02.
                                    </Typography>
                                    <Typography sx={{ width: "40px", height: "40px", fontSize: "22px", p: "5px", color: "black" }}>
                                        03.
                                    </Typography>
                                    <Typography sx={{ width: "40px", height: "40px", fontSize: "22px", p: "5px", color: "black" }}>
                                        04.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>


            </Grid>
        </Box>
    )
}

export default Shopp