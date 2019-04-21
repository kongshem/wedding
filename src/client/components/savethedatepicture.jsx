import React from 'react';
import SaveTheDate from "../img/save_the_date.PNG";

export default class SaveTheDatePicture extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="std_pic">
                <img src={SaveTheDate}/>
            </div>
        )
    }
}
