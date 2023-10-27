import logo from './logo.svg';
import './App.css';
import { CssBaseline, Grid } from '@mui/material';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  return (
    <>
    <CssBaseline/>
    <Header />
    <Grid container spacing={3} style={{width: '100%', backgroundColor: "blue"}}>
        <Grid item xs={12} md={4} style={{backgroundColor: "red"}}>
          <List />
        </Grid>
        <Grid item xs={12} md={7} style={{backgroundColor: "green"}}>
          <Map/>
        </Grid>
        <Grid item xs={12} md={1}>
          <PlaceDetails/>
          
        </Grid>
        <Grid item xs={12} md={4}>
          
        </Grid>
    </Grid>

     
    </>
  );
}

export default App;
