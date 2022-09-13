import { AppBar, Toolbar } from "@mui/material";
import styled from 'styled-components';
import React from "react";

import { FilterSystem } from "../index";

const PageTitle = styled.div`
  flex-grow: 4;
  font-size: clamp(20px, 4vw, 25px);
`

const HeaderBarCandidate = () =>
        <AppBar position="static" sx={{ background:"#082038", py:0.3 }}>
            <Toolbar>
                <PageTitle>
                    Candidate
                </PageTitle>
                <FilterSystem/>
            </Toolbar>
        </AppBar>

export default HeaderBarCandidate;