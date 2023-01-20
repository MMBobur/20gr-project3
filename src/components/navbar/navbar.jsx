import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import nam from "./img/logo.png.webp"
import { Navname, NavBut, NavIcon, NavIcons } from './NabarMap/navbar';
import PersistentDrawerLeft from '../menuNavbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import iconss from "../navbar/img/search.png"
import "./style.css"

function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" } }}>
                <Box sx={{
                    width: { lg: "320px", md: "320px", sm: "320px", xs: "0px" },
                    background: "#fff",
                    height: "auto",
                    padding: "60px 75px",
                }}>
                    <Box sx={{ marginBottom: "100px", display: "block" }}>
                        <Typography>
                            <img src={nam}></img>
                        </Typography>
                    </Box>
                    <Box className='navbar_hov'>
                        {Navname.map((val, vi) => (
                            <Box className='activ' key={vi} sx={{
                                padding: "20px 0",
                                lineHeight: "0.9",
                            }}>
                                <Link to={val.path} className='navbar_link' style={{
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
                        {NavBut.map((val, vi) => (
                            <Box key={vi} sx={{
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
                        {NavIcon.map((val, vi) => (
                            <Box key={vi} sx={{
                                padding: "15px 0",
                            }}>
                                <Link to={val.path} style={{
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
                            <Link onClick={handleShow} className="me-2" style={{
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
                            <Offcanvas placement="top" id="modal" show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                        <Grid item xs={11.6} lg={9.4} md={11.2} sm={11.4} xl={7.5}>
                                            <form action="#" method="get" style={{
                                                position: "relative",
                                                zIndex: "1",
                                                boxShadow: "0 0 5px rgb(0 0 0 / 8%)",
                                                marginTop:"5%"
                                            }}>
                                                <input type="search" name="search" id="search" placeholder="Type your keyword..." style={{
                                                    width: "100%",
                                                    height: "60px",
                                                    border: "none",
                                                    paddingLeft: "50px",
                                                    fontSize: "14px",
                                                    color: "#6b6b6b",
                                                }}/>
                                                    <button type="submit" style={{
                                                        position: "absolute",
                                                        top: "0",
                                                        left: "0",
                                                        border: "none",
                                                        width: "50px",
                                                        height: "60px",
                                                        zIndex: "10",
                                                        cursor: "pointer",
                                                        backgroundColor: "transparent",
                                                        textAlign: "center",
                                                    }}><img src={iconss} alt="" style={{maxWidth:"100%",height:"auto"}}/></button>
                                            </form>
                                        </Grid>
                                    </Grid>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Box>
                    </Box>
                    <Box>
                        <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                            {NavIcons.map((val, va) => (
                                <Grid key={va} item xs={3} lg={3} md={3} sm={3} xl={3}>
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
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none", xl: "none" },width: {xs: "0%", }}}>
                <PersistentDrawerLeft />
            </Box>
        </>
    )
}
export default Navbar