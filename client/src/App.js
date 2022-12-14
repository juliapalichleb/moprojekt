import { Box, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { PageDrawer } from "./component/index";
import { FirstPage, SecondPage, ThirdPage } from "./pages/index";
import './App.css';

function App() {

  return (
      <Box sx={{ display:'flex' }}>
          <Grid container>
              <Grid item sx={{ width:"200px" }}>
                  <PageDrawer></PageDrawer>
              </Grid>
              <Grid item sx={{ width:"calc(100% - 200px);" }} >
                  <Routes>
                      <Route path="/" element={<FirstPage />}></Route>
                      <Route path="/Job" element={<SecondPage />}></Route>
                      <Route path="/CandidateProfile" element={<ThirdPage />}></Route>
                  </Routes>
              </Grid>
          </Grid>
      </Box>
  );
}

export default App;
