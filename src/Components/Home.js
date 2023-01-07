import React from 'react'
import img from '../assets/home1.jpg';

function Home() {
    return (
        <div className='home'>
            <div className='homeLogo'>NFTstore</div>
            <div className="homeTitle">The ultimate place for useless NFTs</div>
            <div className="imageWrapper">
                <img src={img}></img>
                </div>
        </div>
    )
}

export default Home