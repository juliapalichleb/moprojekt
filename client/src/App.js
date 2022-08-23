import './App.css';
import { Box } from "@mui/material";
import PageDrawer from "./component/PageDrawer/PageDrawer";
import { Route, Routes } from "react-router-dom";
import Candidate from "./pages/Candidate/Candidate";
import JobOffer from "./pages/JobOffer/JobOffer";

function App() {

  return (
      <Box sx={{ display:'flex' }}>
          <PageDrawer></PageDrawer>
          <Routes>
              <Route path="/" element={<Candidate />}></Route>
              <Route path="/Job" element={<JobOffer />}></Route>
          </Routes>
      </Box>
              //
              // {/*<Grid xs={10} sm={3}> <Item>3</Item></Grid>*/}
              // {/*<div className="App">*/}
              // {/*    <Card>*/}
              // {/*        <button onClick={handleOnClick}>KlIK</button>*/}
              // {/*        <p>{data}</p>*/}
              // {/*        <button onClick={handleOnClick2}>2KlIK2</button>*/}
              // {/*        <p>{data}</p>*/}
              // {/*    </Card>*/}
              // {/*</div>*/}
  );
}

export default App;
