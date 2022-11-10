import React from 'react'

export default function DealsPage(props) {
  return (
    <div className="card">
        <div className="images">
            <div className="container2">
                <div className="container3">
                    <div className="box2"   style={{backgroundImage: 'url("' + props.images[0] + '")'}}>
                        <h1 className="Title">Placeholder</h1>
                    </div>
                </div>
                <div className="container123">
                    <div className="box123"   style={{backgroundImage: 'url("' + props.images[1] + '")'}}>
                        <h1 className="SmallTitle">Placeholder</h1>
                    </div>
                    <div className="box123"   style={{backgroundImage: 'url("' + props.images[2] + '")'}}>
                        <h1 className="SmallTitle">Placeholder</h1>
                    </div>
                    <div className="box123"   style={{backgroundImage: 'url("' + props.images[3] + '")'}}>
                        <h1 className="SmallTitle">Placeholder</h1>
                    </div> 
                    <div className="box123"   style={{backgroundImage: 'url("' + props.images[4] + '")'}}>
                        <h1 className="SmallTitle">Placeholder</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
