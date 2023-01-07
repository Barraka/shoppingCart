import React from 'react'
import Product from './Product';

function Derp(props) {
    function importAll(r) {
        return r.keys().map(r);
      }
    const imgBirds = importAll(require.context('../assets/derpbirds', false, /\.(png|jpe?g|svg|webp)$/));
    const output=imgBirds.map(x=> {
        return (<Product img={x} key={x} dataid={x} setCart={props.setCart} cart={props.cart}/>);
    });

    return (
        <div>
            <div className='collectionTitle'>Derp Birds collection:</div>
            <div className='shopNFT shopBirds'>
                {output}
            </div>            
        </div>
    )
}

export default Derp