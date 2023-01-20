import * as React from 'react';
import { Box, Grid, Typography, Link } from "@mui/material"
import imgnam from "../navbar/img/logo2.png"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import "./style.css"

const pages = ['Shop', 'Product', 'Cart', 'Checkout'];

function PastNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{
            backgroundColor: "#252525",
            padding: "80px 0",
        }}>
            <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={11} lg={3} md={3} sm={11} xl={3}>
                    <Box>
                        <Box>
                            <Link href='#' sx={{
                                textDecoration: "none",
                                outline: "0 solid transparent",
                                color: "#131212",
                                fontWeight: "400",
                                fontSize: "12px"
                            }}>
                                <img src={imgnam} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                            </Link>
                        </Box>
                        <Typography sx={{
                            fontSize: "12px",
                            color: "rgba(255, 255, 255, 0.4)",
                            marginTop: "10px",
                            lineHeight: "1.9",
                            fontWeight: "400",
                        }}>
                            Copyright
                            ©2023 All rights reserved | This template is made with
                            by Colorlib &amp; Re-distributed by
                            Themewagon
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={11} lg={7} md={8} sm={11} xl={4}>
                    <Box sx={{ marginTop: "20px" }}>
                        <AppBar position="static" sx={{ backgroundColor: "#252525", border: "none", boxShadow: "none" }}>
                            <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                        <List
                                            component="nav"
                                            aria-labelledby="nested-list-subheader"
                                            sx={{ textAlign: "start", }}
                                        >
                                            <ListItemButton
                                                onClick={handleClick}
                                                className="menuicon"
                                                sx={{
                                                    backgroundColor: "#fbb710",
                                                    borderRadius: "0",
                                                    fontSize: "1.25rem",
                                                    lineHeight: "1",
                                                    padding: "8px",

                                                }}
                                            >
                                                {open ? <MenuIcon sx={{ fontSize: "16px" }} /> : <MenuIcon />}
                                            </ListItemButton>
                                            <Collapse in={open} timeout="auto" unmountOnExit >
                                                <List component="div" disablePadding>
                                                    <ListItemButton sx={{
                                                        pl: 4, display: "block",color:"#fbb710" , "&:hover": {
                                                            color: "#fbb710"
                                                        }
                                                    }} className="menutext">
                                                        Home
                                                    </ListItemButton>
                                                    {pages.map((page) => (
                                                        <ListItemButton key={page} sx={{ pl: 4, display: "block",
                                                        "&:hover": {
                                                            color: "#fbb710"
                                                        }
                                                        }} className="menutext">
                                                            {page}
                                                        </ListItemButton>
                                                    ))}
                                                </List>
                                            </Collapse>
                                        </List>
                                    </Box>
                                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: "end", justifyContent: "end" }}>
                                        <Link href='#'
                                            sx={{
                                                my: 2, color: '#fbb710', display: 'block',
                                                padding: "10px 30px",
                                                textTransform: "uppercase",
                                                fontSize: "15px",
                                                textDecoration: "none",
                                                "&:hover": {
                                                    color: "#fbb710"
                                                }
                                            }}
                                        >
                                            Home
                                        </Link>
                                        {pages.map((page) => (
                                            <Link href='#'
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{
                                                    my: 2, color: 'white', display: 'block',
                                                    padding: "10px 30px",
                                                    textTransform: "uppercase",
                                                    fontSize: "15px",
                                                    textDecoration: "none",
                                                    fontWeight: "500px",
                                                    "&:hover": {
                                                        color: "#fbb710"
                                                    }
                                                }}
                                            >
                                                {page}
                                            </Link>
                                        ))}
                                    </Box>
                                </Toolbar>
                            </Container>
                        </AppBar>
                    </Box>
                </Grid>
            </Grid>

        </Box >
    )
}
export default PastNavbar