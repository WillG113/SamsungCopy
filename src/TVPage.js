import React from 'react'

export default function TVPage(props) {

  return (
        <div className="card">
                        <div className="tvImage" style={{backgroundImage: 'url("' + props.image + '")'}}>            
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
