import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  console.log(props)
    const {name, street, city, phone, email, sallery, img, } = props.item
    return (
        <div className = "head-container">
            <div className = 'picture-container'> 
                <img src= {img} alt=""/>
            </div>
            <div className ="first-container">
              <div className = "middle-container">

                <h3>Name: {name}</h3>
                <h3>Street: {street}</h3>
                <h3>City: {city}</h3>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>salary: {sallery}</h3>
                
                <button onClick={() => props.handler(props.item)}><FontAwesomeIcon icon={faPlus}/></button>
              </div>  
            </div>
        </div>
    );
};

export default Product;