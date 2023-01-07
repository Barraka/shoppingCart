import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Shop(props) {
    const [showcase, setShowcase] = useState('');
    function importAll(r) {
        return r.keys().map(r);
      }
    const imgKongs = importAll(require.context('../assets/chilledkongs', false, /\.(png|jpe?g|svg|webp)$/))[0];
    const imgBirds = importAll(require.context('../assets/derpbirds', false, /\.(png|jpe?g|svg|webp)$/))[0];
    const imgAquas = importAll(require.context('../assets/aquafarmers', false, /\.(png|jpe?g|svg|webp)$/))[0];
    const defaultDisplay =(
        <div className="shoptitle">
            <div className="shopText">
                Browse our catalog by selecting which collection you want to choose from.<br/>
                Here are some sample best sellers from each category:<br/>
                <span className='addition'>(because of market volatility, prices are updated in real time)</span>
            </div>
            <div className='showcase'>
                    <Link to="/shop/chilledkongs" onClick={hide} data-id={1}>
                        <div className="showcaseWrapper scKongs" onMouseOver={selectionIn} onMouseOut={selectionOut} data-id={1}>
                            <img src={imgKongs} draggable={false}/>
                        </div>
                    </Link>
                    <Link to="/shop/derpbirds" onClick={hide} data-id={2}>
                        <div className="showcaseWrapper scBirds" onMouseOver={selectionIn} onMouseOut={selectionOut} data-id={2}>
                            <img src={imgBirds} draggable={false}/>
                        </div>
                    </Link>
                    <Link to="/shop/aquafarmers" onClick={hide} data-id={3}>
                        <div className="showcaseWrapper scAquas" onMouseOver={selectionIn} onMouseOut={selectionOut} data-id={3}>
                            <img src={imgAquas} draggable={false}/>
                        </div>
                    </Link>
                </div>
        </div>
    );
    useEffect(()=> {
        setShowcase(defaultDisplay)
    },[]);

    function hide() {
        setShowcase('');
        props.setShoplevel(1);
        const links = document.querySelectorAll('.sublink');
        links.forEach(x=>x.classList.remove('linkhover'));
    }
    useEffect(()=> {
        if(props.shoplevel===0) {
            setShowcase(defaultDisplay)
        }
        
    },[props.shoplevel]);

    function selectionIn(e) {
        const id=e.currentTarget.getAttribute('data-id');
        const sublink = document.querySelector(`.sublink[data-id="${id}"]`);
        sublink.classList.add('linkhover');
        e.currentTarget.classList.add('linkhover');
    }
    function selectionOut(e) {
        const id=e.currentTarget.getAttribute('data-id');
        const sublink = document.querySelector(`.sublink[data-id="${id}"]`);
        sublink.classList.remove('linkhover');
        e.currentTarget.classList.remove('linkhover');
    }
    return (
        <div className='shop'>
            <nav className='subnav'>
                <Link to="/shop/chilledkongs" className='sublink kongs' onClick={hide} data-id={1}>Chilled Kongs</Link>
                <Link to="/shop/derpbirds" className='sublink birds' onClick={hide} data-id={2}>Derp Birds</Link>
                <Link to="/shop/aquafarmers" className='sublink aqua' onClick={hide} data-id={3}>Aqua Farmers</Link>
            </nav>
            {showcase}
            
            <Outlet />
            
        </div>
    )
}

export default Shop