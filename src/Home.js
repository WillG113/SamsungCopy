import React, { createRef } from 'react'
import HomePage from './HomePage';

export default function Home() {
    const title = ["Test", "Test2", "Test3", "Test4"];
    const desc = ["Desc", "Desc2", "Desc3", "Desc4"];
    const scrollRef = createRef()

    function pageFunction() {
        const pageContent = [];
        for(let i = 0; i < 4; i++) {
            pageContent.push(<HomePage key={i} title={title[i]} desc={desc[i]}></HomePage>);
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
        <div className="home">

            <div className="spacer"></div>
            <h1>Home Appliances</h1>

            <ul>
                <li><button onClick={() => scrollFunction(1)}>BESPOKE AI™ Laundry</button></li>
                <li><button onClick={() => scrollFunction(2)}>BESPOKE</button></li>
                <li><button onClick={() => scrollFunction(3)}>BESPOKE Jet™</button></li>
                <li><button onClick={() => scrollFunction(4)}>Samsung Jet Bot™</button></li>
                <li><button onClick={() => scrollFunction(5)}>AirDresser</button></li>
            </ul>

            <div className="scrolling-wrapper" ref={scrollRef}>
                {pageFunction()}
            </div>
        </div>
    )
}
