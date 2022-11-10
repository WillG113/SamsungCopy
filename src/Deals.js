import React, { createRef } from 'react'
import DealsPage from './DealsPage'

export default function Deals() {

const stuff = [
    [
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/BlackFridayTab_BigTile_Save2500nSmartphones_dt_684x684.jpg?$684_684_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/BlackFridayTab_SmallTile_FreeSoundbar_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/BlackFridayTab_SmallTile_TabS8Series_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/BlackFridayTab_SmallTile_DA-Multi_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/ComputingTab_SmallTile_Book2-360_dt_330x330.jpg?$330_330_JPG$"
    ],
    [
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/MobileTab_BigTile_FreeTabS6Lite_dt_684x684.jpg?$684_684_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/MobileTab_SmallTile_S22Ultr_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/MobileTab_SmallTile_Watches_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/MobileTab_SmallTile_TabS8Series_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/MobileTab_SmallTile_Buds_dt_330x330.jpg?$330_330_JPG$"
    ],
    [
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/TVTab_BigTile_FreeSoundbar_dt_684x684.jpg?$684_684_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/TVTab_SmallTile_QE75QN900BTXXU_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/home/TVTab_SmallTile_HW-B430_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/TVTab_SmallTile_UE55BU8500KXXU_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/TVTab_SmallTile_Frame_dt_330x330.jpg?$330_330_JPG$"
    ],
    [
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/DATab_BigTile_MultiAppTradeUp_dt_684x684.jpg?$684_684_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/DATab_SmallTile_RH69B8031S9_EU_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/DATab_SmallTile_WW10T684DLH_S1_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/DATab_SmallTile_VS15T7036R5_EU_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/DATab_SmallTile_3Appliances_dt_330x330.jpg?$330_330_JPG$"
    ],
    [
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/ComputingTab_BigTile_Book2_dt_684x684.jpg?$684_684_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/ComputingTab_SmallTile_Book2-360_dt_330x330_v1.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/ComputingTab_SmallTile_Book2Business_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/ComputingTab_SmallTile_OdysseyOLEDG8_dt_330x330.jpg?$330_330_JPG$",
        "https://images.samsung.com/is/image/samsung/assets/uk/homepage/ComputingTab_SmallTile_SmartMonitor_dt_330x330.jpg?$330_330_JPG$    "
    ],
]    
const scrollRef = createRef();

function pageFunction() {
    const pageContent = []
    for(let i = 0; i < 5; i++) {
        pageContent.push(<DealsPage key={i} images={stuff[i]}></DealsPage>);
    }
    return pageContent;
}

function scrollFunction(input) {

    let scrollVal = 0;
    let divWidth = 2560 * 0.60;

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
