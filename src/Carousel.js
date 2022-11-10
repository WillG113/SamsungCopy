import React from 'react'
import BannerPage from './BannerPage'

export default function Carousel() {

    const title = ["Test", "Test2", "Test3", "Test4"];
    const desc = ["Desc", "Desc2", "Desc3", "Desc4"];

function pageFunction() {
    const pageContent = []
    for(let i = 0; i < 4; i++) {
        pageContent.push(<BannerPage key={i} title={title[i]} desc={desc[i]}></BannerPage>);
    }
    return pageContent;
}


return (
<div className="banner">
    <div className="scrolling-wrapper">
        {pageFunction()}
    </div>
</div>
)
}
