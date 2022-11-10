import React from 'react'

export default function MobilePage(props) {
  return (
    <div className="card">
        <div className="imageContainer">
            <img alt="test" src="https://images.samsung.com/is/image/samsung/assets/uk/2208/home/Home_Q4_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$"/>
        </div>

        <h1>{props.title}</h1>
        <p>{props.desc}</p>

        <button>Learn more</button>
        <button>Shop now</button>
    </div>
  )
}
