import React from "react";
import "./Slider.css";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";

export default function Slide(props: any) {
    const {data, dataIndex} = props;
    const {image} = data[dataIndex];

    console.log(image);
    return (
        <div className="card-card" draggable={false}>
            
            <div className="detail fill">
                <div className="discription">
                    <img
                        style={{ width: 100 }}
                        alt="j"
                        className="cover-image"
                        src={image}
                    />
                </div>
            </div>
        </div>
    );
}
