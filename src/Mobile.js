import React, { createRef } from 'react'
import MobilePage from './MobilePage';

export default function Mobile() {

    const title = [
        "Galaxy Z Fold4",
        "Galaxy Z Flip4 Bespoke Edition",
        "Galaxy Z Flip4",
        "Galaxy Watch5 | Watch5 Pro",
        "Galaxy Buds2 Pro"
    ];
    const desc = [
        "Claim a free Galaxy Tab S6 Lite and enjoy 12 months of Disney+ on us",
        "Claim a free Galaxy Tab S6 Lite and enjoy 12 months of Disney+ on us",
        "Claim a free Galaxy Tab S6 Lite and enjoy 12 months of Disney+ on us",
        "",
        ""
    ];
    const images = [
        "https://images.samsung.com/is/image/samsung/assets/uk/2208/home/Home_Q4_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/2208/home/Home_B4_Bespoke_KV_MX-KV_743x418_pc.jpg?$743_418_PNG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/2208/home/Home_B4_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/2208/home/HOME_Watch5-Combo_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/2208/home/HOME_Buds2-Pro_KV_MX-KV_743X418_pc.jpg?$743_418_PNG$",
        ]
    const scrollRef = createRef();

    function pageFunction() {
        const pageContent = [];
        for(let i = 0; i < 5; i++) {
            pageContent.push(<MobilePage key={i} title={title[i]} desc={desc[i]} image={images[i]}></MobilePage>);
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
        <div className="mobile">

            <h1>Mobile</h1>
                    
            <ul>
                <li><button onClick={() => scrollFunction(1)}>Galaxy Z Fold4</button></li>
                <li><button onClick={() => scrollFunction(2)}>Galaxy Z Flip4 Bespoke Edition</button></li>
                <li><button onClick={() => scrollFunction(3)}>Galaxy Z Flip4</button></li>
                <li><button onClick={() => scrollFunction(4)}>Galaxy Watch5 | Watch5 Pro</button></li>
                <li><button onClick={() => scrollFunction(5)}>Galaxy Buds2 Pro</button></li>
            </ul>

            <div className="scrolling-wrapper" ref={scrollRef}>
                {pageFunction()}
            </div>
        </div>
    )
}
