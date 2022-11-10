import React, { createRef } from 'react'
import HomePage from './HomePage';

export default function Home() {
    const title = [
        "BESPOKE AI™ Laundry",
        "The new customisable Bespoke refrigeration range",
        "BESPOKE Jet Vacuum Cleaners",
        "Samsung Jet Bot",
        "99.9% Sanitisation of Your Clothes"
    ];
    const desc = [
        "11kg with SpaceMax™",
        "Mix and match from a choice of coloured interchaneable panels and unique finsihes to create your own unique look for your freidge and freezer",
        "Trap dust once and for all with the new all-in-one bespoke Jet vacuum cleaner and Clean Station",
        "Ditch dust for good with the all new Samsung Jet Bot range",
        "Steam through your laundry, get free next day delivery and spread the cost for up to 24 months with 0% finance"
    ];
    const images = [
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/2022_bespoke-ai-laundry_home_product_marketing_pc.jpg?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/MarketingSection1440x810DTBespoke.png?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/home/Marketing_Section_1440x810_DT_BESPOKE_Jet_Vacuum_Cleaners_V2.png?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/home/Marketing_Section_1440x810_DT_Jet_Bot_V3.png?$1440_810_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/p6_gro1/p6_initial_home/DT_1440x810_Airdresser.png?$1440_810_JPG$"
    ];

    const scrollRef = createRef()

    function pageFunction() {
        const pageContent = [];
        for(let i = 0; i < 4; i++) {
            pageContent.push(<HomePage key={i} title={title[i]} desc={desc[i]} image={images[i]}></HomePage>);
        }
        return pageContent;
    }

    function scrollFunction(input) {

        let scrollVal = 0;
        let divWidth = (2560 - 15) * 0.55;

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
            <div className="top">
                <h1>Home Appliances</h1>

                <ul>
                    <li><button onClick={() => scrollFunction(1)}>BESPOKE AI™ Laundry</button></li>
                    <li><button onClick={() => scrollFunction(2)}>BESPOKE</button></li>
                    <li><button onClick={() => scrollFunction(3)}>BESPOKE Jet™</button></li>
                    <li><button onClick={() => scrollFunction(4)}>Samsung Jet Bot™</button></li>
                    <li><button onClick={() => scrollFunction(5)}>AirDresser</button></li>
                </ul>
            </div>

            <div className="scrolling-wrapper" ref={scrollRef}>
                {pageFunction()}
            </div>
        </div>
    )
}
