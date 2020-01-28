import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../Css/Slider.css'



const Slider = () => {
    return (
        <AwesomeSlider>
            <div className={'sliderContainer'}><img src={require("../images/slider/002.jpg")} alt=""/></div>
            <div className={'sliderContainer'}><img src={require("../images/slider/003.jpg")} alt=""/></div>
            <div className={'sliderContainer'}><img src={require("../images/slider/004.jpg")} alt=""/></div>
            <div className={'sliderContainer'}><img src={require("../images/slider/005.jpg")} alt=""/></div>
            <div className={'sliderContainer'}><img src={require("../images/slider/006.jpg")} alt=""/></div>
        </AwesomeSlider>
    )
};

export default Slider;

