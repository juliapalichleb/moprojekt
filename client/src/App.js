import './App.css';
import {Box, Grid} from "@mui/material";
import PageDrawer from "./component/PageDrawer/PageDrawer";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";

function App() {

  return (
      <Box sx={{ display:'flex' }}>
          <Grid container>
              <Grid item sx={{width:"200px"}}>
                  <PageDrawer></PageDrawer>
              </Grid>
              <Grid item sx={{width:"calc(100% - 200px);"}} >
                  <Routes>
                      <Route path="/" element={<FirstPage />}></Route>
                      <Route path="/Job" element={<SecondPage />}></Route>
                  </Routes>
              </Grid>
          </Grid>
      </Box>
  );
}

export default App;
