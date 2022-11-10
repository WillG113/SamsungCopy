import React, { createRef } from 'react'
import DealsPage from './DealsPage'

export default function Deals() {

const scrollRef = createRef();

function pageFunction() {
    const pageContent = []
    for(let i = 0; i < 4; i++) {
        pageContent.push(<DealsPage key={i}></DealsPage>);
    }
    return pageContent;
}

function scrollFunction(input) {

    let scrollVal = 0;
    let divWidth = 2560 * 0.55;

    if(input === 1){
        scrollVal = 0;
    } else if (input === 2) {
        scrollVal = divWidth;
    } else if (input === 3) {
        scrollVal = divWidth * 2;
    } else if (input === 4) {
        scrollVal = divWidth * 3;
    } else if (input === 5) {
        scrollVal = divWidth * 4;
    }

    scrollRef.current.scrollTo(scrollVal, 0);

}


  return (
    <div className="latestDeals">

        <h1>Latest Deals</h1>
        <ul class="bannerNav">
            <li><button onClick={() => scrollFunction(1)}>New In</button></li>
            <li><button onClick={() => scrollFunction(2)}>Mobile</button></li>
            <li><button onClick={() => scrollFunction(3)}>TV & AV</button></li>
            <li><button onClick={() => scrollFunction(4)}>Home Appliances</button></li>
            <li><button onClick={() => scrollFunction(5)}>Laptops & Monitors</button></li>
        </ul>

        <div className="scrolling-wrapper" ref={scrollRef}>
            {pageFunction()}
        </div>
    </div>
  )
}
