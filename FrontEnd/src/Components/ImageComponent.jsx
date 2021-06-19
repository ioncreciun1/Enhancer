
import { Typography } from "@material-ui/core"
import "./ImageComponent.css"

const ImageComponent = (props) => 
{
    return(
    <div  className = {props.background === "image1" ? "wrapperImage1": props.background==="image2"? "wrapperImage2" : "wrapperVideo"} 
    >
        <Typography className = "ImageComponentText" variant ="h3">{props.text}</Typography>
    </div>
    )
}

export default ImageComponent