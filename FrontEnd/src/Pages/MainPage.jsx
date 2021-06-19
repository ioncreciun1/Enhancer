
import {Grid} from "@material-ui/core"

import { Link } from 'react-router-dom';

import "./MainPage.css"

import ImageComponent from  "./../Components/ImageComponent"
import NavBar from "./../Components/NavBar"

const MainPage = () =>{
    return (
        <div className = "MainPage">
        <NavBar/>
      <Grid container className = "Wrapper">
        <Grid item xs={4}>
         <Link to = "/blackWhiteImage" className="link"> 
    <ImageComponent text="Black/White Image" background = "image1"/>
    </Link>  
    </Grid>
    <Grid item xs={4}>
    <Link to = "/blackWhiteImage" className="link"> 
    <ImageComponent text="Black/White Video"  background = "video"/>
    </Link>
    </Grid>
    <Grid item xs={4}>
        <Link to = "/blackWhiteImage" className="link"> 
    <ImageComponent text="Image Enhance"  background = "image2"/>
    </Link>
    </Grid>
    </Grid>
    </div>
    );
}

export default MainPage