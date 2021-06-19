import NavBar from "../Components/NavBar"

import {Button} from "@material-ui/core"


import axios from 'axios'

import "./UploadPage.css"
import React, {  useState } from 'react';


const UploadPage = () =>
{


    const [downloadFile,setDownloadFile] = useState("");
    const [waiting,setWaiting] = useState("")
    const [imageName,setImageName] = useState("")


    const sendPhoto = (e) => {
        let file = e.target.files[0];
        let url;
        setImageName(file.name)

        const reader = new FileReader();
        reader.onload = () =>{
            url = reader.result.slice(22).replaceAll("/","-");
            console.log(reader.result)
            axios.get("http://127.0.0.1:8080/image/" + url)
                .then(res=>
                {
                    
                    setDownloadFile(res.data.message)
                })
        }
        reader.readAsDataURL(file)
        
        setWaiting("process")
        //console.log(imageName)
        

    }

    return(
        <div className="UploadPageWrapper">
            <NavBar id="NavBar"/>
            <div className="UploadPhotoWrapper">
                <div className="UploadButton">
            <input
        accept="image/*"
        className="input"
        id="contained-button-file"
        multiple
        type="file"
        onChange = {(e)=>
            {
                sendPhoto(e)
        }}
      />
      <label htmlFor="contained-button-file">
        {!imageName && !downloadFile &&  <Button variant="contained" color="primary" component="span">
        Upload Image
        </Button>}
        {waiting  &&  !downloadFile &&<Button variant="contained" color="primary">
          Processing
        </Button>}
        {
            downloadFile && 
            <a download= {imageName} href = {"data:image/png;base64,"+downloadFile }>
            <Button variant="contained" color="primary" component="span" onClick={()=>
            {
                setDownloadFile("")
                setImageName("")
                setWaiting("")
            }}>
            download Image
          </Button>
          </a>
        }
        </label>
        </div>
    
        </div>
        </div>
    )
}

export default UploadPage