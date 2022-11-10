import React, { createRef } from 'react'
import TVPage from './TVPage';

export default function TV() {

    const title = [
        "The all-new 2022 Neo QLED TVs",
        "Time to up your game with 2022 QLED 4K",
        "The grand unbeiling of The Frame 2022",
        "The best-in-class, crystal clear choice",
        "Unexpected joy everywhere"
    ];
    const desc = [
        "Enjoy entertainment without boundaries, where the only edge you'll notice is the edge of your seat.",
        "Give your gameplay a boost on the big screen in glorious 4K resolution with a 120Hz refresh rate.",
        "Introducing a screen designed to blend in, with a picture designed to stand out.",
        "",
        "Portable, powerful and surprisingly simple."
    ];
    const images = [
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/Marketing_Section_1440x810_DT_2022_Neo_QLED_TVs_V2.png?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/Marketing_Section_1440x810_DT_2022_QLED_4K.png?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/Marketing_Section_1440x810_DT_The_Frame_2022_without_roundel.png?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/home/2021_Home_GBM_ProductMarketing_CrystalUHD_PC.jpg?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/TheFreeStyle_1440x8101.jpg?$1440_810_JPG$"
    ];

    const scrollRef = createRef();

    function pageFunction() {
        const pageContent = [];
        for(let i = 0; i < 5; i++) {
            pageContent.push(<TVPage key={i} title={title[i]} desc={desc[i]} image={images[i]}></TVPage>);
        }
        return pageContent;
    }

    function scrollFunction(input) {

        let scrollVal = 0;
        let divWidth = (2560 - 15)  * 0.55;

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

            <div className="top">
                <h1>TV & AV</h1>

                <ul>
                    <li><button onClick={() => scrollFunction(1)}>Neo QLED</button></li>
                    <li><button onClick={() => scrollFunction(2)}>QLED</button></li>
                    <li><button onClick={() => scrollFunction(3)}>Lifestyle TVs</button></li>
                    <li><button onClick={() => scrollFunction(4)}>Crystal UHD</button></li>
                    <li><button onClick={() => scrollFunction(5)}>The Freestyle</button></li>
                </ul>
            </div>


            <div className="scrolling-wrapper" ref={scrollRef}>
                {pageFunction()}
            </div>
        </div>
    )
}


