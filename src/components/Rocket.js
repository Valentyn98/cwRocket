import React from "react";

 function  Rocket({item: value}){
    return (
        <div>        {value.mission_name}  {value.launch_year}
            <img src={value.links.mission_patch} alt=""/>
        </div>

    )
}
export default Rocket