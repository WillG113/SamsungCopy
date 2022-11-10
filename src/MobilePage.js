import React from 'react'

export default function MobilePage(props) {
  return (
    <div className="card">
        <div className="imageContainer">
            <img alt="test" src={props.image}/>
        </div>

        <h1>{props.title}</h1>
        <p>{props.desc}</p>

        <button>Learn more</button>
        <button>Shop now</button>
    </div>
  )
}
