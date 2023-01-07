import React from 'react'
import Product from './Product';

function Ape(props) {
    function importAll(r) {
        return r.keys().map(r);
      }
    const imgKongs = importAll(require.context('../assets/chilledkongs', false, /\.(png|jpe?g|svg|webp)$/));
    const output=imgKongs.map(x=> {
        return (<Product img={x} key={x} dataid={x} setCart={props.setCart} cart={props.cart}/>);
    });
    return (
        <div>
            <div className='collectionTitle'>Chilled Kongs collection:</div>
            <div className='shopNFT shopKongs'>
                {output}
            </div>
            
        </div>
    )
}

export default Ape