import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";
import React from "react";

const PageTitle = styled.div`
  flex-grow: 4;
  font-size: clamp(20px, 4vw, 25px);
`
const HeaderBarJob = () =>
        <AppBar position="static" sx={{ background:"#082038", py:0.3 }}>
            <Toolbar>
                <PageTitle>
                    Job Offer
                </PageTitle>
            </Toolbar>
        </AppBar>

export default HeaderBarJob;