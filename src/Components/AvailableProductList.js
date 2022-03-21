import {useState} from 'react';

import classes from './AvailableProductList.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function AvailableProductList({products, onProdClick}){
    const [activeLiId, setactiveLiId] = useState('');

    function onLiClick(e){
        setactiveLiId(e.target.innerText);
        onProdClick(e.target.innerText);
    }

    let uniqueProducts = [];

    uniqueProducts = products.map((prod)=> prod.product);
    uniqueProducts = [...new Set(uniqueProducts)];
    uniqueProducts = uniqueProducts.sort();


    return (
        <ul className= {classes.listgroup}>
            <li className= {activeLiId==='' || activeLiId=== "Search All"? classes.active:''} onClick= {onLiClick} ><strong>Search All</strong></li>
            {uniqueProducts.map((prod)=> 
                <li key= {prod} onClick= {onLiClick} className= {activeLiId === prod ? classes.active: ''} >
                    <strong>{prod}</strong>
                </li>)}
        </ul>
    );
}

export default AvailableProductList;