import * as React from 'react';
import { Box, Grid, Link, Typography } from "@mui/material"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Ortga() {
    return (
        <Box>
            <Link href='#' sx={{
                position: "fixed",
                zIndex: "2147483647",
                display: "block",
                backgroundColor: "#fbb710",
                borderRadius: "0",
                bottom: "60px",
                boxShadow: "0 2px 6px 0 rgb(0 0 0 / 30%)",
                color: "#ffffff",
                fontSize: "24px",
                height: "40px",
                lineHeight: "35px",
                right: "60px",
                textAlign: "center",
                width: "40px",
                transitionDuration: "500ms",
            }}>
                <ExpandLessIcon sx={{color:"#fff"}}/>
            </Link>

        </Box >
    )
}
export default Ortga