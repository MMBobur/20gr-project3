import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"

function Futter() {
    return (
        <Box sx={{
            backgroundColor: "#3c3c3c",
            paddingTop: "100px",
        }}>
            <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={11} lg={6} md={6} sm={11} xl={4}>
                    <Box sx={{ marginBottom: "100px" }}>
                        <Typography variant='h2' sx={{
                            fontSize: "36px",
                            marginBottom: "10px",
                            color: "#fff",
                            lineHeight: "1.3",
                            fontWeight: "400",
                        }}>
                            Subscribe for a <span style={{ color: "#fbb710" }}>25% Discount</span>
                        </Typography>
                        <Typography sx={{
                            color: "#b3b1b1",
                            marginBottom: "0",
                            fontSize: "16px",
                            lineHeight: "1.9",
                            fontWeight: "400",
                        }}>
                            Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi
                            vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={11} lg={4} md={5} sm={11} xl={3}>
                    <Box sx={{ marginBottom: "100px",marginTop:"20px" }}>
                        <Box sx={{
                            position: "relative"
                        }}>
                        <input type="email" name="email" placeholder="Your E-mail" style={{
                            width: "100%",
                            height: "50px",
                            backgroundColor: "#fff",
                            color: "#afafaf",
                            fontSize: "14px",
                            fontStyle: "italic",
                            border: "none",
                            padding: "0 30px",
                        }}/>
                        <input type="submit" value="Subscribe" style={{
                           height: "50px",
                           backgroundColor: "#fbb710",
                           color: "#fff",
                           fontSize: "14px",
                           padding: "0 30px",
                           cursor: "pointer",
                           position: "absolute",
                           top: "0",
                           right:"0",
                           border: "none",
                        }}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}
export default Futter