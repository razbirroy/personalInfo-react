import React, { useState } from 'react';
import duplicateData from '../../duplicateData';
import Product from '../Product/Product';
import './Jason.css';
import Final from '../Final/Final';

const Jason = () => {
    const pis10 = duplicateData.slice(0, 17);
    const [profile, setProfile] = useState(pis10);
    const [contain, setContain] = useState([])
    const handler = (props) => {
        const newData = [...contain, props]
        setContain(newData)
    }
    
    return (
        <div className = "main-container">
            <div className='little-container'>
              {
                  profile.map(item => <Product handler = {handler} item = {item}></Product>)
              } 
            </div>
            <div className='small-container'>
                 <Final contain = {contain}></Final>
            </div>
        </div>
    );
};

export default Jason;