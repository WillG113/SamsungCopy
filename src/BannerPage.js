import React from 'react'

export default function BannerPage(props) {

  return (
    <div className="card">
        <div className="bannerImage">
            <div className="bannerText">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <div className="bannerButtons">
                    <button>Learn more</button>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
