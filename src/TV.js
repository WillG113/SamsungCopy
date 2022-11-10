import React, { createRef } from 'react'
import TVPage from './TVPage';

export default function TV() {

    const title = ["Test", "Test2", "Test3", "Test4", "Test5"];
    const desc = ["Desc", "Desc2", "Desc3", "Desc4", "Desc5"];
    const scrollRef = createRef();

    function pageFunction() {
        const pageContent = [];
        for(let i = 0; i < 5; i++) {
            pageContent.push(<TVPage key={i} title={title[i]} desc={desc[i]}></TVPage>);
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
        <div className="tv">

            <h1>TV & AV</h1>

            <ul>
                <li><button onClick={() => scrollFunction(1)}>Neo QLED</button></li>
                <li><button onClick={() => scrollFunction(2)}>QLED</button></li>
                <li><button onClick={() => scrollFunction(3)}>Lifestyle TVs</button></li>
                <li><button onClick={() => scrollFunction(4)}>Crystal UHD</button></li>
                <li><button onClick={() => scrollFunction(5)}>The Freestyle</button></li>
            </ul>


            <div className="scrolling-wrapper" ref={scrollRef}>
                {pageFunction()}
            </div>
        </div>
    )
}


