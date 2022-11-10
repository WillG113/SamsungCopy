import React from 'react'

export default function HomePage(props) {
  return (
    <div className="card">
        <div className="homeImage"  style={{backgroundImage: 'url("' + props.image + '")'}}>
            <div className="bottom">
                <h1>{props.title}</h1>
                <h3>{props.desc}</h3>

                <button>Learn more</button>
                <button>Shop now</button>
            </div>
        </div>
    </div>
  )
}
