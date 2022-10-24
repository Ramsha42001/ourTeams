import React from "react";

function Images(props)
{
    return (
        <div className="Image">
                <img className="image1" src={props.img} />
        </div>
    )
}

export default Images;