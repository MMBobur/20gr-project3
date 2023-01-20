import React from 'react'
import { Box, Grid, Link, Typography } from "@mui/material"
import rasm from "../../img/bg-img/1.jpg"
import { Data, Data1, Data2 } from '../../assents/homemap'
function Home() {
  return (
    <Box sx={{ mt: { lg: "0", md: "0", sm: "0", xs: "80px" } }}>
      <Box>
        <Grid container spacing={2}>

          <Grid lg={4} md={6} sm={12} xs={12} sx={{ background: "rgba(60, 60, 60, 0.7)" }}>
            {Data.map((v, i) => (
              <Grid container spacing={0} key={i}>
                <Link href='/shopp'>

                  <Grid lg={12} sx={{
                    height: "100%",
                    display: "flex",
                    background: "rgba(60, 60, 60, 0.7)",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: "0.4",
                      width: "100%",
                      height: "100%",
                      zIndex: "1",
                      color: "white",
                      transition: "0.3s"
                    }
                  }}>
                    <img src={v.rasm} alt="" style={{ width: "100%", height: "auto", }} />
                    <Box sx={{ position: "absolute" }}>
                      <Typography sx={{ width: "80px", height: "3px", background: "#fbb710", position: "relative", m: "50px 0px 15px 50px", display: "block" }}></Typography>
                      <Typography sx={{ ml: "50px", fontSize: "16px", color: "#6d6d6d" }}>{v.price}</Typography>
                      <Typography sx={{ ml: "50px", fontSize: "24px", color: "#242424", fontWeight: "500" }}>{v.name}</Typography>
                    </Box>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </Grid>

          <Grid lg={4} md={6} sm={12} xs={12} sx={{ background: "rgba(60, 60, 60, 0.7)" }}>
            {Data1.map((v, i) => (
              <Grid container spacing={0} key={i}>
                <Link href='/shopp'>

                  <Grid lg={12} sx={{
                    height: "100%",
                    display: "flex",
                    background: "rgba(60, 60, 60, 0.7)",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: "0.4",
                      width: "100%",
                      height: "100%",
                      zIndex: "1",
                      color: "white",
                      transition: "0.3s"

                    }
                  }}>
                    <img src={v.rasm} alt="" style={{ width: "100%", height: "auto", }} />
                    <Box sx={{ position: "absolute" }}>
                      <Typography sx={{ width: "80px", height: "3px", background: "#fbb710", position: "relative", m: "50px 0px 15px 50px", display: "block" }}></Typography>
                      <Typography sx={{ ml: "50px", fontSize: "16px", color: "#6d6d6d" }}>{v.price}</Typography>
                      <Typography sx={{ ml: "50px", fontSize: "24px", color: "#242424", fontWeight: "500" }}>{v.name}</Typography>
                    </Box>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid lg={4} md={6} sm={12} xs={12} sx={{ background: "rgba(60, 60, 60, 0.7)" }}>
            {Data2.map((v, i) => (
              <Grid container spacing={0} key={i}>
                <Link href='/shopp'>

                  <Grid lg={12} sx={{
                    height: "100%",
                    display: "flex",
                    cursor: "pointer",
                    background: "rgba(60, 60, 60, 0.7)",

                    "&:hover": {
                      opacity: "0.4",
                      width: "100%",
                      height: "100%",
                      transition: "0.3s"

                    }
                  }}>
                    <img src={v.rasm} alt="" style={{ width: "100%", height: "auto", }} />
                    <Box sx={{ position: "absolute", }}>
                      <Typography sx={{ width: "80px", height: "3px", background: "#fbb710", position: "relative", m: "50px 0px 15px 50px", display: "block" }}></Typography>
                      <Typography sx={{ ml: "50px", fontSize: "16px", color: "#6d6d6d"}}>{v.price}</Typography>
                      <Typography sx={{ ml: "50px", fontSize: "24px",color:"#242424", fontWeight: "500" }}>{v.name}</Typography>
                    </Box>
                  </Grid>
                </Link> 
              </Grid>
            ))}
          </Grid>


        </Grid>

      </Box>
    </Box>
  )
}

export default Home