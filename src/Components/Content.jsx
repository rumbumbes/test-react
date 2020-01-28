import React from "react";
import '../Css/Content.css'

import Slider from "./Slider";

const Content = () => {
    return (
        <div className="content-page-01">
            <h1 className={'main-title'}>Here will be some good shit!</h1>
            <div className="slider-wrapper">
                <Slider/>
            </div>
        </div>
    )
}

export default Content;
