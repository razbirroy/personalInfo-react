import React, { useState } from 'react';
import './Final.css'
const Final = (props) => {
    const contain = props.contain
    //const [result, setResult] = useState(contain)
    let amount = 0;
    for (let i = 0; i < contain.length; i++){
        const getElement = contain[i];
        amount = amount + getElement.sallery;
    }

    const year = amount * 12;
    return (
        <div>
            <h3>Person Added: {contain.length}</h3>
            <h3>Total Monthly Sallery: {amount}</h3>
            <h3>Annual Sallery: {year}</h3>
        </div>
    );
};

export default Final;