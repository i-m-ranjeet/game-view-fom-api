import React from 'react'

function Card(props) {
    // console.log("object",props)
    return (
        < >
            <img src={props.element.thumbnail} alt="thumbnail"  />
            <p>
                <div>Publisher : {props.element.publisher}</div> 
                <div>Genration :{props.element.genre}</div> 
                <div>Release : {props.element.release_date }</div> 
                <div>Platform : {props.element.platform }</div> 
            </p>
            <h4> {props.element.title}</h4>
        </>
    )
}

export default Card
