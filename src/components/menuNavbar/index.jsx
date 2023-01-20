import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import nam from "../navbar/img/logo.png.webp"
import nam2 from "../navbar/img/logo.png"
import { Navname, NavBut, NavIcon, NavIcons } from '../navbar/NabarMap/navbar';
import iconss from "../navbar/img/search.png"
import "./style.css"

const drawerWidth = 320;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} className="bar">
                <Toolbar>
                    <Typography component="div" sx={{ marginLeft: "12px", mr: 2, ...(open && { display: 'none' }) }}>
                        <img src={nam2} alt="" style={{ maxWidth: "80%" }} />
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ color: "#fbb710", marginLeft: "200px", marginTop: "8px" }}
                    >
                        <MenuIcon sx={{ fontSize: "40px" }} />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader >
                    <IconButton className="icon" onClick={handleDrawerClose} sx={{ background: "#fbb710", color: "#fff" }}>
                        {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
                    </IconButton>
                </DrawerHeader>
                <List >
                    <Box sx={{
                        background: "#fff",
                        height: "auto",
                        padding: "60px 75px"
                    }}>
                        <Box sx={{ marginBottom: "100px", display: "block" }}>
                            <Typography>
                                <img src={nam}></img>
                            </Typography>
                        </Box>
                        <Box className='navbar_hov'>
                            {Navname.map((val, v) => (
                                <Box className='activ' key={v} sx={{
                                    padding: "20px 0",
                                    lineHeight: "0.9",
                                }}>
                                    <Link className='navbar_link' to={val.path} style={{
                                        fontSize: "14px",
                                        textDecoration: "none",
                                        color: "#131212",
                                        fontWeight: "600",
                                        "&:hover": { color: "#fbb710" },
                                        position: "relative"
                                    }}>
                                        {val.name}
                                        <Box className='rang'>

                                        </Box>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{
                            marginBottom: "100px",
                            marginTop: "30px"
                        }}>
                            {NavBut.map((val, v) => (
                                <Box key={v} sx={{
                                    marginBottom: "15px",
                                }}>
                                    <Link style={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        maxWidth: "160px",
                                        height: "55px",
                                        color: "#ffffff",
                                        border: "none",
                                        borderRadius: "0",
                                        padding: (val.pad),
                                        fontSize: "18px",
                                        lineHeight: "56px",
                                        backgroundColor: (val.rang),
                                        fontWeight: "400",
                                        "&:hover": {
                                            backgroundColor: (val.hov),
                                            color: "#ffff"
                                        }
                                    }}>
                                        {val.name}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{
                            marginBottom: "100px"
                        }}>
                            {NavIcon.map((val, v) => (
                                <Box key={v} sx={{
                                    padding: "15px 0",
                                }}>
                                    <Link path='navbar' to={val.path} style={{
                                        textDecoration: "none",
                                        color: "#131212",
                                        fontSize: "16px",
                                        lineHeight: "1",
                                        textTransform: "uppercase",
                                        fontWeight: "400",
                                        "&:hover": {
                                            color: "#fbb710"
                                        }
                                    }}>
                                        <img src={val.img} alt="" style={{ marginRight: "10px", maxWidth: "100%" }} />
                                        {val.name}
                                        <span style={{ color: "#9e9e9e" }}>{val.spa}</span>
                                    </Link>
                                </Box>
                            ))}
                            <Box sx={{
                                padding: "15px 0",
                            }}>
                                <Link  style={{
                                    textDecoration: "none",
                                    color: "#131212",
                                    fontSize: "16px",
                                    lineHeight: "1",
                                    textTransform: "uppercase",
                                    fontWeight: "400",
                                    "&:hover": {
                                        color: "#fbb710"
                                    }
                                }}>
                                    <img src={iconss} alt="" style={{ marginRight: "10px", maxWidth: "100%" }} />
                                    Search

                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                {NavIcons.map((val, v) => (
                                    <Grid key={v} item xs={3} lg={3} md={3} sm={3} xl={3}>
                                        <Box sx={{
                                            justifyContent: "space-between",
                                            display: "flex"
                                        }}>
                                            <Link style={{
                                                textDecoration: "none",
                                                color: "#b5b5b5",
                                                display: "inline-block",
                                                "&:hover": {
                                                    color: "#fbb710"
                                                }
                                            }}>
                                                {val.icon}
                                            </Link>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box >

                </List>

            </Drawer>
        </Box>
    );
}