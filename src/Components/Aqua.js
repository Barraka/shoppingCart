import React from 'react'
import Product from './Product';

function Aqua(props) {
    function importAll(r) {
        return r.keys().map(r);
      }
    const imgAquas = importAll(require.context('../assets/aquafarmers', false, /\.(png|jpe?g|svg|webp)$/));
    const output=imgAquas.map(x=> {
        return (<Product img={x} key={x} dataid={x} setCart={props.setCart} cart={props.cart}/>);
    });

    return (
        <div>
            <div className='collectionTitle'>Aqua Farmers collection:</div>
            <div className='shopNFT shopBirds'>
                {output}
            </div>            
        </div>
    )
}

export default Aqua