import React from 'react';
import './FeaturedImage.css';

const FeaturedImage = (props) => {
    return (
        <div className="rmdb-featuredimage"
            style={{
                background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
                39%, rgba(0,0,0,0)
                41%, rgba(0,0,0,0.65)
                100%),
                url('${props.image}'), #1c1c1c`
            }}
            >
                <div className="rmdb-featuredimage-content">
                    <div className="rmdb-featuredimage-text">
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </div>
                </div>

            </div>
        
    )
}

export default FeaturedImage;